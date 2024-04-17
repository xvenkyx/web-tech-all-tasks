import React, { useState } from "react";
import TasksCard from "../components/TasksCard";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      taskLink: "/table1",
      taskTitle: "School Time Table",
      taskDescription: "A school timetable making use of colspan and rowspan",
      taskImage: "/src/assets/table1.JPG",
      taskSkillsUsed: ["#html", "css"],
    },
    {
      taskLink: "/table2",
      taskTitle: "Alphabet Table",
      taskDescription: "A alphabet table making use of colspan and rowspan",
      taskImage: "/src/assets/table2.JPG",
      taskSkillsUsed: ["#html", "css"],
    },
    {
      taskLink: "/form",
      taskTitle: "Basic Form",
      taskDescription:
        "A very basic form containing many types of commonly used inputs.",
      taskImage: "",
      taskSkillsUsed: ["#html", "css"],
    },
    {
      taskLink: "/form",
      taskTitle: "Simple Login Form",
      taskDescription:
        "A simple login form containing inputs for username and password and no functionality.",
      taskImage: "",
      taskSkillsUsed: ["#html", "css"],
    },
    {
      taskLink: "/form",
      taskTitle: "Audio Video Box",
      taskDescription:
        "Audio player and video section to play offline and online videos.",
      taskImage: "",
      taskSkillsUsed: ["#html", "css"],
    },
  ]);

  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="container items-center flex flex-wrap justify-center gap-4 max-w-7xl p-4 mx-auto">
        <TasksCard tasks={tasks} />
      </div>
    </div>
  );
}
