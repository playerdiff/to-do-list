import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span
        style={{
          display: 'inline-block',
          width: '20px',
          height: '20px',
          border: '2px solid #003566', 
          borderRadius: '50%', 
          backgroundColor: todo.completed ? '#ffc300' : 'transparent', 
          cursor: 'pointer', 
          marginRight: '10px', 
        }}
        onClick={() => toggleTodo(todo.id)}
        title={todo.completed ? 'Desmarcar tarefa' : 'Marcar tarefa'}
      >
        {todo.completed && (
          <span
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#003566', 
            }}
          />
        )}
      </span>

      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1,
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.name}
      </span>


      <button
        onClick={() => removeTodo(todo.id)}
        style={{
          padding: '10px 15px',
          marginLeft: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#403d39', 
          color: '#252422', 
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, transform 0.2s', 
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#eb5e28'; 
          e.target.style.transform = 'translateY(-1px)'; 
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#403d39';
          e.target.style.transform = 'translateY(0)'; 
        }}
      >
        Remover
      </button>
    </li>
  );
}

export default TodoItem;
