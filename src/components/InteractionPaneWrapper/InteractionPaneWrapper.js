import React, {Component} from 'react';
import PhotoSnappedPane from '../PhotoSnappedPane/PhotoSnappedPane'
import ReadyToSnapPhotoPane from '../ReadyToSnapPhotoPane/ReadyToSnapPhotoPane'

class InteractionPaneWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takePhoto: {
                countDown: {
                    length: 5
                }
            }
        }
    }
    render() {
        if (this.props.photo.snapped) {
            return (<PhotoSnappedPane/>)
        } else {
            return (<ReadyToSnapPhotoPane configuration={this.state.takePhoto}/>)
        }
    }
}

export default InteractionPaneWrapper;