const express = require('express');
const router = express.Router();
const {validateRegister,validateLogin}=require('../middleware/validationMiddleware')
let users = [];

// Register 
router.post('/register',validateRegister, (req, res) => {
  const { username, password } = req.body;
  // Check if user already exists
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // Register the user
  users.push({ username, password });
  res.json({ message: 'Registration successful' });
});

// Login 
router.post('/login',validateLogin, (req, res) => {
  const { username, password } = req.body;
  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {

    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

// registered users 
router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
