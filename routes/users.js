import express from 'express'
import { v4 as uuidv4 } from 'uuid';  // first run 'npm install uuid' -- this makes sure users have unique IDs
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();  // initializes the router

let users = [  // mock data for API use
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

    // const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    // const userWithId = { ...user, id: uuidv4()} //simple version of the line below combined with line above
    // const userWithId = { ...user, id: userID} 
    // '...user' spreads all the properties of the users ie: firstName etc
    // then it adds a new property 'userID' which is based off uuid import

    users.push({ ...user, id: uuidv4()})
    // users.push(userWithId)  // does same as commented line below
    // users.push(user); // pushes the new user to our current users array

    // this is sent back to the client side
    res.send(`User with the name ${user.firstName} added to the database!`); 
}); 



router.get('/:id', (req, res) => { // the ":" takes any parameter after the slash. will display anything
    const { id } = req.params; // makes the id a parameter

    const foundUser = users.find((user) => user.id === id);  // looks for a user in the db that has the same id
    // this line finds each users, then searches if a user's id is a match to the id at the end
    
    res.send(foundUser);  // displays to the browser the entire user information
});

router.delete('/:id', (req,res) => { // deletes a specific id based on the id parameters
    const { id } = req.params; // gets the id

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`);

}); 

router.patch('/:id', (req, res) => {  // patch updates an item partially but not the entire item ex: lastName
    // above and line below we are receiving a request parameter which is the id
    // the id specifies what user we want to update
    // use POSTMAN for POST, PATCH, DELETES
    const { id } = req.params; // gets the id
    const {firstName, lastName, age} = req.body;  // takes all the properties sent from the frontend/client

    const userToBeUpdated = users.find((user) => user.id === id);
    // looks through all the users, then finds the user with the matching id as the id in req.params in get

    //these if statements will allow us to change 1 or more properties of the user if we have those values
    if (firstName) {
        userToBeUpdated.firstName = firstName;
    }

    if (lastName) {
        userToBeUpdated.lastName = lastName;
    }

    if (age) {
        userToBeUpdated.age = age;
    }

    res.send(`User with the id ${id} has been updated`)
});

export default router;  // allows us to make use of router in index.js file