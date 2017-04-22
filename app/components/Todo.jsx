var React = require('react');
var {Component} = React;

class Todo extends Component {
  render() {
    var {text, id, completed} = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed}/>
        {text}
      </div>
    )
  }
}

module.exports = Todo;
