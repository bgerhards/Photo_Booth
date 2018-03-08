import React, {Component} from 'react';

class Video extends Component {
    componentDidMount() {
        var video = document.querySelector("#videoElement");

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                video: {
                    width: this.props.config.width,
                    height: this.props.config.height
                }
            }, handleVideo, videoError);
        }

        function handleVideo(stream) {
            video.src = window
                .URL
                .createObjectURL(stream);
        }

        function videoError(e) {
            // do something
        }
    }

    render() {
        return (<video id={this.props.id} autoPlay={this.props.autoPlay} className={this.props.className}/>)

    }
}

export default Video;