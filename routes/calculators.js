const { Calculator, validate } = require("../models/calculator");
const express = require("express");
const router = express.Router();

router.get("/getData", async (req, res) => {
  const calculator = await Calculator.find();
  res.send(calculator);
});

router.post("/saveData", async (req, res) => {
  //const { error } = validate(req.body);
  if(req.body.input1 &&  req.body.input2 && req.body.result) {
    let calculator = new Calculator({
      input1: req.body.input1,
      input2: req.body.input2,
      result: req.body.result
    });
    calculator = await calculator.save();
  
    res.send(calculator);
  }
  else{
    return res.status(400).send("Invalid Request");
  }
  

  
});

module.exports = router;
