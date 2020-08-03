const express = require("express");
const router = express.Router();
const challengeBuilder = require('../../controllers/challenges')
const Challenge = require("../../models/challengeModel");

router.get('/create', challengeBuilder.create_a_challenge),

router
  .route('/')
  .get(challengeBuilder.list_all_challenges)
  .post(challengeBuilder.create_a_challenge)

router.get('/:id', (req,res) => {
  console.log(req.query);
  let filter = {}
  if (req.query.category) {
    filter.category = req.query.category
  }
  Challenge.find(filter, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
})


module.exports = router;
