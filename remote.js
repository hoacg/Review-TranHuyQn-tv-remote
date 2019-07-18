let Remote = function () {
    this.code;

    this.togglePower = function (tv) {
        tv.togglePower();
    };

    this.switchChannel = function (tv, channel) {
        tv.setChanel(channel);
    };

    this.setVolumeUp = function (tv) {
        tv.setVolumeUp();
    };

    this.setVolumeDown = function (tv) {
        tv.setVolumeDown();
    }
};
