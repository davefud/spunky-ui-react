import React from 'react';
import ProgressBar from 'spunky-ui-react/ProgressBar';
import Label from 'spunky-ui-react/Label';

/** Linear Progress Bar */
export default class Example100Percent extends React.Component {
    state = {
        completed: 0
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;

        if (completed === 100) {
            this.setState({ completed: 0});
        } else {
            const diff = Math.random() * 10;
            this.setState({completed: Math.min(completed + diff, 100) });
        }
    }

    render() {
        return (
            <div>
                <h5><Label htmlFor={''} label={'Showing Percentage'} /></h5>
                <ProgressBar 
                    percent={this.state.completed} 
                    width={450} 
                    showPercentage={true} />
                <br />
                <h5><Label htmlFor={''} label={'Not Showing Percentage'} /></h5>
                <ProgressBar 
                    percent={this.state.completed} 
                    width={450} />
                    
            </div>
        );
    }

}
