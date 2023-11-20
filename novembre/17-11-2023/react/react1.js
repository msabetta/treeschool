var React = require('React');


var message =
    <div class="hello" onClick={someFunc}>
        <div>Hello World</div>
    </div>;

React.renderComponent(message, document.body);


var message2 = React.DOM.div({ className: 'hello', onClick: someFunc }, [
    React.DOM.span(null, ['Hello World'])]);

React.renderComponent(message, document.body);




