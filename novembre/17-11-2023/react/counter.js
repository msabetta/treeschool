var React = require('React');


// <Counter initialCount={4} />

var Counter = React.createClass({
    getInitialState: function () {
        return {count: this.props.initialCount };
    },
    addToCount: function(delta) {
        this.setState({count: this.state.count + delta})
    },
    render: function () {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <ActionButton text="+1" onAction={this.addToCount.bind(this, 1)} />
                <ActionButton text="-1" onAction={this.addToCount.bind(this, -1)} />
            </div>
        );
    }
});