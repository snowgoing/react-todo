var React = require('react');
var {Component} = React;
var Todo = require('Todo');

class TodoList extends Component {
  render() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

module.exports = TodoList;
