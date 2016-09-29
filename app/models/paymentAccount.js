/** 
 * Mongoose Schema for the Entity Payment Account
 * @author Tingting Feng
 * @version 0.0.2
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PaymentAcctSchema   = new Schema({
    accountId: Number,
    accountType: Number,
    accountNumber: Number,
    expirationDate: Number,
    nameOnAccount: Number,
    bank: String
});

module.exports = mongoose.model('PaymentAccount', PaymentAcctSchema);