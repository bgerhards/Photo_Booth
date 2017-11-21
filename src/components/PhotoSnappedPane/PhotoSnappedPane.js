import React, {Component} from 'react';
import Button from '../Button/Button'
import Header from '../Header/Header'

class PhotoShoppedPane extends Component {
    constructor(props) {
        super(props);
        this.retakePhoto = this.props.retakePhoto;
    }

    componentWillMount() {
        const video = document.querySelector("#videoElement");
        const canvas2 = document.createElement("canvas");
        canvas2.width = video.videoWidth;
        canvas2.height = video.videoHeight;
        canvas2
            .getContext('2d')
            .drawImage(video, 0, 0, canvas2.width, canvas2.height);
        // document
        //     .getElementById("canvas")
        //     .src = canvas2.toDataURL();
        this.setState({dataURL: canvas2.toDataURL()});
    }

    render() {
        return (
            <div id="mainContentWrapper">
                <Header />
                <div id="photoPreview" className="center-text">
                    <div>
                        <img src={this.state.dataURL} id="canvas" className="img-responsive" alt="Cinque Terre"/>
                    </div>
                    <div className="options">
                        <Button id="retakePhoto" onClick={this.retakePhoto}>
                            <span className="glyphicon glyphicon-camera center-text" aria-hidden="false"/>
                            Retake Picture
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoShoppedPane;