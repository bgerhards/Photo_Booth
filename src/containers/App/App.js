import React, {Component} from 'react';
// import logo from './logo.svg';
import InteractionPaneWrapper from './../../components/InteractionPaneWrapper/InteractionPaneWrapper'
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
            },
            snappedPhoto: null
        }
    }

    render() {
        return (
            <div className="App">
                <InteractionPaneWrapper/>
            </div>
        );
    }
}

export default App;
