import React, { Component } from "react";
import PhotoSnappedPane from "../PhotoSnappedPane/PhotoSnappedPane";
import ReadyToSnapPhotoPane from "../ReadyToSnapPhotoPane/ReadyToSnapPhotoPane";

class InteractionPaneWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSnapped: false,
      snappedPhoto: null
    };
    this.retakePhoto = this.retakePhoto.bind(this);
    this.setSnappedPhoto = this.setSnappedPhoto.bind(this);
  }

  retakePhoto() {
    this.setState({ photoSnapped: false });
  }

  setSnappedPhoto(snappedPhoto) {
    this.setState({ snappedPhoto: snappedPhoto, photoSnapped: true });
  }

  render() {
    if (this.state.photoSnapped) {
      return (
        <PhotoSnappedPane
          retakePhoto={this.retakePhoto}
          snappedPhoto={this.state.snappedPhoto}
        />
      );
    } else {
      return (
        <ReadyToSnapPhotoPane
          startCountdown={this.startCountdown}
          setSnappedPhoto={this.setSnappedPhoto}
        />
      );
    }
  }
}

export default InteractionPaneWrapper;
