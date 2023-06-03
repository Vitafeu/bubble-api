import { getUsers, getUserById, createUser, updateUserById, deleteUserById } from '../models/User.js';

// Get All Users
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get User By ID
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New User
export const addUser = (req, res) => {
    createUser(req.body, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update User
export const updateUser = (req, res) => {
    updateUserById(req.body, req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete User
export const deleteUser = (req, res) => {
    deleteUserById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}