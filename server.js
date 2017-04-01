const express = require('express');
const hbs = require('hbs');

var app = express();

    // it is how to enable htb with express 
    // for templates - default dir views = time to create
    // file must have extentions  hbs
    // to rendr file using view engine 
    //  --- response.render('about.hbs || file_name');
app.set('view engine', 'hbs');

    // absolute path to the folder 
    // __dirname = stores path to  server folder

    //set the root path for static documents.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('Hello Express!');
    /*
        res.send({
            name: 'Roman',
            likes: [
                'Sea'
            ]
        });
    */
    res.render('w.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hi, live is really great'
    });
});

app.get('/about',(req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    }); 
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fullfill the page'
    });
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
