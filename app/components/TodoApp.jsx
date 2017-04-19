var React = require('react');
var {Component} = React;

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          <p>TodoApp</p>
          {/* {props.children} */}
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;
