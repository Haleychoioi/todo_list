import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./ToDoItem.css";

const ToDoItem = ({ todo }) => {
  const { handleUpdate, handleDelete } = useContext(TodoDispatchContext);

  const handleChangeCheckbox = () => {
    handleUpdate(todo.id);
  };

  const handleDeleteTodo = () => {
    handleDelete(todo.id);
  };

  return (
    <div className="ToDoItem">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleChangeCheckbox}
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={handleDeleteTodo}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트
// export default memo(ToDoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(ToDoItem);
