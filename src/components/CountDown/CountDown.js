import React from 'react';

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.snapPhoto = this.props.snapPhoto;
        this.state = {
            className: "",
            maxCountdown: props.timer,
            currentCount: props.timer
        }
    }

    countDown(currentCount) {
        currentCount > 0 ?
            this.showCurrentCount(currentCount) :
            this.snapPhoto();
    }

    showCurrentCount(currentCount) {
        this.setClass();
        this.setState({currentCount: currentCount})
        this.showCountDown();
        setTimeout(_ => {
            this.hideCountDown();
            setTimeout(_ => {
                this.countDown(currentCount - 1);
            }, 500);
        }, 500);
    }


    setClass() {
        const getTopOrBottom = function () {
            const topOrBottom = ['top', 'bottom'];
            return randomizeArrayValue(topOrBottom);
        };

        const getLeftOrRight = function () {
            const leftOrRight = ['left', 'right'];
            return randomizeArrayValue(leftOrRight);
        };

        const randomizeArrayValue = function (arrayItems) {
            return arrayItems[Math.floor(Math.random() * arrayItems.length)];
        };

        this.setState({
            className: (this.state.countDown === 1
                ? 'div-absolute-center'
                : 'div-' + getTopOrBottom() + '-' + getLeftOrRight())
        });
    }

    showCountDown() {
        this.setState({
            style: {
                opacity: 1,
                transition: 'all .5s ease'
            }
        });
    }

    hideCountDown() {
        this.setState({
            style: {
                opacity: 0,
                transition: 'all .5s ease'
            }
        });
    }

    componentDidMount() {
        this.countDown(this.state.maxCountdown);
    }

    render() {
        return <div id="countdown" className={this.state.className}
                    style={this.state.style}>{this.state.currentCount}</div>

    }
}

export default CountDown;