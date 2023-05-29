const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3",
    "user4": "password4",
    "user5": "password5",
    "user6": "password6",
    "user7": "password7",
    "user8": "password8",
    "user9": "password9",
    "user10": "password10"
};

const userPointsLevel = {
    'user1': [1000, 2],
    'user2': [1200, 3],
    'user3': [800, 1],
    'user4': [1500, 4],
    'user5': [600, 2],
    'user6': [900, 3],
    'user7': [1100, 2],
    'user8': [1300, 4],
    'user9': [700, 1],
    'user10': [1400, 3]
};

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // check if the user exists in the hardcoded list
    if (users[username] === undefined) {
        return res.status(400).json({ message: "User not found" });
    }

    // compare the provided password with the stored password
    if (users[username] !== password) {
        return res.status(400).json({ message: "Incorrect password" });
    }

    // if user is authenticated, send the points and level
    const [points, level] = userPointsLevel[username] || [0, 0];

    res.json({
        message: 'Login successful',
        user: {
            username,
            points,
            level
        }
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));
