import { jsx as _jsx } from "react/jsx-runtime";
// <ActionButton text="Book flight" onAction={someFunc} />

var React = require('React');
var ActionButton = React.createClass({
    displayName: "ActionButton",
    render: function () {
        return /*#__PURE__*/_jsx("button", {
            class: "ActionButton",
            onClick: this.props.onAction,
            children: /*#__PURE__*/_jsx("span", {
                children: this.props.text
            })
        });
    }
});