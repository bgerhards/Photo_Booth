import React from 'react';

class CountDown extends React.Component {
    constructor(props) {
        super(props)
        this.showCountDown = this.showCountDown.bind(this);
        this.hideCountDown = this.hideCountDown.bind(this);
        this.setClass = this.setClass.bind(this);
        this.state = { //base css
            style: {
                fontSize: 60,
                opacity: 0,
                transition: 'all 2s ease'
            }
        }
    }

    beginCountDown() {
        this.showCountDown();
        this.hideCountDown();
    }

    showCountDown() {
        this.setState({
            style: {
                fontSize: 60,
                opacity: 0,
                transition: 'all 1s ease'
            }
        })
    }

    hideCountDown() {
        this.setState({
            style: {
                fontSize: 60,
                opacity: 1,
                transition: 'all 1s ease'
            }
        })
    }

    setClass() {
        var getTopOrBottom = function () {
            var topOrBottom = ['top', 'bottom'];
            return randomizeArrayValue(topOrBottom);
        }

        var getLeftOrRight = function () {
            var leftOrRight = ['left', 'right'];
            return randomizeArrayValue(leftOrRight);
        }

        var randomizeArrayValue = function (arrayItems) {
            return arrayItems[Math.floor(Math.random() * arrayItems.length)];
        }
        
        this.setState('className',  this.state.countDown === 1
        ? 'div-absolute-center'
        : 'div-' + getTopOrBottom() + '-' + getLeftOrRight());
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.show) {
            this.showCountDown();
            this.hideCountDown();
            this.props.whenCountDownComplete();
        }
    }

    // componentDidMount() {
    //     setTimeout(this.beginCountDown, 10)
    // }

    // componentWillUnmount() {
    //     this.props.whenCountDownComplete();
    // }

    render() {
        return this.props.show > 1 && (
            <div id="countdown" className={this.state.className} style={this.state.style}></div>
        )
    }
}

export default CountDown;