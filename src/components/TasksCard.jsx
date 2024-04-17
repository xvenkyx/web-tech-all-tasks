import React from "react";
import { Link } from "react-router-dom";

export default function TasksCard(props) {
  const tasks = props.tasks;
  return (
    <>
      {/* Mapping */}
      {tasks.map((task) => (
        <Link to={task.taskLink}>
          {/* <TasksCard /> */}
          <div className="container flex flex-col shadow-lg rounded-2xl w-[15rem] h-fit m-2 bg-white">
            <img
              // src="https://picsum.photos/300/200"
              src={task.taskImage}
              alt=""
              className="w-full rounded-t-2xl"
            />
            <h1 className="my-2 mx-[5%] text-xl font-bold">{task.taskTitle}</h1>
            <p className="my-2 mx-[5%] text-gray-700 text-base">
              {task.taskDescription}
            </p>
            <div className="my-2 mx-[5%]">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                html
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                css
              </span>
            </div>
          </div>
          {/* <TasksCard /> */}
        </Link>
      ))}
      {/* Mapping */}
    </>
  );
}
