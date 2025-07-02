import React, { useState } from 'react';

const initialState = {
  name: '',
  image: null,
  speciality: '',
  degree: '',
  experience: '',
  about: '',
  fees: '',
  addressLine1: '',
  addressLine2: '',
};

const AddDoctorForm = () => {
  const [data, setData] = useState(initialState);

  /** generic change handler */
  const handleChange = e => {
    const { name, value, files } = e.target;
    setData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  /** submit */
  const handleSubmit = async e => {
    e.preventDefault();

    // prepare for file upload
    const body = new FormData();
    Object.entries(data).forEach(([k, v]) => body.append(k, v ?? ''));

    // TODO: POST to your back‑end
    // await fetch('/api/doctors', { method: 'POST', body });

    console.log('Submitting ', Object.fromEntries(body.entries()));
    alert('Doctor added!');
    setData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-blue-800">Add Doctor</h2>

      {/* name */}
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="input"
          placeholder="Dr. Richard James"
        />
      </div>

      {/* image */}
      <div>
        <label className="block mb-1 font-medium">Profile Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      {/* specs */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Speciality</label>
          <input
            name="speciality"
            value={data.speciality}
            onChange={handleChange}
            required
            className="input"
            placeholder="General Physician"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Degree</label>
          <input
            name="degree"
            value={data.degree}
            onChange={handleChange}
            required
            className="input"
            placeholder="MBBS"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <input
            name="experience"
            value={data.experience}
            onChange={handleChange}
            required
            className="input"
            placeholder="4 Years"
          />
        </div>
      </div>

      {/* about */}
      <div>
        <label className="block mb-1 font-medium">About</label>
        <textarea
          name="about"
          value={data.about}
          onChange={handleChange}
          rows={4}
          required
          className="input"
          placeholder="Short bio..."
        />
      </div>

      {/* fees */}
      <div>
        <label className="block mb-1 font-medium">Consultation Fees ($)</label>
        <input
          type="number"
          name="fees"
          value={data.fees}
          onChange={handleChange}
          required
          min="0"
          className="input"
        />
      </div>

      {/* address */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Address Line 1</label>
          <input
            name="addressLine1"
            value={data.addressLine1}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address Line 2</label>
          <input
            name="addressLine2"
            value={data.addressLine2}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        Save Doctor
      </button>
    </form>
  );
};

export default AddDoctorForm;

