const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signInToken } = require('../config/auth');
const Admin = require('../models/Admin');

const registerAdmin = async (req, res) => {
    try {
        const isAdded = await Admin.findOne({ email: req.body.email });
        if (isAdded) {
            return res.status(403).send({
                message: 'This Email already Added!',
            });
        } else {
            const newAdmin = new Admin({
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: bcrypt.hashSync(req.body.password),
            });
            const admin = await newAdmin.save();
            const token = signInToken(admin);
            res.send({
                token,
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                joiningDate: Date.now(),
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email });
        
        if (admin && bcrypt.compareSync(req.body.password, admin.password)) {
            const token = signInToken(admin);
            res.send({
                token,
                _id: admin._id,
                name: admin.name,
                phone: admin.phone,
                email: admin.email,
            });
        } else {
            res.status(401).send({
                message: 'Invalid Email or password!',
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};
module.exports = {
    registerAdmin,
    loginAdmin,
};