export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Action =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// import { useReducer } from "react";

// const TodoReducer = (state: Todo[], action) => {};

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);

//   // return <div>model</div>;
// };
