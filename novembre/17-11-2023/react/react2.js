// <ActionButton text="Book flight" onAction={someFunc} />

var React = require('React');

var ActionButton = React.createClass({
    render: function () {
        return (
            <button class="ActionButton" onClick={this.props.onAction}>
                <span>{this.props.text}</span>
            </button>
        );
    }
});