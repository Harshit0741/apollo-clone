'use client'
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";


const DestinationPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    minFee: "",
    maxFee: "",
    location: "",
    experience: "",
    specialty: "",
  });
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [loading, setLoading] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    fees: "",
    experience: "",
    location: "",
    specialty: "",
  });

  const specialties = ["General Physician", "Internal Medicine", "Pediatrics"];

  const fetchDoctors = async () => {
    setLoading(true);
    const query = new URLSearchParams({
      ...filters,
      page: pagination.page,
      limit: pagination.limit,
    }).toString();

    try {
      const res = await fetch(`http://localhost:5000/api/list-doctor-with-filter?${query}`);
      const data = await res.json();
      setDoctors(data.doctors || []);
    } catch (error) {
      console.error("Failed to fetch doctors", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters, pagination.page]);

  const handleSearch = () => {
    setPagination({ ...pagination, page: 1 });
    fetchDoctors();
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/add-doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDoctor),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Doctor added successfully!");
        fetchDoctors();
        setNewDoctor({
          name: "",
          fees: "",
          experience: "",
          location: "",
          specialty: "",
        });
      } else {
        alert(result.error || "Failed to add doctor");
      }
    } catch (err) {
      alert("Server error. Try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/delete-doctor/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setDoctors((prev) => prev.filter((doc) => doc._id !== id));
      } else {
        console.error("Failed to delete doctor");
      }
    } catch (err) {
      console.error("Error deleting doctor:", err);
    }
  };
  

  return (
    <div className="mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700 animate-fade-in">Find Your Doctor</h1>

      <div className="filters mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400">
          {[
            { type: "text", placeholder: "Doctor's Name", key: "name" },
            { type: "number", placeholder: "Min Fee", key: "minFee" },
            { type: "number", placeholder: "Max Fee", key: "maxFee" },
            { type: "text", placeholder: "Location", key: "location" },
            { type: "number", placeholder: "Experience", key: "experience" },
          ].map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              value={filters[field.key]}
              onChange={(e) => setFilters({ ...filters, [field.key]: e.target.value })}
              className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          ))}

          <select
            value={filters.specialty}
            onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
            className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">Select Specialty</option>
            {specialties.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>

      <div className="doctor-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-lg text-blue-500 animate-pulse">Loading doctors...</p>
        ) : doctors.length === 0 ? (
          <p className="col-span-full text-center text-xl text-gray-500">No doctors found</p>
        ) : (
          doctors.map((doctor) => (
            <div
                key={doctor._id}
                className="doctor-card relative border p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 bg-white group"
            >
                <button
                    onClick={() => handleDelete(doctor._id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    title="Delete"
                >
                    <FaTrash />
                </button>

                <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-gray-600">Specialty: {doctor.specialty}</p>
                <p className="text-gray-600">Location: {doctor.location}</p>
                <p className="text-gray-600">Fees: ₹{doctor.fees}</p>
                <p className="text-gray-600">Experience: {doctor.experience} years</p>
            </div>
          ))
        )}
      </div>

      <div className="pagination flex justify-center gap-4 mt-8">
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              page: prev.page > 1 ? prev.page - 1 : prev.page,
            }))
          }
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-all"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              page: prev.page + 1,
            }))
          }
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-all"
        >
          Next
        </button>
      </div>

      <div className="mt-16 bg-gray-50 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">Add New Doctor</h2>
        <form
          onSubmit={handleAddDoctor}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            required
            className="p-3 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Fees"
            value={newDoctor.fees}
            onChange={(e) => setNewDoctor({ ...newDoctor, fees: e.target.value })}
            required
            className="p-3 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Experience"
            value={newDoctor.experience}
            onChange={(e) => setNewDoctor({ ...newDoctor, experience: e.target.value })}
            required
            className="p-3 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={newDoctor.location}
            onChange={(e) => setNewDoctor({ ...newDoctor, location: e.target.value })}
            required
            className="p-3 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newDoctor.specialty}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
            required
            className="p-3 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Specialty</option>
            {specialties.map((spec, idx) => (
              <option key={idx} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default DestinationPage;
