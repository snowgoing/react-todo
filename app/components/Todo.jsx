var React = require('react');
var {Component} = React;

class Todo extends Component {
  render() {
    var {text, id} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}

module.exports = Todo;
