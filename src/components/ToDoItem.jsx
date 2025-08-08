import { memo } from "react";
import "./ToDoItem.css";

const ToDoItem = ({ todo, onUpdate, onDelete }) => {
  const handleChangeCheckbox = () => {
    onUpdate(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
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
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트
export default memo(ToDoItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
