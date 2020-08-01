const mongoose = require('mongoose');
const Challenge = mongoose.model('Challenges');

exports.create_a_challenge = (req, res) => {
    const newChallenge = new Challenge({
        shortDescription: "DragonBall Z",
        catagory: "Movies",
        goal: 100,
        creater_id: "123123",
        fulfilledBy_id: "456456"
    }); 
    newChallenge.save((err, challenge) => {
        console.log(challenge)
        console.log(err)
      if (err)
        res.send(err);
        res.json(challenge);
    });
  };

  exports.list_all_challenges = (req, res) => {
    Challenge.find({}, (err, challenges) => {
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