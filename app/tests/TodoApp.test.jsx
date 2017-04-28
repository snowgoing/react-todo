var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var text = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(text);

    expect(todoApp.state.todos[0].text).toBe(text);
    expect(todoApp.state.todos.length).toBe(1);

  });

  it('should toggle completed value when handleToggle calles', () => {
    var todoData = {
      id: 12,
      text: 'test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

  it('should create a timestamp when todo is created', () => {
    var text = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(text);

    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should create a completed timestamp when todo is completed', () => {
    var todo = {
      id: 1,
      text: 'test',
      createdAt: 100,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todo]});
    todoApp.handleToggle(1);

    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should set completedAt to undefined when completed is set to false', () => {
    var todo = {
      id: 1,
      text: 'test',
      completed: true,
      createdAt: 100,
      completedAt: 100
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todo]});
    todoApp.handleToggle(1);

    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
