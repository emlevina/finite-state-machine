const Fact = require("../models/Fact");

const createFact = async (req, res) => {
  try {
    const fact = await Fact.create(req.body);
    res.status(201).json({ fact });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const getFact = async (req, res) => {
  try {
    const fact = await Fact.findOne({ number: req.params.number });
    const factToSend = fact ? fact.fact : "Fact not found";
    res.status(201).json({ fact: factToSend });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createFact, getFact };
