/** 
 * Mongoose Schema for the Entity Ride
 * @author Tingting Feng
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RideSchema   = new Schema({
    rideId: Number,
    passenger: Number,
    driver: Number,
    car: Number,
    rideType: String,
    startPoint: Array,
    endPoint: Array,
    requestTime: String,
    pickupTime: String,
    dropOffTime: String,
    status: String,
    fare: Number,
    route: Object
});

module.exports = mongoose.model('Ride', RideSchema);