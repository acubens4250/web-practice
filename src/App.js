function App({ $target, initialState }) {
    new Header({ 
        $target,
        text: 'Simple Todo List'
    })
    new TodoForm({
        $target,
        onsubmit: (text) => {
            const nextState = [...todoList.state, { text }]
            this.setState(nextState)
        }
    })

    const todoList = new TodoList({
        $target,
        initialState
    })
}

