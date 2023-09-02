import { useReducer } from "react";

import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";
import { Todo } from "../interfaces/interfaces";
//Como va a lucir el estado inicial
const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "Recolectar las piedras del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "Piedra del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  /*
    useReducer recibe como primer argumento una funcion reductora y como segundo argumento el estado inicial
    y retorna un arreglo con el estado actual y un dispatch que es el encargado de ejecutar las acciones
  */
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  const addTodo = (id: string, desc: string, completed: boolean) => {
    console.log(id, desc, completed);
    
    dispatch({ type: "addTodo", payload: { id, desc, completed } });
  };
  return (
    <TodoContext.Provider
      value={{
        todoState,
        toggleTodo,
        addTodo,
      }}
    >
      {/* Aqui van a ser cargados los hijos del componente */}
      {children}
    </TodoContext.Provider>
  );
};
