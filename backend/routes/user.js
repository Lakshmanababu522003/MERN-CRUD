const router = require('express').Router();
const User =require('../model/user.model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("errror:" +err));
})

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    console.log(username+" "+password);

    const newUser = new User(({username,password}));

    newUser.save()
    .then(() => res.json("user added"))
    .catch(err => res.status(400).json("errror:" +err))
})

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then (() => res.json('User Deleted'))
    .catch(err => res.status(400).json("errror:" +err))
})

router.route('/update/:id').post((req,res) =>{
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;

        user.save()
        .then (() => res.json("user Updated"))
        .catch(err => res.status(400).json("errror:" +err))

    })

    .catch(err => res.status(400).json("errror:" +err))
})

module.exports = router;