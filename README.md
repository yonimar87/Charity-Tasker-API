# Charity Tasker

This project was initially created with the focus of providing more donations to several charities through aa social media platform. The goal was to have a website where the challenges need to be completed once donations have reached their goals. 

It was created using MERN - MongoDB, Express, React.js and Node.js.


## Prerequisites

The following dependencies are installed for the back-end:
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cloudinary": "^1.22.0",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "jwt-decode": "^2.2.0",
    "mongoose": "^5.9.26",
    "node": "^14.7.0",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "validator": "^13.1.1"

## Currently waiting on Deployment:

This should be completed using Heroku for the front end, and Netify for the back-end.

## Author

* **Yoni Marlow** - (https://github.com/yonimar87/Charity-Tasker-API )

## To Do

* Create a charities API to work with.
* Create the donations API + the connections associated with it. For example, Stripe. 
* Connect Stripe to the donations and a tally of how much a challenge has recieved. Alert when reaches goal.
* Video upload in the challenge page. The goal is that a video must be uploaded before a user can click on the "Completed" status. 
* Seperate challenges based on status (incomplete vs completed)
* Set up an Admin page.