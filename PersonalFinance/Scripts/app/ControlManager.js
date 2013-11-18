function ControlManager(options) {
    var selector = options.selector,
    create = options.create,
    updateData = options.updateData,

    controlCreated = false,
    data = null;

    this.isCreated = function () { return controlCreated; };
    this.hide = function () { $(selector).stop(true, true).hide(); };
    this.dataLength = function () {
        return data != null ? data.data().length : 0;
    }
    this.show = function () {
        if (!controlCreated) {
            create(data);
            controlCreated = true;
        } else {
            if (data.data().length < 2) {
                $(selector).hide();
            } else {
                $(selector).show();
            }
        }
    };
    this.update = function (newData) {
        data = newData;
        if (controlCreated) {
            updateData(data);
        }
    };
}