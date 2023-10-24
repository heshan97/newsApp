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
app.use(cors());

//root route
app.get('/', (req, res) => {
    res.send({message:'App works properly!'});
});

// Middleware
const corsOptions = {
    origin: '*', // Replace with the URL of your client app
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true, // Allow cookies, sessions, and other credentials to be sent
    optionsSuccessStatus: 204, // Set the response status code for successful CORS preflight requests
  };
  
app.use(cors(corsOptions));
  

// app.use(cors());
app.use(express.json());

//routes
app.use('/api/news/', newsRoutes);
app.use('/api/admin/', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));