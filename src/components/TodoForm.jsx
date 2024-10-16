import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    
    const tasks = inputValue.split(',').map(task => task.trim()).filter(task => task);

    tasks.forEach(task => {

      const newTodo = {
        id: Date.now() + Math.floor(Math.random() * 1000), 
        name: task, 
        completed: false,
      };

      addTodo(newTodo);
    });

    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione várias tarefas (separe por vírgula)"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
