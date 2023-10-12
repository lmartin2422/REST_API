import express from 'express'
import { v4 as uuidv4 } from 'uuid';  // first run 'npm install uuid' -- this makes sure users have unique IDs
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();  // initializes the router

const users = [  // mock data for API use
    {
        firstName: "John",
        lastName: "Doe",
        age: 25  
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 36
    }
]

// all routes here start with /users because of app.use('/users', userRoutes) in index.js
router.get('/', (req, res) => {  
    console.log(users);
    res.send(users); // sends data to the web page to view (READ/GET) *** browsers can only make GET requests
});

// sends data to the database/server
router.post('/', (req, res) => {
    // console.log('POST Route Reached');
    // console.log(req.body);  // will display all the contents of the JSON list
    const user = req.body;  // same as above, but we gave it a variable name in this line

    const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    const userWithId = { ...user, id: userID} 
    // '...user' spreads all the properties of the users ie: firstName etc
    // then it adds a new property 'userID'


    users.push(user); // pushes the new user to our current users array

    // this is sent back to the client side
    res.send(`User with the name ${user.firstName} added to the database!`); 
}); 

export default router;  // allows us to make use of router in index.js file