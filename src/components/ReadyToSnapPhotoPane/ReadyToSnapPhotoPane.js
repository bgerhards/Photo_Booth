import React, {Component} from 'react';
import Instruction from '../Instruction/Instruction'
import Button from '../Button/Button'
import $ from 'jquery';

class ReadyToSnapPhotoPane extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {}

    snapPhoto() {
        const takePhoto = $("takePhoto");
        const photoPreviewDisplay = $('#photoPreview');
        const mainContentWrapper = $('#mainContentWrapper');
        mainContentWrapper.hide();
        takePhoto.hide();
        this.startCountdown(this.props.configuration.countDown.length)
            .then(function () {
                this.captureImage()
                    .then(function () {
                        mainContentWrapper.show();
                        photoPreviewDisplay.show();
                    })
            })
    }

    startCountdown(countDown) {
        return new Promise(function (resolve, reject) {
            if (countDown > 0) {
                // top-left, top-right, bottom-right, bottom-left console.log(i);
                $('#countdown')
                    .text(countDown)
                    .removeClass()
                    .addClass(this.getCountdownScreenPosition(countDown))
                    .show(500)
                    .hide(500, function () {
                        this
                            .startCountdown(countDown - 1)
                            .then(function () {
                                resolve()
                            })
                    });
            } else {
                resolve();
            }
        })
    }

    getCountdownScreenPosition(countDown) {
        if (countDown === 1) {
            return 'div-absolute-center'
        }
        return 'div-' + this.getTopOrBottom() + '-' + this.getLeftOrRight();
    }

    getTopOrBottom() {
        var topOrBottom = ['top', 'bottom'];
        return this.randomizeArrayValue(topOrBottom);
    }

    getLeftOrRight() {
        var leftOrRight = ['left', 'right'];
        return this.randomizeArrayValue(leftOrRight);
    }

    randomizeArrayValue(arrayItems) {
        return arrayItems[Math.floor(Math.random() * arrayItems.length)];
    }

    captureImage() {
        return new Promise(function (resolve, reject) {

            var video = document.querySelector("#videoElement");
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

    render() {
        return (
            <div id="takePhoto">
                <Instruction/>
                <div className="options">
                    <Button id="snapPhoto" onClick={this.snapPhoto}>
                        <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"></span>
                        Take a Picture
                    </Button>
                </div>
            </div>
        )

    }
}

export default ReadyToSnapPhotoPane;