import express from 'express'

// these are function names that have been exported from the controller file
import { createUser, deleteUser, getUsers, getUserById, updateUser } from '../controllers/users.js';  

const router = express.Router();  // initializes the router




// all routes here start with /users because of app.use('/users', userRoutes) in index.js
router.get('/', getUsers);

router.post('/', createUser); 

router.get('/:id', getUserById);

router.delete('/:id', deleteUser); 

router.patch('/:id', updateUser);

export default router;  // allows us to make use of router in index.js file