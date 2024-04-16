import React from 'react'

export default function TasksCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="" alt="Table 1" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Table 1</div>
        <p className="text-gray-700 text-base">
          A school timetable making use of colspan and rowspan
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #html
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #css
        </span>
      </div>
    </div>
  );
}
