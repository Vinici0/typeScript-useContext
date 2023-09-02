import { TodoState, Todo } from "../interfaces/interfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: string } };

//TODO: Implementar el reducer - Encargado de modificar el state
export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        //No se puede hacer push porque se estaria mutando el state
        //Esta devolviendo un nuevo arreglo con todos los elementos que tenia el arreglo anterior mas el nuevo elemento
        todos: [...state.todos, action.payload],
      };

    case "toggleTodo":
      console.log(action.payload.id);
      
      return {
        ...state,
        //Se utiliza los ... para desestructurar el arreglo y poder modificarlo y que no se mute el state
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
