import React, { useState } from "react";
import "./App.css";
import { InputField } from "./component/InputField";
import TodoList from "./component/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  let name: String;

  name = "aksh";

  // let age : Number
  // let value : Number | String | Boolean
  // let arr : [Number,String]
  // let hobbies : String[]
  // type Person = {
  //     name : String,
  //     age  : Number
  // }
  // let person : Person = {
  //   name :"aksh",
  //   age : 25
  // }
  // hobbies = ["this","is","akash"]
  // arr = [85,"value"]
  // age = 3
  // name = "akash";
  // value = true

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: any) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
