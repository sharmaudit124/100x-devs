/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  getAll() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length || indexOfTodo < 0) {
      return null;
    }
    return this.todos[indexOfTodo];
  }

  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo < this.todos.length) {
      this.todos[indexOfTodo] = updatedTodo;
    }
  }

  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }

}

module.exports = Todo;
