import db from '../config/database.js';

// Get All Users
export const getUsers = (result) => {
    db.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("Error while fetching users", err);
            result(null, err);
        } else {
            console.log("Users fetched successfully");
            result(null, res);
        }
    });
}

// Get User By ID
export const getUserById = (id, result) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("Error while fetching user by id", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

// Create New User
export const createUser = (data, result) => {
    db.query("INSERT INTO users SET ?", [data], (err, res) => {
        if (err) {
            console.log("Error while inserting data");
            result(null, err);
        } else {
            console.log("User created successfully");
            result(null, res);
        }
    });
}

// Update User
export const updateUserById = (data, id, result) => {
    db.query("UPDATE users SET username = ?, date_created = ? WHERE id = ?", [data.username, data.date_created, id], (err, res) => {
        if (err) {
            console.log("Error while updating data");
            result(null, err);
        } else {
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// Delete User
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM users WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("Error while deleting user");
            result(null, err);
        } else {
            console.log("User deleted successfully");
            result(null, res);
        }
    });
}