//const Joi = require('joi');
const mongoose = require('mongoose');

const Calculator = mongoose.model('Calculator', new mongoose.Schema({
  input1: {
    type: String,
    required: true
  },
  input2: {
    type: String,
    required: true
  },
  result:{
    type: String,
    required: true
  }

}));

// function validate(calculator) {
//   const schema = {
//     input1: Joi.string().required(),
//     input2: Joi.string().required(),
//     result: Joi.string().required()
//   };

//   return Joi.validate(calculator, schema);
// }

exports.Calculator = Calculator; 
//exports.validate = validate;