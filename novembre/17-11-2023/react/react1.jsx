import { jsx as _jsx } from "react/jsx-runtime";
var React = require('React');
var message = /*#__PURE__*/_jsx("div", {
    class: "hello",
    onClick: someFunc,
    children: /*#__PURE__*/_jsx("div", {
        children: "Hello World"
    })
});
React.renderComponent(message, document.body);
var message2 = React.DOM.div({
    className: 'hello',
    onClick: someFunc
}, [React.DOM.span(null, ['Hello World'])]);
React.renderComponent(message, document.body);