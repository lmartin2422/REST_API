import express from 'express'

const router = express.Router();  // initializes the router

// all routes in here are starting with /users because of app.use('/users', userRoutes) in index.js
router.get('/', (req, res) => {  
    res.send('Hello');
});

export default router;  // allows us to make use of the router in the index.js file