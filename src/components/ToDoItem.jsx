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

export default ToDoItem;
