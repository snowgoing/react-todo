var React = require('react');
var {Component} = React;

class AddTodo extends Component {
  onSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.value;

    if(text) {
      this.props.onAddTodo(text);
      this.refs.text.value = '';
    } else {
      this.refs.text.focus();
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' ref='text' placeholder='What do you need to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

module.exports = AddTodo;
