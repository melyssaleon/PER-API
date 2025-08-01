const express = require('express');
const app = express();

const db = require('./queries');
const PORT = 9001;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hellooo from the server!');
});

app.get('/test', (req, res) => {
    res.send('Test route works!');
});


app.get('/links', db.getLinks);



app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`);
});
