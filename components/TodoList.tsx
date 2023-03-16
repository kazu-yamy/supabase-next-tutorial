import React from "react";
import { Todo } from "../utils/interface";

type Props = {
  todos: Todo[];
};

const TodoList = (props: Props) => {
  const { todos } = props;
  return (
    <div>
      <ul className=" mx-auto ">
        {todos.map((todo) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={todo.id}
            className=" flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between "
          >
            <li className=" font-medium ">✅ {todo.title}</li>
            <span className=" cursor-pointer ">✕</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
