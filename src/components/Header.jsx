import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-cyan-600 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl">QSpyders</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tasks">
            <li>Tasks</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
