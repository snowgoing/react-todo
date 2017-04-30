var React = require('react');
var {Component} = React;
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends Component {
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.text.value;

    if(text) {
      dispatch(actions.startAddTodo(text));
      this.refs.text.value = '';
    } else {
      this.refs.text.focus();
    }
  }
  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' ref='text' placeholder='What do you need to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);
