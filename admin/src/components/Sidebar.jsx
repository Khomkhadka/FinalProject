import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass =
  'block px-4 py-2 rounded transition hover:bg-blue-700/90 ' +
  ' [&.active]:bg-blue-700 [&.active]:font-semibold';

const Sidebar = () => (
  <aside className="w-64 bg-blue-800 text-white shadow-lg">
    <h1 className="text-2xl font-bold px-6 py-4 border-b border-blue-700">
      Admin Panel
    </h1>

    <nav className="mt-4 space-y-2 px-4">
      <NavLink to="/doctorlist"     className={linkClass}>Doctor List</NavLink>
      <NavLink to="/add-speciality" className={linkClass}>Add Speciality</NavLink>
      <NavLink to="/add-doctor"     className={linkClass}>Add Doctor</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
