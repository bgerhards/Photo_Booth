import React, {Component} from 'react';
import PhotoSnappedPane from '../PhotoSnappedPane/PhotoSnappedPane'
import ReadyToSnapPhotoPane from '../ReadyToSnapPhotoPane/ReadyToSnapPhotoPane'

class InteractionPaneWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoSnapped: false

        }
        this.managePhotoSnapped = this.managePhotoSnapped.bind(this);
    }

    managePhotoSnapped() {
        this.setState({photoSnapped : !this.state.photoSnapped});
    }

    render() {
        if (this.state.photoSnapped) {
            return (<PhotoSnappedPane retakeImage={this.managePhotoSnapped }/>)
        } else {
            return (<ReadyToSnapPhotoPane captureImage={this.managePhotoSnapped} />)
        }
    }
}

export default InteractionPaneWrapper;
