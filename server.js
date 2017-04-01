const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.send('Hello Express!');
    res.send({
        name: 'Roman',
        likes: [
            'Sea'
        ]
    });
});

app.get('/about',(req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fullfill the page'
    });
});
app.listen(3000);
