import React, {Component} from 'react';
import Instruction from '../Instruction/Instruction';
import Button from '../Button/Button';
import CountDown from '../CountDown/CountDown';

class ReadyToSnapPhotoPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countDown: {
                show: false
            }
        };
        this.captureImage = this.captureImage.bind(this);
    }

    captureImage() {

        const video = document.querySelector("#videoElement");
        const canvas2 = document.createElement("canvas");
        canvas2.width = video.videoWidth;
        canvas2.height = video.videoHeight;
        canvas2
            .getContext('2d')
            .drawImage(video, 0, 0, canvas2.width, canvas2.height);
        document
            .getElementById("canvas")
            .src = canvas2.toDataURL();
    };

    render() {
        return (
            <div id="takePhoto">
                <Instruction/>
                <div className="options">
                    <Button id="snapPhoto" onClick={this.captureImage()}>
                        <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"/>
                        Take a Picture
                    </Button>
                </div>
                <CountDown show={this.state.showCountDown} whenCountDownComplete={this.takePicture}
                           countDownLength="5"/>
            </div>
        )

    }
}

export default ReadyToSnapPhotoPane;