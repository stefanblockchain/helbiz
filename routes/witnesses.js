const express = require('express');
const router = express.Router();
const WitnessService = require('../services/witnessService');

const witnessService = new WitnessService();

/* GET users listing. */
router.post('/add', async (req, res, next) => {
  try {
    const body = req.body;
    //console.log(req.ip);
    const saved = await witnessService.addWitness(body.caseTitle, body.phoneNumber,);
    res.json(saved);
  }

  catch (ex) {
    console.error(ex.message);
    res.json({ error: ex.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    let witnesses = await witnessService.getAll();
    res.json(witnesses);
  }
  catch (ex) {
    console.error(ex.message);
    res.json({ error: ex.message });
  }

});

module.exports = router;
