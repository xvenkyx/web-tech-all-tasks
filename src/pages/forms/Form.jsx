import React from "react";
import { Link } from "react-router-dom";

export default function form() {
  return (
    <div>
      <Link to="/tasks">Back</Link>
      <div className="items-center flex flex-col">
        <div className="font-bold text-3xl">Form</div>
        <div className="3-columns flex flex-row gap-4 border border-black p-4">
          <div className="1-column flex flex-col gap-2 border border-black p-4">
            <div>
              <label htmlFor="">Name</label>
              <input
                className="shadow-lg border border-black mx-1"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="shadow-lg border border-black mx-1"
                type="email"
              />
            </div>
          </div>
          <div className="1-column flex flex-col gap-2 border border-black p-4">
            <div>
              <label htmlFor="">Gender</label>
              <input
                className="shadow-lg border border-black mx-1"
                type="radio"
                name="gender"
              />
              Female
              <input
                className="shadow-lg border border-black mx-1"
                type="radio"
                name="gender"
              />
              Male
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="shadow-lg border border-black mx-1"
                type="email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
