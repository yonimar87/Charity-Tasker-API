const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Challenge = require('./api/models/challengeModel');
global.Charity = require('./api/models/charityModel');
global.User = require('./api/models/userModel');
global.Donation = require('./api/models/donationModel');
const { mongoURI } = require('./config/keys');
const passport = require('passport');
const users = require('./api/routes/api/users');
const challenges = require('./api/routes/api/challenges')

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    mongoURI,
  { useNewUrlParser: true }
);
const PORT = process.env.PORT || 1337; // Get ready for deployment.
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Makes POST requests work
app.use(bodyParser.json());

app.listen(PORT);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/challenges", challenges);
// app.use("/api/charities", charities);
// app.use("/api/donations", donations);

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Serving on http://localhost:${ PORT }`);
