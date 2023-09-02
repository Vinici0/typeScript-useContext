import React from "react";
import { useTodos } from "../hooks/useTodos";
import { useForm } from "../hooks/useForm";
import { Todo } from "../interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';

export const AddTodo = () => {
  const { addTodo } = useTodos();

  const { desc, completed,handleChange } = useForm<Todo>({
    id: "",
    desc: "",
    completed: false,
  });

  const handleAddTodo = () => {
    const newId = uuidv4();
    addTodo(newId, desc, completed);
  };

  return (
    <>
      <input type="text" placeholder="Add todo" name="desc" value={desc} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <hr />
    </>
  );
};
