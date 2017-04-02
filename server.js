const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
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

    //middleware = add some functionality to express.
    // -- next() - to show that middleware is done.
    //             если не будет next - infinity load.
app.use((req, res, next) => {

    var now = new Date().toString();
    var log  = `${now}: ${req.method} ${req.url}`;

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    console.log(log);

    next();
});

// ex = p5l6 - middleware
app.use((req, res, next) => {
    res.render('mid.hbs', {
        text: 'Updating ...' 
    });
});

    // static data - for cach to calc in ope place use in many
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

    // function with param = {{> screamIt Some message}}
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

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
