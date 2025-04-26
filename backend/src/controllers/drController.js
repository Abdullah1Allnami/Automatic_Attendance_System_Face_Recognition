const { Dr } = require("../models/drModel");

const getAllDrs = async (req, res) => {
    try {
        const drs = await Dr.find().populate("courses");
        return res.status(200).json({ status: 'success', drs });
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.message });
    }
};

const getDrById = async (req, res) => {
    try {
        const dr = await Dr.findById(req.params.id).populate("courses");
        if (!dr) return res.status(404).json({ status: 'fail', message: "Dr not found" });

        return res.status(200).json({ status: 'success', dr });
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.message });
    }
};

const createDr = async (req, res) => {
    try {
        const newDr = await Dr.create(req.body);
        res.status(201).json({ status: 'success', dr: newDr });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

const updateDr = async (req, res) => {
    try {
        const updatedDr = await Dr.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate("courses");
        if (!updatedDr) return res.status(404).json({ status: 'fail', message: "Dr not found" });

        res.status(200).json({ status: 'success', dr: updatedDr });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

const deleteDr = async (req, res) => {
    try {
        const dr = await Dr.findByIdAndDelete(req.params.id);
        if (!dr) return res.status(404).json({ status: 'fail', message: "Dr not found" });

        res.status(200).json({ status: 'success', message: "Dr deleted successfully" });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: err.message });
    }
};

module.exports = { getAllDrs, getDrById, createDr, updateDr, deleteDr };
