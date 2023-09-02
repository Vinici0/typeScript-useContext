import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList';
import { Title } from './components/Title';
import { AddTodo } from './components/AddTodo';

export const Todo = () => {


    return (
        // TodoProvider es el componente que va a proveer el contexto a los componentes hijos
        //Cualquier hijo que este dentro de este componente va a tener acceso al contexto
        <TodoProvider>
            <Title />
            <TodoList />
            <AddTodo />
        </TodoProvider>
    )
}