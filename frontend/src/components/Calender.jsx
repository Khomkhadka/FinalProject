
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Generates a 6x7 grid (42 cells) representing the calendar for a given month.
 * Each cell contains a Date object or null (for empty cells).
 */
function getMonthGrid(year, month) {
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  let currentDay = 1;

  for (let i = 0; i < 42; i++) {
    if (i >= firstDayIndex && currentDay <= daysInMonth) {
      grid.push(new Date(year, month, currentDay));
      currentDay++;
    } else {
      grid.push(null);
    }
  }

  return grid;
}

const Calender = () => {

const { popUp,setPopUP} = useContext(AppContext)

  const [today] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });

  const [monthGrid, setMonthGrid] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    const year = today.getFullYear();
    const month = today.getMonth();
    setMonthGrid(getMonthGrid(year, month));
  }, [today]);

  // Checks if the date is within the next 7 days (including today)
  const isNext7Days = (date) => {
    if (!date) return false;
    const diffDays = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays < 7;
  };

  // Determines CSS classes for each date cell
  const getDayStyle = (date) => {
    if (!date) return 'min-h-[70px]';

    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

    const baseClasses =
      'rounded-md p-2 min-h-[70px] text-sm font-semibold flex items-center justify-center';

    const clickableClasses = isNext7Days(date)
      ? 'cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800'
      : 'bg-gray-100 text-gray-400 cursor-default';

    const selectedClasses = isSelected ? 'ring-2 ring-indigo-500' : '';

    const saturdayClasses = date.getDay() === 6 ? 'text-red-500 font-bold' : '';

    return `${baseClasses} ${clickableClasses} ${selectedClasses} ${saturdayClasses}`;
  };

  // Handle clicking a date cell: select only if in next 7 days
  const handleClick = (date) => {
    if (isNext7Days(date)) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="fixed inset-0 max-w-2xl mx-auto p-6 mt-10 mb-12 bg-white  shadow-lg rounded-xl border backdrop-blur-sm">

         <h2 onClick={()=>setPopUP(false)} className='text-bold bg-red-600 w-5 text-center rounded  ml-auto cursor-pointer'>X</h2>
         <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">

        Appointment Month - {today.toLocaleString('default', { month: 'long' })} {today.getFullYear()}
      </h2>
      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-2 text-center font-semibold text-gray-700">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className={day === 'Sat' ? 'text-red-500' : ''}>
            {day}
          </div>
        ))}
      </div>

      {/* Dates grid */}
      <div className="grid grid-cols-7 gap-2">
        {monthGrid.map((date, idx) => (
          <div
            key={idx}
            className={getDayStyle(date)}
            onClick={() => handleClick(date)}
          >
            {date ? date.getDate() : ''}
          </div>
        ))}
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <p className="mt-4 text-center text-indigo-700 font-medium">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default Calender;
