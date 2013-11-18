function TransactionsTile(options) {
    // --- Local State
    var thisTile = this,
        locTile = options.localizer.get("TransactionTile"),

        tileElement = options.tileElement,
        gridSelector = options.gridSelector,
        chartSelector = options.chartSelector,
        gridExpensesContainer = options.gridExpensesContainer,
        
        pieChartSelector = options.pieChartSelector,
        pieChartElement = pieChartSelector + "Chart",
        pieChartLegendElement = pieChartSelector + "Legend",
        
        btnGridChart = options.btnGridChart,
        btnControlsDown = options.btnControlsDown,
        btnControlsUp = options.btnControlsUp,
        
        periodButtons = options.periodButtons,
        datePickers = options.datePickers,
        chartSeriesGroup = options.chartSeriesGroup,
        
        startDatePicker = options.startDatePicker,
        endDatePicker = options.endDatePicker,
        
        dataActionUrl = options.dataActionUrl,


        viewModeBase = (options.viewModeBase || "chart"),
        chartSeriesType = (options.chartSeriesType || "Line"),
        baseContentPath = options.baseContentPath,

        //  Some behavior customization hooks
        categoryAxisLabel = (options.categoryAxisLabel || "Date"),
        categorySeriesMember = (options.categorySeriesMember || "Amount"),
        initChart = (options.initChart || initChartPrivate),
        initGrid = (options.initGrid || initGridPrivate),
        createSchema = (options.createSchema || createTransactionSchema);

    this.dataSource = null;
    this.summaryDataSource = null;
    //  ------------------------------ Initialize chart manager
    var chartManager = new ControlManager({
        selector: chartSelector,
        create: initChart,
        updateData: function (data) {
            $(chartSelector).igDataChart("option", "dataSource", data.data());
        }
    });

    //  ------------------------------ Initialize chart manager
    var pieChartManager = new ControlManager({
        selector: pieChartSelector,
        create: initPieChart,
        updateData: function (data) {
            $(pieChartElement).igPieChart("option", "dataSource", data.data());
            if (data.data().length > 1) {
                $(pieChartElement).show();
            }
        }
    });

    //  ------------------------------ Initialize chart manager
    var gridManager = new ControlManager({
        selector: gridExpensesContainer,
        create: initGrid,
        updateData: function(data) {
            $(gridSelector).igGrid("dataSourceObject", data.data());
            $(gridSelector).igGrid("dataBind");
        }
    });

    //  ------------------------------ Initialize view mode
    this.viewMode = new ViewMode({
        viewMode: viewModeBase,
        modeHandlers: {
            "chart": {
                name: "chart",
                hide: chartManager.hide,
                show: chartManager.show,
                dataLength: chartManager.dataLength,
                nextMode: "pie",
                spriteClass: "sprite-main sprite-chart-mode",
                icon: baseContentPath + "/images/PieChartMode.png"
            },
            "pie": {
                name: "pie",
                hide: pieChartManager.hide,
                show: pieChartManager.show,
                dataLength: pieChartManager.dataLength,
                spriteClass: "sprite-main sprite-piechart-mode",
                nextMode: "grid",
                icon: baseContentPath + "/images/GridMode.png"
            },
            "grid": {
                name: "grid",
                hide: gridManager.hide,
                show: gridManager.show,
                dataLength: gridManager.dataLength,
                spriteClass: "sprite-main sprite-grid-mode",
                nextMode: "chart",
                icon: baseContentPath + "/images/ChartMode.png"
            }
        },
        viewModeChanged: function (viewMode) {
            $(btnGridChart + " span").attr("class", this.modeHandlers[viewMode].spriteClass);
            if (viewMode !== "chart") {
                thisTile.controlsMode.modeHandlers["chartSeries"].hide();
            } else {
                thisTile.controlsMode.modeHandlers["chartSeries"].show();
            }
            if (this.modeHandlers[viewMode].dataLength() <= 1) {
                //Hide Chart Controls 
                thisTile.controlsMode.modeHandlers["chartSeries"].hide();
                thisTile.viewMode.modeHandlers[viewMode].hide();
                $(tileElement + " .tileContent").block({ message: locTile.NoData});
            } else {
                $(tileElement + " .tileContent").unblock();
            }
        }
    });
    //  Initialize controls mode: period selection, date pickers or chart series types
    this.controlsMode = new ViewMode({
        viewMode: "periodButtons",
        modeHandlers: {
            "periodButtons": {
                name: "periodButtons",
                hide: function () { $(periodButtons).hide(); },
                show: function () { $(periodButtons).fadeIn(200); }
            },
            "datePickers": {
                name: "datePickers",
                hide: function () { $(datePickers).hide(); },
                show: function () { $(datePickers).fadeIn(200); }
            }
            ,
            "chartSeries": {
                name: "chartSeries",
                dataLength: chartManager.dataLength,
                hide: function () { $(chartSeriesGroup).hide(); },
                show: function () { $(chartSeriesGroup).fadeIn(200); }
            }
        },
        viewModeChanged: function (viewMode) {
            if (viewMode == "chartSeries" && this.modeHandlers[viewMode].dataLength() <= 1) {
                this.modeHandlers[viewMode].hide();
                this.toggleMode("periodButtons");
            }
        }
    });

    //  Initialize chart series mode
    this.chartMode = new ViewMode({
        viewMode: chartSeriesType,
        modeHandlers: {
            "line": {
                show: function () {
                    updateChartSeries(createDefaultCategorySeries("line"));
                }
            },
            "column": {
                show: function () {
                    updateChartSeries(createDefaultCategorySeries("column"));
                }
            },
            "spline": {
                show: function () {
                    updateChartSeries(createDefaultCategorySeries("spline"));
                }
            },
            "area": {
                show: function () {
                    updateChartSeries(createDefaultCategorySeries("area"));
                }
            },
            "splineArea": {
                show: function () {
                    updateChartSeries(createDefaultCategorySeries("splineArea"));
                }
            }
        }
    });
    //  Initialize time period mode strategies
    this.periodMode = new ViewMode({
        viewMode: "day",
        modeHandlers: {
            "year": {
                show: function () {
                    var now = new Date();
                    var start = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
                    updateDates(start, now);
                }
            },
            "quarter": {
                show: function () {
                    var now = new Date();
                    var start = new Date();
                    start.setMonth(start.getMonth() - 3);
                    updateDates(start, now);
                }
            },
            "month": {
                show: function () {
                    var now = new Date();
                    var start = new Date();
                    start.setMonth(start.getMonth() - 1);
                    updateDates(start, now);
                }
            },
            "week": {
                show: function () {
                    var now = new Date();
                    var start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
                    updateDates(start, now);
                }
            },
            "day": {
                show: function () {
                    var now = new Date();
                    var start = now;
                    updateDates(start, now);
                }
            }
        }
    });

    //  Initialize tile UI
    $(datePickers).hide();
    $(chartSeriesGroup).hide();
    $(chartSelector).hide();
    $(gridExpensesContainer).hide();
    hookChartGridModeEvent();
    hookControlsSelectionButtons();
    hookPeriodButtons();
    hookChartModeButtons();
    hookDatePickers();
    initializePopoverComponents();

    initDatePickers();

    //  Set initial period to the beginning of the year
    thisTile.viewMode.UpdateCurrentView();
    thisTile.chartMode.UpdateCurrentView();

    thisTile.periodMode.toggleMode("year");

    //  --- Public Methods
    this.layoutChanged = function (selectedLayout) {
        $(chartSelector).igDataChart({
            width: $(tileElement + " .tileContent").css("width"),
            height: $(tileElement + " .tileContent").css("height")
        });

        if (gridManager.isCreated()) {
            $(gridSelector).igGrid("option", "width", "100%");
            $(gridSelector).igGrid("option", "height", "100%");
        }

        $(tileElement).unblock();
        if (thisTile.dataSource.dataView().length === 0) {
            $(tileElement + " .tileContent").block({ message: locTile.NoData });
        }
    };
    //  Private methods
    function hookChartGridModeEvent() {
        $(document).delegate(btnGridChart, "click", function() {
            thisTile.viewMode.nextMode({
                transactions: thisTile.dataSource,
                categories: thisTile.summaryDataSource
            });
        });
    }

    function hookControlsSelectionButtons() {
        //  Up button
        $(document).delegate(btnControlsUp, "click", function() {
            switch(thisTile.controlsMode.viewMode) {
                case "datePickers":
                    thisTile.controlsMode.toggleMode("periodButtons");
                    break;

                case "chartSeries":
                    thisTile.controlsMode.toggleMode("datePickers");
                    break;

                case "periodButtons":
                    //We need to toggle chartseries Controls only if we are in chart viewmode other than this they are useless
                    if (thisTile.viewMode.viewMode == "chart" && thisTile.dataSource.dataView().length > 1) {
                        thisTile.controlsMode.toggleMode("chartSeries");
                    } else {
                        thisTile.controlsMode.toggleMode("datePickers");
                    }
                    break;
            }
        });
        //  Down button
        $(document).delegate(btnControlsDown, "click", function() {
            switch(thisTile.controlsMode.viewMode) {
                case "periodButtons":
                    thisTile.controlsMode.toggleMode("datePickers");
                    break;

                case "datePickers":
                    if (thisTile.viewMode.viewMode == "chart") {
                        thisTile.controlsMode.toggleMode("chartSeries");
                    } else {
                        thisTile.controlsMode.toggleMode("periodButtons");
                    }
                    break;

                case "chartSeries":
                    thisTile.controlsMode.toggleMode("periodButtons");
                    break;
            }
        });
    }

    function hookPeriodButtons() {
        $(document).delegate(periodButtons + " a", "click", function() {
            thisTile.periodMode.toggleMode($(this).attr("data-period"));
        });
    }

    function hookChartModeButtons() {
        $(document).delegate(chartSeriesGroup + " a", "click", function() {
            thisTile.chartMode.toggleMode($(this).attr("data-chartSeries"));
        });
    }

    function hookDatePickers() {
        $(document).delegate(startDatePicker + "," + endDatePicker, "igdatepickervaluechanged", function (evt, ui) {
            var jqStartDate = $(startDatePicker);
            var jqEndDate = $(endDatePicker);

            if (ui.oldValue !== ui.value &&
                jqStartDate.igValidator("isValidState") &&
                jqEndDate.igValidator("isValidState")) {
                updateData(jqStartDate.igDatePicker("value"), jqEndDate.igDatePicker("value"));
            }
        });
    }

    function updateDates(start, end) {
        updateDatePickers(start, end);
        updateData(start, end);
    }

    function updateData(startDate, endDate) {
        $.post(dataActionUrl,
            {
                "startDate": $.ig.formatter(startDate, "date", "yyyyMMdd"),
                "endDate": $.ig.formatter(endDate, "date", "yyyyMMdd")
            })
            .success(expensesDataSuccess);

        function expensesDataSuccess(data, textStatus, jqXHR) {
            updateTransactionData(data.Transactions);
            updateCategoryData(data.Categories);

            thisTile.viewMode.UpdateCurrentView({
                transactions: thisTile.dataSource,
                categories: thisTile.summaryDataSource
            });

            if(data.Transactions.length > 1) {
                $(tileElement + " .tileContent").unblock();
                $(tileElement).unblock();
            }
            else {
                $(tileElement + " .tileContent").block({ message: locTile.NoData});
                $(chartSelector).hide();
                $(pieChartSelector).hide();
            }
        }

        function updateTransactionData(dataTransactions) {
            var ds = new $.ig.DataSource({
                type: "json",
                dataSource: dataTransactions,
                schema: createSchema()
            });
            thisTile.dataSource = ds;
            ds.dataBind();

            chartManager.update(ds);
            gridManager.update(ds);
        }

        function updateCategoryData(dataCategories) {
            var ds = new $.ig.DataSource({
                type: "json",
                dataSource: dataCategories,
                schema: createCategorySchema()
            });
            thisTile.summaryDataSource = ds;
            ds.dataBind();

            pieChartManager.update(ds);
        }
    }

    function createTransactionSchema() {
        var schema = {
            fields: [
                { name: "Id" },
                { name: "Date", type: "date" },
                { name: "Amount", type: "number" },
                { name: "Category" },
                { name: "Partner" },
                { name: "Address" },
                { name: "GeoLatitude" },
                { name: "GeoLongitude" }
            ]
        };
        return schema;
    }

    function createCategorySchema() {
        var schema = {
            fields: [
                { name: "Id" },
                { name: "Name" },
                { name: "Total", type: "number" }
            ]
        };
        return schema;
    }

    //  Initialize chart
    function initChartPrivate() {
        $(chartSelector).igDataChart({
            width: $(tileElement + " .tileContent").css("width"),
            height: $(tileElement + " .tileContent").css("height"),

            axes: [
                {
                    name: "xAxis",
                    type: "categoryX",

                    title: $.ig.formatter(getPreviousYear() , "date", "yyyy") + "/" + $.ig.formatter(new Date(), "date", "yyyy"),

                    labelExtent: 35,
                    label: categoryAxisLabel,
                    formatLabel: function (item) {
                        return loc.onlyMonthDayFormat(item[categoryAxisLabel]);
                    }
                }, {
                    name: "yAxis",
                    type: "numericY"
                }
            ],
            series: [ createDefaultCategorySeries(thisTile.chartMode.viewMode) ],
            leftMargin: 5,
            topMargin: 10,
            horizontalZoomable: false,
            verticalZoomable: false,
            windowResponse: "immediate"
        });
        $(chartSelector).hide();
    }
    function getPreviousYear() {
        //create the date
        var d = new Date();
        //subtract a year to the date
        d.setFullYear(d.getFullYear() - 1);
 
        return d;
    }
    function createDefaultCategorySeries(seriesType) {
        return {
            name: "expenses",
            type: seriesType,
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: categorySeriesMember
        };
    }

    function updateChartSeries(newSeries) {
        var chart = $(chartSelector);
        chart.igDataChart("option", "series", [{ name: newSeries.name, remove: true}]);
        chart.igDataChart("option", "series", [ newSeries ]);
    }

    //  Creates the Pie chart control
    function initPieChart(data) {
        var pieChartElementId = pieChartElement.substring(1, pieChartElement.length);
        var pieChartLegendId = pieChartLegendElement.substring(1, pieChartLegendElement.length);

        $(pieChartSelector).html(
            '<div id="' + pieChartElementId + '" class="pieChart" ></div>' +
            '<div id="' + pieChartLegendId + '" class="pieChartLegend" ></div>');

        var pieChartWidth = $(tileElement + " .tileContent").width() * 0.7;
        $(pieChartElement).igPieChart({
            width: pieChartWidth,
            height: $(tileElement + " .tileContent").css("height"),
            dataSource: data,
            valueMemberPath: "Total",
            labelMemberPath: "Name",
            labelsPosition: "outsideEnd",
            legend: { element: pieChartLegendId, type: 'item' }
        });

        var left = ($(tileElement + " .tileContent").width() - pieChartWidth - $(pieChartLegendElement).width()) / 2;
        $(pieChartElement).css("left", left + "px");
        if (data.data().length < 2) {
            $(pieChartElement).hide();
        }
    }

    //  Initialize grid
    function initGridPrivate(data) {
        if (data.data().length > 1) {
            $(gridExpensesContainer).show();
        } else {
            $(gridExpensesContainer).hide();
        }
        $(gridSelector).igGrid({
            width: "100%",
            height: "100%",
            autoGenerateColumns: false,
            dataSource: data,
            columns: [
                { headerText: locTile.Category, key: "Category", dataType: "string", width: "20%" },
                { headerText: locTile.Date, key: "Date", dataType: "date", width: "20%" },
                { headerText: locTile.Amount, key: "Amount", dataType: "number", format: "currency", width: "20%" },
                { headerText: locTile.Partner, key: "Partner", dataType: "string", width: "20%" },
                { headerText: locTile.Address, key: "Address", dataType: "string", width: "20%" }
            ],
            features: [
                {
                    name: "Sorting",
                    type: "local",
                    columnSettings : [
                        { columnKey: "Category", allowSorting: true, currentSortDirection: "asc" },
                        { columnKey: "Date", allowSorting: true, currentSortDirection: "asc" }
                    ]
                }, {
                    name: "GroupBy",
                    type: "local",
                    initialExpand: true,
                    groupByAreaVisibility: "hidden",
                    columnSettings: [
                        { columnKey: "Category", isGroupBy: true },
                        { columnKey: "Amount", summaries: [{ summaryFunction: "sum", text: "Total" }] }
                    ]
                }
            ]
        });
    }

    //  Create the date pickers
    function initDatePickers() {
        $.datepicker.setDefaults($.ig.regional.defaults);
        $(startDatePicker).igDatePicker({
            width: 100,
            dateInputFormat: "date",
            value: new Date(),
            required: true,
            validatorOptions: { onblur: true, onchange: true },
            datepickerOptions: { showAnim: 'slide', hideAnim: 'slide', duration: 1000, dayNamesMin: $.ig.regional.defaults.dayNamesShort }
        });

        $(endDatePicker).igDatePicker({
            width: 100,
            dateInputFormat: "date",
            value: new Date(),
            required: true,
            validatorOptions: { onblur: true, onchange: true },
            datepickerOptions: { showAnim: 'slide', hideAnim: 'slide', duration: 1000, dayNamesMin: $.ig.regional.defaults.dayNamesShort }
        });
    }

    function initPopover(options, selector) {
        if (options == null || options == undefined) {
            options = {};
        }
        if (selector == undefined) {
            selector = document.body;
        }
        $(selector).igPopover(options);
    }
    function periodContentFunction() {
        var element = $(this);
        switch ($(element).data("period")) {
            case "day": return locTile.DayPeriod;
            case "week": return locTile.WeekPeriod;
            case "month": return locTile.MonthPeriod;
            case "quarter": return locTile.QuarterPeriod;
            case "year": return locTile.YearPeriod;
            default: ""
        }
    }


    function chartsContentFunction() {

        var element = $(this);
        switch ($(element).data("chartseries")) {

            case "line": return locTile.LineChart;
            case "column": return locTile.ColumnChart;
            case "spline": return locTile.SplineChart;
            case "area": return locTile.AreaChart;
            case "splineArea": return locTile.SplineAreaChart;
            default: "";
        
        }
    }
    function datePickersContentFunction() {
        var element = $(this);
        switch ($(element).data("editortype")) {
            case "startDate": return locTile.PeriodStartDate;
            case "endDate": return locTile.PeriodEndDate;
            default: "";
        }
    }
    function controlsContentFunction() {
        var element = $(this);
        switch ($(element).data("controls")) {
            case "changeView": return locTile.ChangeViewMode;
            case "controlsDown": case "controlsUp": return locTile.ChangeControlsMode;
            default: "";
        }
    }
    function commonPopoeverOptions() {
        var options = {};
        options.direction = "bottom";
        options.position = "start";
        options.renderCloseButton = false;
        options.closeOnBlur = true;
        options.fadeTimespan = 150;
        options.maxHeight = null;
        //options.maxWidth = 260;
        options.showOn = "mouseenter";
        return options;
    }
    //Create popover
    function initializePopoverComponents() {
        var options = commonPopoeverOptions(),
            selector = periodButtons;
        //Init period tooltips
        options.selectors = "a[data-period]";
        options.contentFunction = periodContentFunction;
        initPopover(options, selector);
        //Init chart tooltips
        selector = chartSeriesGroup;
        options.selectors = "a[data-chartSeries]";
        options.contentFunction = chartsContentFunction;
        initPopover(options, selector);
        
        //Init ChangeView Tooltip
        options.selectors = "a[data-controls]";
        options.contentFunction = controlsContentFunction;
        initPopover(options, tileElement);

        //Init DatePickers Tooltips 
        selector = datePickers;
        options.selectors = "input[data-editorType]";
        options.contentFunction = datePickersContentFunction;
        initPopover(options, selector);

    }



    //  Sets the correct time period to the date picker controls
    function updateDatePickers(startDate, endDate) {
        $(startDatePicker).igDatePicker("value", startDate);
        $(endDatePicker).igDatePicker("value", endDate);
    }
}