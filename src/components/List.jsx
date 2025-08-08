import { useState } from "react";
import "./List.css";
import ToDoItem from "./ToDoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={handleChangeSearch}
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <ToDoItem
            todo={todo}
            key={todo.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
