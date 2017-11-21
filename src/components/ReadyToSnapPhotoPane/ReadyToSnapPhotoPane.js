import React, {Component} from 'react';
import Instruction from '../Instruction/Instruction';
import Button from '../Button/Button';
import Header from '../Header/Header';

class ReadyToSnapPhotoPane extends Component {
    constructor(props) {
        super(props);
        this.startCountdown = this.props.startCountdown;
    }

    render() {
        return (
            <div id="mainContentWrapper">
                <Header />
                <div id="takePhoto">
                    <Instruction/>
                    <div className="options">
                        <Button id="snapPhoto" onClick={this.startCountdown}>
                            <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"/>
                            Take a Picture
                        </Button>
                    </div>
                </div>
            </div>
        )

    }
}

export default ReadyToSnapPhotoPane;