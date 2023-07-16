import React from "react";
import { Todo } from "../model";
import SingleTodos from "./SingleTodos";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: any;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodos
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
