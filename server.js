const express = require('express');
const connectDB = require('./config/database');
const readSerial = require('./middlewares/readSerial');

// Connect DB
connectDB();

// Read Serial
// readSerial();

const app = express ();
const PORT = process.env.PORT || 8000;

// Defining Routes
app.use('/lights', require('./routes/lights'));

console.log('env');
console.log(process.env.NODE_ENV);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});