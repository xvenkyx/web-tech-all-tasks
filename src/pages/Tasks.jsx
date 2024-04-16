import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TasksCard from "../components/TasksCard";

export default function Tasks() {
  return (
    <div>
      <ul className="items-center flex justify-center">
        <Link to="/table1">
          <TasksCard />
        </Link>
        <Link to="/table2">
          <TasksCard />
        </Link>
      </ul>
    </div>
  );
}
