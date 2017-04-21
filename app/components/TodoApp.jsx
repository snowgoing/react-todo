var React = require('react');
var {Component} = React;
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Run the jewels'
        }, {
          id: 2,
          text: 'Risk the loot'
        }, {
          id: 3,
          text: 'Pack the mule'
        }, {
          id: 4,
          text: 'Lift the ban'
        }
      ]
    };
    // this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(text) {
    // var newArr = this.state.todos.push({text, id: Math.random() * 1000});
    // this.setState({
    //   todos: newArr
    // });
    // console.log(this.state.todos);
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
