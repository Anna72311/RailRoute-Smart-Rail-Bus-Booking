const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/railroute');

// Define a Schema (e.g., for Vehicles)
const VehicleSchema = new mongoose.Schema({
    name: String,
    number: String,
    type: String, // 'express', 'bus-ac', etc.
    from: String,
    to: String,
    via: [String],
    price: Number
});
const Vehicle = mongoose.model('Vehicle', VehicleSchema);

// API Endpoint to Search Routes
app.get('/api/search', async (req, res) => {
    const { from, to } = req.query;
    try {
        const routes = await Vehicle.find({ $or: [{ from, to }, { via: from, to }, { from, via: to }, { via: from, via: to }] });
        res.json(routes);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(3000, () => console.log('RailRoute Server running on port 3000'));