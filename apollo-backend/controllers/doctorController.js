const Doctor = require('../models/Doctor');

exports.addDoctor = async (req, res) => {
  try {
    const allowedSpecialties = ["General Physician", "Internal Medicine", "Pediatrics"];

    if (!allowedSpecialties.includes(req.body.specialty)) {
      return res.status(400).json({ error: "Invalid specialty. Allowed: General Physician, Internal Medicine, Pediatrics" });
    }

    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.listDoctors = async (req, res) => {
  try {
    const { page = 1, limit = 10, name, minFee, maxFee, location, experience, specialty } = req.query;
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" }; 
    }
    if (minFee || maxFee) {
      filter.fees = {};
      if (minFee) filter.fees.$gte = Number(minFee);
      if (maxFee) filter.fees.$lte = Number(maxFee);
    }
    if (location) {
      filter.location = { $regex: location, $options: "i" }; 
    }
    if (experience) {
      filter.experience = { $gte: Number(experience) };
    }
    if (specialty) {
      filter.specialty = { $regex: specialty, $options: "i" }; 
    }

    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Doctor.countDocuments(filter);

    res.json({ total, page: Number(page), doctors });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



