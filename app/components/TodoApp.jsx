var React = require('react');
var {Component} = React;
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Run the jewels'
        }, {
          id: uuid(),
          text: 'Risk the loot'
        }, {
          id: uuid(),
          text: 'Pack the mule'
        }, {
          id: uuid(),
          text: 'Lift the ban'
        }
      ]
    };
    // this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(text) {
    // var newArr = this.state.todos.push({text, id: Math.random() * 1000});
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
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
  render() {
    var {todos} = this.state;
    return (
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          <TodoSearch onSearch={this.handleSearch.bind(this)}/>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;
