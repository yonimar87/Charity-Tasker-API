const donationsBuilder = require('../controllers/donations')
const challengeBuilder = require('../controllers/challenges')
const charitiesBuilder = require('../controllers/charities')
const userBuilder = require('../controllers/users')


module.exports = (app) => {

    app.get('/challenges', challengeBuilder.create_a_challenge),
        // .route('/')
        // (req,res) => {
        //     challengeBuilder.create_a_challenge()
        //     res.send('main page')
        // }
        
    app.get('/users', userBuilder.create_a_user),
        // .route('/profile/:id')
        // .get('/profile/:id',(req,res) => {
        //     res.send('Profile to go here')
        // }),
        
    app
        // .route('/challenge/:id')
        .get('/challenge/:id',(req,res) => {
            res.send('Challenges are here')
        }),
    app
        // .route('/charity/:id')
        .get('/charity/:id',(req,res) => {
            res.send('Charity is here ')
        }),
    app
        // .route('/donation/:id')
        .get('/donation/:id',(req,res) => {
            res.send('Donation will come here ')
        })
}

//need to connect everything from model to this routes page. 
/*



*/