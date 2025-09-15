import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
    const initialState = ["할일1", "할일2", "할일3"];

    const onSubmit = (text) => {
        const nextState = [...initialState, text];
    };

    new TodoForm({ $target, onSubmit });
    new TodoList({ $target, initialState });
}