/** 
 * Mongoose Schema for the Entity Car
 * @author Clark Jeria
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({
    carId: Number,
    license: String,
    driverId: Number,
    plateNumber: String,
	insuranceInfo: String,
	year: Number,
	make: String,
	model: String, 
    doorCount: Number
});

module.exports = mongoose.model('Car', CarSchema);