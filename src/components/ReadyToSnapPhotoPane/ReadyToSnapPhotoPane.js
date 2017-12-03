import React, { Component } from 'react';
import CountDown from '../CountDown/CountDown';
import Video from '../Video/Video';
import ActionButton from '../ActionButton/ActionButton';

class ReadyToSnapPhotoPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        width: 1920,
        height: 1080
      },
      countdown: false
    };
    this.startCountdown = this.startCountdown.bind(this);
    this.renderCountdown = this.renderCountdown.bind(this);
    this.snapPhoto = this.snapPhoto.bind(this);
    this.setSnappedPhoto = props.setSnappedPhoto;
  }

  startCountdown() {
    this.setState({ countdown: true });
  }

  renderCountdown() {
    if (this.state.countdown) {
      return (
        <CountDown
          timer="1"
          snapPhoto={this.snapPhoto}
          startCountdown={this.state.countdown}
        />
      );
    }
  }

  snapPhoto() {
    const video = document.querySelector('#videoElement');
    const canvas2 = document.createElement('canvas');
    canvas2.width = video.videoWidth;
    canvas2.height = video.videoHeight;
    canvas2
      .getContext('2d')
      .drawImage(video, 0, 0, canvas2.width, canvas2.height);
    this.setSnappedPhoto(canvas2.toDataURL());
  }

  render() {
    return (
      <div id="mainContentWrapper">
        <Video
          autoPlay="true"
          id="videoElement"
          className="videoElement"
          config={this.state.video}
          snappedPhoto={this.state.snappedPhoto}
        />
        <div id="takePhoto">
          <div className="takePhoto">
            <ActionButton disabled="false" onClick={this.startCountdown}>
              <span
                className="glyphicon glyphicon-camera center-text"
                aria-hidden="true"
              />
            </ActionButton>
          </div>
        </div>
        {this.renderCountdown()}
      </div>
    );
  }
}

export default ReadyToSnapPhotoPane;
