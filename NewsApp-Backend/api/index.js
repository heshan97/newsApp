const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDataBase = require('../config/db');
const newsRoutes = require('../routes/newsRoutes');
const adminRoutes = require('../routes/adminRoutes');

// Load environment variables
connectDataBase();
dotenv.config();
const app = express();

//root route
app.get('/', (req, res) => {
    res.send('App works properly!');
});

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/news/', newsRoutes);
app.use('/api/admin/', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));