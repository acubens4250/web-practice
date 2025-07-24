function App({ $target, initialState }) {
    new Header({ 
        $target,
        text: 'Simple Todo List'
    })
    new TodoForm({
        $target,
        onsubmit: (text) => {
            const nextState = [...todoList.state, { text }]
            todoList.setState(nextState)

            loacalStorage.setItem('todos', JSON.stringify(nextState))
        }
    })

    const todoList = new TodoList({
        $target,
        initialState
    })
}

