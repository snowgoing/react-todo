var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

var configureStore = require('configureStore');
// {TodoApp} grabs unconnected version for tests
import {TodoApp} from 'TodoApp'; 
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
