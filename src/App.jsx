import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);

    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const handleCreate = useCallback(
    () => (content) => {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime(),
        },
      });
    },
    []
  );

  const handleUpdate = useCallback(() => {
    (targetId) => {
      dispatch({
        type: "UPDATE",
        targetId: targetId,
      });
    };
  }, []);

  const handleDelete = useCallback(() => {
    (targetId) => {
      dispatch({
        type: "DELETE",
        targetId: targetId,
      });
    };
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { handleCreate, handleDelete, handleUpdate };
  }, [handleCreate, handleDelete, handleUpdate]);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
