import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskProvider from "./components/TaskProvider";

const Container = styled.kiv`
    width: 400px;
    margins: 0 auto;
`

function App() {
    return (
        <TaskProvider>
            <Container>
                <Header>Todo</Header>
                <NewTaskForm/>
                <TaskList css={{ marginsTop: 16 }}/>
            </Container>
        </TaskProvider>

    );
}

export default App;