/** 
 * Mongoose Schema for the Entity Passenger
 * @author Clark Jeria
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PassengerSchema   = new Schema({
    passengerId: Number,
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

module.exports = mongoose.model('Passenger', PassengerSchema);