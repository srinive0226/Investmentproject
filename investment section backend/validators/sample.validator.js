const {body} = require('express-validator')

function sampleValidate(){
    console.log("sampleValidate");
    return [
        [
            
            body('full_name')
              .notEmpty()
              .withMessage('Name is required')
              .isLength({ max: 50 })
              .withMessage('Name must not exceed 50 characters'),
        
            
            body('address')
              .notEmpty()
              .withMessage('address is required')
              .isLength({ max: 50 })
              .withMessage('Invalid address format'),

              body('country')
              .notEmpty()
              .withMessage('country is required')
              .isLength({ max: 50 })
              .withMessage('country must not exceed 50 characters'),


              body('pincode')
              .notEmpty()
              .withMessage('pincode is required')
              .isLength({ max: 6 })
              .withMessage('country must not exceed 50 characters'),

              body('phone_no')
              .notEmpty()
              .withMessage('phone number is required')
              .isLength({ max: 10 })
              .withMessage('phone number must not exceed 10 characters'),

          ]                                                                                                                     
    ]

}
// const express = require('express');
// const { body, validationResult } = require('express-validator');

  
module.exports = {
    sampleValidate
}