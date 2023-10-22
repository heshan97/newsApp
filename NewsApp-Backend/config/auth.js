require('dotenv').config();
const jwt = require('jsonwebtoken');

const signInToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );
};

const isAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send({
            message: err.message,
        });
    }
};

module.exports = {
    signInToken,
    isAuth,
};
