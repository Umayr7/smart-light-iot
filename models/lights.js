const mongoose = require('mongoose');

const LightSchema = mongoose.Schema({
    inDate: {
        type: Date,
        required: true
    },
    outDate: {
        type: Date,
        required: true
    },
    timeDifference: {
        type: String,
    },
});

module.exports = mongoose.model('light', LightSchema);