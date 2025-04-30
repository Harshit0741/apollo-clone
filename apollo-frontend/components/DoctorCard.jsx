export default function DoctorCard({ doctor }) {
    return (
      <div className="border p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p>{doctor.experience} years experience</p>
        <p>₹{doctor.fees}</p>
        <p>{doctor.location}</p>
      </div>
    );
  }
  