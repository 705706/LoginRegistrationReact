const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            id: 1,
            name: "John Doe",
            role:"Developer",
            status:"Active"
        },
        {
            id: 2,
            name: "Harry Potter",
            role:"Tester",
            status:"Inactive"
        },
        {
            id:3,
            name:"Linda Stark",
            role:'Project Manager',
            status:"Active"
        }
    ])
});

module.exports = router;