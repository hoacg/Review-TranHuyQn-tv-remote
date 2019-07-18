let screen = document.getElementById('tvScreen');

let tv = new Tv(false, 3, 20, screen);
let rm = new Remote();

function power() {
    rm.togglePower(tv);
}

function btn3() {
    if (tv.isOff()) {
        alert("Chưa bật ti vi")
    } else {
        rm.switchChannel(tv, 3);
    }
}

function btn7() {
    if (tv.isOff()) {
        alert("Chưa bật ti vi")
    } else {
        rm.switchChannel(tv, 7);
    }
}

function btnVolUp() {
    if (tv.isOff()) {
        alert("Chưa bật ti vi")
    } else {
        rm.setVolumeUp(tv);
    }
}

function btnVolDown() {
    if (tv.isOff()) {
        alert("Chưa bật ti vi")
    } else {
        rm.setVolumeDown(tv);
    }
}

