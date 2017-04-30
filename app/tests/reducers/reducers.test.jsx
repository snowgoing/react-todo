var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'This is some search text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
          type: 'ADD_TODO',
          todo: {
            id: 'adsfgas',
            text: 'Test',
            completed: false,
            createdAt: 324243
          }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todos', () => {
      var todo = [{
        id: 1,
        text: 'Test todo',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
          type: 'UPDATE_TODO',
          id: todo[0].id,
          updates
      };
      var res = reducers.todosReducer(df(todo), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todo[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 1,
        text: 'Test todo',
        completed: false,
        completedAt: undefined,
        createdAt: 111
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
