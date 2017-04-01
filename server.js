const express = require('express');

var app = express();

// absolute path to the folder 
// __dirname = stores path to  server folder

//set the root path for static documents.
app.use(express.static(__dirname + '/public'));

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
