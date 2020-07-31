const mongoose = require('mongoose');
const Challenge = mongoose.model('Challenges');

exports.create_a_challenge = (req, res) => {
    const newChallenge = new Challenge({
        shortDescription: "Eat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burgerEat a burger",
        catagory: "Food",
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