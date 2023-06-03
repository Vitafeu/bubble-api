import express from 'express';

import { showUsers, showUserById, addUser, updateUser, deleteUser} from '../controllers/User.js';

const router = express.Router();

// Get All Users
router.get('/users', showUsers);

// Get User By ID
router.get('/users/:id', showUserById);

// Create New User
router.post('/users', addUser);

// Update User
router.put('/users/:id', updateUser);

// Delete User
router.delete('/users/:id', deleteUser);

export default router;