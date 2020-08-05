require("dotenv").config()

module.exports = {
    mongoURI: `mongodb+srv://hhammer33:${process.env.MONGOPW}@charity-tasker.mberm.mongodb.net/Charity?retryWrites=true&w=majority`,
    secretOrKey: "secret"
  };