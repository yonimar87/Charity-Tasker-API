const mongoose = require('mongoose');
const Challenge = mongoose.model('Challenges');

exports.create_a_challenge = (req, res) => {
    const newChallenge = new Challenge(
      req.body
    );
    newChallenge.save((err, challenge) => {
        console.log(challenge)
        console.log(err)
      if (err)
        res.send(err);
        res.json(challenge);
    });
  };

  exports.list_all_challenges = (req, res) => {
    let filter = {}
    if (req.query.category) {
      filter.category = req.query.category
    }
    Challenge.find(filter, (err, challenges) => {
      if (err) res.send(err);
      res.json(challenges);
    });
  };

  exports.read_a_challenge = (req, res) => {
    Challenge.findById(req.params.challengeId, (err, challenge) => {
      if (err) res.send(err);

      res.json(challenge);
    })
  }

  exports.update_a_challenge = (req, res) => {
    Challenge.findOneAndUpdate(
      {_id: req.params.challengeId},
      req.body,
      {new: true},
      (err, challenge) => {
        if(err) res.send(err);
        res.json(challenge);
      }
    )
  }
