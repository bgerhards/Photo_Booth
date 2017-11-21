import React, {Component} from 'react';
import PhotoSnappedPane from '../PhotoSnappedPane/PhotoSnappedPane'
import ReadyToSnapPhotoPane from '../ReadyToSnapPhotoPane/ReadyToSnapPhotoPane'
import CountDown from '../CountDown/CountDown'

class InteractionPaneWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoSnapped: false,
            showCountdown: false,
            countDownLength: 5

        };
        this.retakePhoto = this.retakePhoto.bind(this);
        this.snapPhoto = this.snapPhoto.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
    }

    retakePhoto() {
        this.setState({showCountdown: false});
        this.setState({photoSnapped: false});
    }

    snapPhoto() {
        this.setState({showCountdown: false});
        this.setState({photoSnapped: true});
    }

    startCountdown() {
        this.setState({showCountdown: true});
        this.setState({photoSnapped: false});
    }


    render() {
        if (this.state.photoSnapped) {
            return (<PhotoSnappedPane retakePhoto={this.retakePhoto}/>)
        } else if (this.state.showCountdown) {
            return (<CountDown timer={this.state.countDownLength} snapPhoto={this.snapPhoto}/>)
        }
        else {
            return (<ReadyToSnapPhotoPane startCountdown={this.startCountdown}/>)
        }
    }
}

export default InteractionPaneWrapper;
