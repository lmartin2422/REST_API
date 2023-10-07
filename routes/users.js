import express from 'express'

const router = express.Router();  // initializes the router

const users = [  // mock data for API use
    {
        firstName: "John",
        lastName: "Doe",
        age: 25  
      }
]

// all routes here start with /users because of app.use('/users', userRoutes) in index.js
router.get('/', (req, res) => {  
    console.log(users);
    res.send('Hello');
});

export default router;  // allows us to make use of router in index.js file