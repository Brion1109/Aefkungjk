const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
id: Number,
name: String,
duration: Number,
maxGroupSize: Number,
difficulty: String,
ratingAverage: Number,
price: Number,
summary: String,
startDates: Array
});

const Tour = mongoose.model('tour',tourSchema);

module.exports = Tour;