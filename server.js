const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Challenge = require('./api/models/challengeModel');
global.Charity = require('./api/models/charityModel');
global.User = require('./api/models/userModel');
global.Donation = require('./api/models/donationModel');
const routes = require('./api/routes/charityRoutes');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    `mongodb+srv://hhammer33:${process.env.MONGOPW}@charity-tasker.mberm.mongodb.net/Charity?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
const PORT = process.env.PORT || 1337; // Get ready for deployment.
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Makes POST requests work
app.use(bodyParser.json());

routes(app);

app.listen(PORT);

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Serving on http://localhost:${ PORT }`);


