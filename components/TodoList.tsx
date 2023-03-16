import React from "react";
import { Todo } from "../utils/interface";
import { deleteTodo, getAllTodos } from "../utils/supabaseFunction";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
};

const TodoList = (props: Props) => {
  const { todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(await getAllTodos());
  };

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
            <span
              className=" cursor-pointer "
              onClick={() => handleDelete(todo.id)}
            >
              ✕
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
