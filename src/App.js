import React, {Component} from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header'
import InteractionPaneWrapper from './components/InteractionPaneWrapper/InteractionPaneWrapper'
import Video from './components/Video/Video'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: {
                width: 1920,
                height: 1080
            },
            countDown: {
                length: 5
            }
        }
    }

    render() {
        return (
            <div className="App">
                <div id="container">
                    <Video autoPlay="true" id="videoElement" config={this.state.video} />
                    <div id="mainContentWrapper">
                        <Header />
                        <InteractionPaneWrapper/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
