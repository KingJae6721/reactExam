import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
//구조분해로 받아야함
type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "잠자기", isChecked: false },
    { id: 2, text: "크어엉", isChecked: false },
    { id: 3, text: "노래부르기", isChecked: false },
  ]);
  //구조분해 할당은 실제 데이터를 변수에 바로 넣을 수 있다. 주소값으로 참조하는게 아님.
  const [newTodo, setNewTodo] = useState("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (itemId: number) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <h1>{title}</h1>

      <div className="container">
        <div>
          <input
            type="text"
            value={newTodo}
            placeholder="할일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          ></input>
          <Button
            variant="warning"
            onClick={() => {
              addTodo();
            }}
          >
            할 일 추가
          </Button>
        </div>
        <div className="board">
          <ul>
            {todos.map((el, idx) => (
              <li key={el.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(el.id);
                  }}
                ></input>
                <span onClick={() => handleTodoClick(el)}>
                  {el.isChecked ? <del>{el.text}</del> : <span>{el.text}</span>}
                </span>
                <button
                  onClick={() => {
                    removeTodo(el.id);
                  }}
                  className="delbutton"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
