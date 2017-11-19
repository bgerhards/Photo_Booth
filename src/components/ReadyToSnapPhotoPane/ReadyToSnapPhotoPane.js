import React, {Component} from 'react';
import Instruction from '../Instruction/Instruction';
import Button from '../Button/Button';

class ReadyToSnapPhotoPane extends Component {
    constructor(props) {
        super(props);
        this.captureImage = this.props.captureImage;
    }

    render() {
        return (
            <div id="takePhoto">
                <Instruction/>
                <div className="options">
                    <Button id="snapPhoto" onClick={this.captureImage}>
                        <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"/>
                        Take a Picture
                    </Button>
                </div>
            </div>
        )

    }
}

export default ReadyToSnapPhotoPane;