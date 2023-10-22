const bcrypt = require('bcryptjs');
const admins = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456'),
        phone: '360-943-7332',
        role: 'Admin',
    },
];

module.exports = admins;
