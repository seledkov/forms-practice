import React, { useEffect, useState } from 'react';
import TodoAdd from './Components/TodoAdd';
import TodosFilter from './Components/TodosFilter';
import TodosList from './Components/TodosList';
console.log('open');
const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (newTodo: ITodo) => {
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const removeTodoHandler = (todoId: string) => {
    const changedTodos = [...todos];
    const removedTodoId = todos.findIndex((todo: ITodo) => todo.id === todoId);
    changedTodos.splice(removedTodoId, 1);
    setTodos(changedTodos);
  };
  const completeTodoToggle = (todoId: string) => {
    const changedTodos = todos.map((todo: ITodo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  return (
    <div className='App'>
      <TodosFilter
        todos={todos}
        onSetFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
      />
      <TodoAdd onAddTodo={addTodoHandler} />
      <TodosList
        filteredTodos={filteredTodos}
        onCompleteTodoToggle={completeTodoToggle}
        onRemoveTodo={removeTodoHandler}
      />
    </div>
  );
};

export default App;
