/** 
 * Mongoose Schema for the Entity Driver
 * @author Clark Jeria
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DriverSchema   = new Schema({
    driverId: Number,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: Number,
	password: String,
	driverLicense: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('Driver', DriverSchema);