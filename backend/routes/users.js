const router = require('express').Router();

const { json } = require('express');
let User = require('../models/user.model');



router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/getUser').post((req, res) => {
var id = req.body.accessToken;
  User.find({"accessToken": id})

  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
 
});



router.route('/add').post((req, res) => {




  const accessToken = req.body.accessToken;
  const name = req.body.name;
  const email = req.body.email;
  const pic = req.body.pic;
  const social = req.body.social;
const Country = req.body.Country;
  const continent = req.body.continent;



  const newUser = new User({

    accessToken,
    name,
    email,
    pic,
    social,
    Country,
    continent
  });


  newUser.save()
    .then(() => res.json(name))
    .catch(err => res.status(400).json(err ));
});

module.exports = router;