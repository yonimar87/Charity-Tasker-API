const mongoose = require("mongoose");
const Challenge = mongoose.model("Challenges");
const jwt_decode = require("jwt-decode");

exports.create_a_challenge = (req, res) => {
  // req.body.creator_id = jwt_decode(req.body.token).id;
  console.log(req.body.creator_id);
  const newChallenge = new Challenge(req.body);
  newChallenge.save((err, challenge) => {
    console.log(challenge);
    console.log(err);
    if (err) res.send(err);
    res.json(challenge);
  });
};

exports.assign_a_challenge = (req, res) => {
  const challenge_id = req.body.challenge_id;
  const user_id = req.body.user_id;
  console.log(user_id);
  const newData = {
    fulfilledBy_id: user_id,
  };

  Challenge.findByIdAndUpdate(challenge_id, newData, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send("Succesfully saved.");
  });
  //   Challenge.findOneAndUpdate(filter, newData, {upsert: true}, function(err, doc) {
  //     if (err) return res.send(500, {error: err});
  //     return res.send('Succesfully saved.');
  // });
};

exports.list_all_challenges = (req, res) => {
  console.log(process.env)
  try {
    let filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.creator_id) {
      filter.creator_id = req.query.creator_id;
    }
    if (req.query.fulfilledBy_id) {
      filter.fulfilledBy_id = req.query.fulfilledBy_id;
    }
    console.log(req.query);
    console.log(filter);
    Challenge.find(filter, (err, challenges) => {
      if (err) res.send(err);
      res.json(challenges);
    });
  } catch (error) {
    console.log("This is the error.")
    console.log(error)
    res.json({msg: "Error"});
  }
  res.json({msg: "No error."})
  console.log("No error lol.")
};

exports.read_a_challenge = (req, res) => {
  Challenge.findById(req.params.challengeId, (err, challenge) => {
    if (err) res.send(err);

    res.json(challenge);
  });
};

exports.update_a_challenge = (req, res) => {
  Challenge.findOneAndUpdate(
    { _id: req.params.challengeId },
    req.body,
    { new: true },
    (err, challenge) => {
      if (err) res.send(err);
      res.json(challenge);
    }
  );
};
