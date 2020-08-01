const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.create_a_user = (req, res) => {
    const newUser = new User({
        username: "hhammer33",
        email: "hhammer33@hammer.com",
        password: "hhammer33",
        full_name: "yoni marlow"
    }); 
    newUser.save((err, user) => {
        console.log(user)
        console.log(err)
      if (err)
        res.send(err);
        res.json(user);
    });
  };

  exports.list_all_users = (req, res) => {
    User.find({}, (err, users) => {
      if (err) res.send(err);
      res.json(users);
    });
  };

  exports.read_a_user = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
      if (err) res.send(err);
      res.json(user);
    })
  }
  
  exports.update_a_user = (req, res) => {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      req.body,
      {new: true},
      (err, user) => {
        if(err) res.send(err);
        res.json(user);
      }
    )
  }