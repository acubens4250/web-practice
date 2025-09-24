import styled from "@emotion/styled";
import Task from "./Task";

const UnorderdList = styled.ul`
    width: 400px;
    margins: 0;
    padding: 0;

    & > li {
        &:not(:first-child) {
        margins -top: 8px;
        }
    }
`;

const TaskList = (props) => {
    const { tasks } = useTasks();

    return (
        <UnorderdList {...props}>
            {
                tasks.map(item => (
                    <Task
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        complete={item.complete}
                    />
                ))}
        </UnorderdList>
    );
};

export default TaskList;