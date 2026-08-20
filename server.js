const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let registrations = [];

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Register user
app.post("/register", (req, res) => {

    const user = {
        id: registrations.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || "",
        event: req.body.event
    };

    registrations.push(user);

    res.status(201).json({
        message: "Registration Successful",
        user: user
    });
});

// View all users
app.get("/users", (req, res) => {
    res.json(registrations);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
