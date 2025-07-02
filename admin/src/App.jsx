import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import DoctorList from './components/DoctorList';
import AddSpecialityForm from './components/AddSpecialityForm';
import AddDoctorForm from './components/AddDoctorForm';

const App = () => (
  <Router>
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/"                element={<Navigate to="/doctorlist" replace />} />
          <Route path="/doctorlist"      element={<DoctorList />} />
          <Route path="/add-speciality"  element={<AddSpecialityForm />} />
          <Route path="/add-doctor"      element={<AddDoctorForm />} />
          {/* fallback */}
          <Route path="*" element={<p>404 – Page not found</p>} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
