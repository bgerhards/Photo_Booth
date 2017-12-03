import React, { Component } from 'react';
import ActionButton from '../ActionButton/ActionButton';

class PhotoShoppedPane extends Component {
  constructor(props) {
    super(props);
    this.retakePhoto = this.props.retakePhoto;
  }

  componentWillMount() {}

  render() {
    return (
      <div id="mainContentWrapper">
        <div>
          <img
            src={this.props.snappedPhoto}
            id="canvas"
            className="imagePreview img-responsive"
            alt="Preview"
          />
        </div>
        <div className="takePhoto">
          <ActionButton disabled="false" onClick={this.retakePhoto}>
            <span
              className="glyphicon glyphicon-camera center-text"
              aria-hidden="true"
            />
          </ActionButton>
          <ActionButton disabled="false" onClick={this.retakePhoto}>
            <span
              className="glyphicon glyphicon-upload center-text"
              aria-hidden="true"
            />
          </ActionButton>
        </div>
      </div>
    );
  }
}

export default PhotoShoppedPane;
