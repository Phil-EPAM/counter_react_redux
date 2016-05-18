import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {

  render() {
    return <div>Hello World</div>;
  }
}
var node = document.getElementById('root');
ReactDOM.render(<MyComponent />, node);

