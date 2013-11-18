//  View mode state engine
function ViewMode(options) {
    this.viewMode = options.viewMode;
    this.modeHandlers = options.modeHandlers;
    this.viewModeChanged = options.viewModeChanged;

    this.toggleMode = function (newMode, dataSource) {
        if (newMode !== this.viewMode) {
            if (this.modeHandlers[this.viewMode].hide) {
                this.modeHandlers[this.viewMode].hide();
            }

            this.viewMode = newMode;
            this.modeHandlers[this.viewMode].show(dataSource);

            if (this.viewModeChanged) {
                this.viewModeChanged(this.viewMode);
            }
        }
    };

    this.nextMode = function (dataSource) {
        var next = this.modeHandlers[this.viewMode].nextMode;
        if ($.isFunction(next)) {
            this.toggleMode(next(dataSource));
        }
        else {
            this.toggleMode(next, dataSource);
        }
    };

    this.UpdateCurrentView = function (dataSource) {
        this.modeHandlers[this.viewMode].show(dataSource);
    };
}