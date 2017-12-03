import React, {Component} from 'react';
import Button from '../Button/Button'
import Header from '../Header/Header'

class PhotoShoppedPane extends Component {
    constructor(props) {
        super(props);
        this.retakePhoto = this.props.retakePhoto;
    }

    componentWillMount() {
    }

    render() {
        return (
            <div id="mainContentWrapper">
                <Header/>
                <div id="photoPreview" className="center-text">
                    <div>
                        <img src={this.props.snappedPhoto} id="canvas" className="img-responsive" alt="Cinque Terre"/>
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