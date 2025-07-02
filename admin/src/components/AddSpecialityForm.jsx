import React, { useState } from 'react';

const AddSpecialityForm = () => {
  const [speciality, setSpeciality] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: POST speciality to API
    console.log({ speciality });
    setSpeciality('');
    alert('Speciality added!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-blue-800">Add Speciality</h2>

      <div>
        <label className="block mb-1 font-medium">Speciality Name</label>
        <input
          type="text"
          value={speciality}
          onChange={e => setSpeciality(e.target.value)}
          required
          className="input"
          placeholder="e.g. Cardiology"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        Save
      </button>
    </form>
  );
};

export default AddSpecialityForm;
