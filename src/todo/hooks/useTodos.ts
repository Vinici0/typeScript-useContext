import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {

        //TodoContext - Sirve para especificar el tipo de dato que se va a recibir
    const { todoState, toggleTodo, addTodo } = useContext( TodoContext );
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed ).length,
        toggleTodo,
        addTodo
    }
}