import React from 'react';
import { ToDoItem } from '../types/types';

// {todo} => {todo: {id, text, completed}}
interface Props {
  todo: ToDoItem;
  ToggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, ToggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => ToggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
