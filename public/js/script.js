var configuration = {
    video: {
        width: 1920,
        height: 1080
    },
    countDown: {
        length: 5
    }
}
// var video = document.querySelector("#videoElement");

// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

// if (navigator.getUserMedia) {
//     navigator.getUserMedia({
//         video: {
//             width: configuration.video.width,
//             height: configuration.video.height
//         }
//     }, handleVideo, videoError);
// }

// function handleVideo(stream) {
//     video.src = window
//         .URL
//         .createObjectURL(stream);
// }

// function videoError(e) {
//     // do something
// }

var takePhoto = $("#takePhoto");
var photoPreviewDisplay = $('#photoPreview');
var mainContentWrapper = $('#mainContentWrapper');

$("#snapPhoto").click(function () {
    mainContentWrapper.hide();
    takePhoto.hide();
    startCountdown(configuration.countDown.length)
        .then(function () {
            captureImage()
                .then(function () {
                    mainContentWrapper.show();
                    photoPreviewDisplay.show();
                })
        })
});

$("#retakePhoto").click(function () {
    photoPreviewDisplay.hide();
    takePhoto.show();
});

var startCountdown = function (countDown) {
    return new Promise(function (resolve, reject) {
        if (countDown > 0) {
            // top-left, top-right, bottom-right, bottom-left console.log(i);
            $('#countdown')
                .text(countDown)
                .removeClass()
                .addClass(getCountdownScreenPosition(countDown))
                .show(500)
                .hide(500, function () {
                    startCountdown(countDown - 1)
                        .then(function () {
                            resolve()
                        })
                });
        } else {
            resolve();
        }
    })
}

var getCountdownScreenPosition = function(countDown) {
        if(countDown == 1) {
        return 'div-absolute-center'
    }
    return 'div' + '-' + getTopOrBottom() + '-' +getLeftOrRight() ;
}

var getTopOrBottom = function() {
    var topOrBottom = ['top','bottom'];
    return randomizeArrayValue(topOrBottom);
}

var getLeftOrRight = function() {
    var leftOrRight = ['left','right'];
    return randomizeArrayValue(leftOrRight);
}

var randomizeArrayValue = function(arrayItems){
    return arrayItems[Math.floor(Math.random() * arrayItems.length)];
}

var captureImage = function () {
    return new Promise(function (resolve, reject) {

        var canvas2 = document.createElement("canvas");
        canvas2.width = video.videoWidth;
        canvas2.height = video.videoHeight;
        canvas2
            .getContext('2d')
            .drawImage(video, 0, 0, canvas2.width, canvas2.height);
        document
            .getElementById("canvas")
            .src = canvas2.toDataURL();
        resolve();
        // reject(Error("It broke"));
    });
};