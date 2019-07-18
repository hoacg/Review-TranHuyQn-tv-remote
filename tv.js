const MAX_VOLUME = 100;
const MIN_VOLUME = 0;

let Tv = function (status, currentChanel, volume, screen) {
    this.isOn = status;
    this.currentChanel = currentChanel;
    this.volume = volume;
    this.screen = screen;

    this.getVolume = function () {
        return this.volume;
    };

    this.togglePower = function () {
        this.isOn = !this.isOn;
        this.changeScreen();
    };

    this.isOff = function() {
        return !this.isOn;
    }

    this.changeScreen = function() {
        if (this.isOn) {
            this.screen.src = "tv" + this.currentChanel + ".png";
        } else {
            this.screen.src = "tvOff.png";
        }
    };

    this.setChanel = function (index) {
        if (this.isOff()) return;
        this.screen.src = "tv" + index + ".png";
    };

    this.setVolumeUp = function () {
        if (this.isOff()) return;

        if (this.volume < MAX_VOLUME)
            this.volume++;
    };

    this.setVolumeDown = function () {
        if (this.isOff()) return;

        if (this.volume > MIN_VOLUME)
            this.volume--;
    }
};
