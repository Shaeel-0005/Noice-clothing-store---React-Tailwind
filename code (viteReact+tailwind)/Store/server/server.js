const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin:["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ array: ["some","array","here"] });

});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});