import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const exists = todos.some(t => t.name.toLowerCase() === todo.name.toLowerCase());
    if (exists) {
      alert('Esta tarefa já existe!');
      return;
    }
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id) => {
    const todoToRemove = todos.find(todo => todo.id === id);
    if (!todoToRemove.completed) {
      alert('Você só pode excluir tarefas concluídas!');
      return;
    }
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <div>
        {totalCount > 0 && <p>Concluídas: {completedCount} / Total: {totalCount}</p>}
      </div>
    </div>
  );
}

export default App;
