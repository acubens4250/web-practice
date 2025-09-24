import styled from "@emotion/styled";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  padding : 0 8px;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box sizing: border-box;
  list-sytle: none;
`;

const Content = styled.span`
  flex:1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({complete}) => (complete ? 'line-through' : 'none')}};
`
const RemoveButton = styled.button`
  width: 32px;
  height: 32px;
  margint-left: 8px;
  color: white;
  border-radius: 8px;
  background-color: red;
  border: none;
  cursor: pointer;
`

const Task = ({ id, content, complete, ...props }) => {
  const { updateTask, removeTask } = useTasks();

  return (
  <ListItem {...props}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.value)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
  </ListItem>
  );
};

export default Task;