var React = require('react');
var {Component} = React;
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  }
  componentDidUpdate(prevProps, prevState) {
    TodoAPI.setTodos(this.state.todos);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
    console.log(this.state.todos);
  }
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  }
  render() {
    var {todos} = this.state;
    return (
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          <TodoSearch onSearch={this.handleSearch.bind(this)}/>
          <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
          <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;
