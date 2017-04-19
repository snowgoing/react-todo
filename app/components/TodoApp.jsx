var React = require('react');
var {Component} = React;
var TodoList = require('TodoList');

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    var {todos} = this.state;
    return (
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          <TodoList todos={todos}/>
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;
