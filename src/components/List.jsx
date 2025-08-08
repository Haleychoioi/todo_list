import { useState } from "react";
import "./List.css";
import ToDoItem from "./ToDoItem";
import { useMemo } from "react";

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>

      <div>
        <div>Total: {totalCount}</div>
        <div>Done: {doneCount}</div>
        <div>Not done: {notDoneCount}</div>
      </div>

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
