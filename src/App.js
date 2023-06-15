import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddState = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };

  const handleDeleteState = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (title && content) {
      const newTodo = { title, content, isDone: false };
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="todobox">
      <header>Todo List</header>
      <div className="inputbox">
        <div>
          제목 :{" "}
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          내용 :{" "}
          <input type="text" value={content} onChange={handleContentChange} />
        </div>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div className="workinglist">
        <h3>Working</h3>
        <ul>
          {workingTodos.map((todo, index) => (
            <li key={index}>
              <h4>제목 : {todo.title}</h4>
              <p>내용 : {todo.content}</p>
              <button onClick={() => handleDeleteState(index)}>삭제</button>
              <button onClick={() => handleAddState(index)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="donelist">
        <h3>Done</h3>
        <ul>
          {doneTodos.map((todo, index) => (
            <li key={index}>
              <h4>제목 : {todo.title}</h4>
              <p>내용 : {todo.content}</p>
              <button onClick={() => handleDeleteState(index)}>삭제</button>
              <button onClick={() => handleAddState(index)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
