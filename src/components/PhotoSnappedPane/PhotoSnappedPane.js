import React, {Component} from 'react';
import Button from '../Button/Button'

class PhotoShoppedPane extends Component {
    render() {
        return (
            <div id="photoPreview" className="center-text">
                <div>
                    <img src="" id="canvas" className="img-responsive" alt="Cinque Terre"/>
                </div>
                <div className="options">
                    <Button id="retakePhoto">
                        <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"></span>
                        Retake Picture
                    </Button>
                </div>
            </div>
        )
    }
}

export default PhotoShoppedPane;