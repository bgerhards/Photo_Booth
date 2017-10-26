import React, {Component} from 'react';
// import logo from './logo.svg';
import Button from './components/Button/Button'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="container">
                    <video autoPlay="true" id="videoElement">
                        Hello world
                    </video>
                    <div id="mainContentWrapper">
                        <header>
                            <h1>SG Photo Booth</h1>
                        </header>
                        <div id="takePhoto">
                            <div className="instructions">
                                <p>Hello world! To begin taking photos, click the button below. You should only
                                    need to press this button once, for if you pres it more than once, the world may
                                    come to an end. A double click is one too many clicks.
                                </p>
                                <p>Your photo will arrive shortly after clicking take a picture. You will be
                                    given a preview and then
                                </p>
                            </div>
                            <div className="options">
                                <Button id="snapPhoto">
                                    <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"></span> Take a Picture
                                </Button>
                            </div>
                        </div>
                        <div id="photoPreview" className="center-text">
                            <div>
                                <img src="" id="canvas" className="img-responsive" alt="Cinque Terre"/>
                            </div>
                            <div className="options">
                                <Button id="retakePhoto">
                                    <span className="glyphicon glyphicon-camera center-text" aria-hidden="true"></span> Retake Picture
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="countdown" className="div-absolute-center">5</div>
                <script
                    src="https://code.jquery.com/jquery-3.2.1.min.js"
                    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
                    crossOrigin="anonymous"></script>
                <script src="js/script.js"></script>
            </div>
        );
    }
}

export default App;
