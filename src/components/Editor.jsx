import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        placeholder="새로운 Todo..."
        value={content}
        onChange={handleChangeContent}
        ref={contentRef}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default Editor;
