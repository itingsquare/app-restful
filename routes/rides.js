/**
 * Express Route: /rides
 * @author Tingting Feng
 * @version 0.0.2
 */
var express = require('express');
var router = express.Router();

var Ride = require('../app/models/ride');

var reportError = require('../app/utils');

router.route('/rides')
    /**
     * GET call for the car entity (multiple).
     * @returns {object} A list of cars. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        Car.find(function(err, cars){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(cars);
            }
        });
    })
    /**
     * POST call for the car entity.
     * @param {string} license - The license plate of the new car
     * @returns {object} A message and the car created. (201 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .post(function(req, res){
        var car = new Car(req.body);
        // var car = new Car();
        // car.license = req.body.license;
        // car.door_number = req.body.door_number;
        // car.model = req.body.model;
        // var dictParams = {
        //   10011: 'license',
        //   10012: 'door_number'
        // };
        // if(car.license === undefined || car.license === 0 || car.license === null || car.license === '') {
        //
        // }
        if(typeof car.license !== 'string') {
            reportError.typeError('string', res);
        }
        if(!car.license) {
          reportError.missingParam('license', res);
        }
        if(car.license == null){
            reportError.emptyBody('license', res);
        }
        if(!car.model) {
            reportError.missingParam('model', res);
        }

        car.save(function(mongooseMsg){
            if(mongooseMsg){
                // res.status(500).json({
                //     errorCode: 1001,
                //     errorMsg: mongooseMsg.errors,
                //     statusCode: 400,
                //     statusTxt: 'Bad Request'
                // });
                res.status(500).send(err);
            }else{
                res.status(201).json({"message" : "Car Created", "car_created" : car});
            }
        });
    });

/**
 * Express Route: /cars/:car_id
 * @param {string} car_id - Id Hash of Car Object
 */
router.route('/cars/:car_id')
    /**
     * GET call for the car entity (single).
     * @returns {object} the car with Id car_id. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .get(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(car);
            }
        });
    })
    /**
     * PATCH call for the car entity (single).
     * @returns {object} A message and the car updated. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .patch(function(req, res){
        Car.findById(req.params.car_id, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                car.license = req.body.license;
                car.save(function(err){
                    if(err){
                        res.status(500).send(err);
                    }else{
                        res.json({"message" : "Car Updated", "car_created" : car});
                    }
                });
            }
        });
    })
    /**
     * DELETE call for the car entity (single).
     * @returns {object} A string message. (200 Status Code)
     * @throws Mongoose Database Error (500 Status Code)
     */
    .delete(function(req, res){
        Car.remove({
            _id : req.params.car_id
        }, function(err, car){
            if(err){
                res.status(500).send(err);
            }else{
                res.json({"message" : "Car Deleted"});
            }
        });
    });

module.exports = router;
