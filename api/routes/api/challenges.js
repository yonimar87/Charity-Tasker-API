const express = require("express");
const router = express.Router();
const challengeBuilder = require("../../controllers/challenges");
const Challenge = require("../../models/challengeModel");
const { Router } = require("express");

router.get("/create", challengeBuilder.create_a_challenge),
  router.get("/:id", (req, res) => {
    console.log(req.params);
    Challenge.find({ _id: req.params.id }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  });

router.route("/:challengeId").patch(challengeBuilder.update_a_challenge);

router
  .route("/")
  .get(challengeBuilder.list_all_challenges)
  .post(challengeBuilder.create_a_challenge)
  .put(challengeBuilder.assign_a_challenge);

module.exports = router;
