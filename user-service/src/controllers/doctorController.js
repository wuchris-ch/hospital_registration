// controllers/doctorController.js
const { Doctor } = require('../models');

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDoctor = async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.findByPk(id);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addDoctor = async (req, res) => {
    const { name, specialty } = req.body;
    try {
        const newDoctor = await Doctor.create({ name, specialty });
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, specialty } = req.body;

    try {
        const doctor = await Doctor.findByPk(id);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        doctor.name = name;
        doctor.specialty = specialty;
        await doctor.save();

        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findByPk(id);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        await doctor.destroy();
        res.json({ message: 'Doctor deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
