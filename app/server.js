const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to User CRUD REST Application 0.2.2" });
});

app.listen(8000, () => {
    console.info("Server 0.2.2 is listening on port 8000");
});

require('./route/user.route.js')(app);