import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";
//Asi es como debe lucir el context y todos los componentes que lo consuman
export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
  //typeof 
  addTodo: (id:string, desc:string, completed:boolean) => void;
};

//TodoContextProps - Sirve para indicarle a typescript que es lo que va a contener el context
export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
