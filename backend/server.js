const express = require('express');
const connectDB = require('./config/db');  
const caseStudiesRouter = require('./routes/caseStudies');
const contactRouter = require('./routes/contact');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/case-studies', caseStudiesRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));