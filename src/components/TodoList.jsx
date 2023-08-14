/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";
const TodosList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => {
        return <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate}/>;
      })}
    </ul>
  );
};
// Validate that the todos prop is an array of objects.
// TodosList.PropTypes = {
//   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
export default TodosList;
