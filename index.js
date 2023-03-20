const express = require('express')
const path = require('path')
const port = 8000

const db = require('./config/mongoose')
const Contact = require('./models/contact')
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded())
app.use(express.static('assets'))

var myContacts = [
    {
        name : "Ayush",
        phone : "123"
    },
    {
        name : "John",
        phone : "12333646"
    }
]

app.get('/my-contacts', (req, res) => {
    Contact.find({}, (err , contacts) => {
        if(err){
            console.log("Error fetching Contacts from DB");
            return;
        }
        res.render('my-contacts', {
            title : 'App | Contacts',
            myContacts : contacts
        })
    })
})

app.post('/create-contact', (req, res) => {
    // myContacts.push(req.body)
    Contact.create({
        name : req.body.name,
        phone : req.body.phone
    }, (err, newContact) => {
        if(err){
            console.log("Error in creating a contact");
            return;
        }
        console.log("*******", newContact);
        return res.redirect('back');
    })

})

app.get('/delete-contact/', (req, res) => {
    let id = req.query.id;
    console.log(id)
    Contact.findByIdAndDelete(id, (err) => {
        if(err){
            console.log("Error in deleting a contact");
            return;
        }
        return res.redirect('back');
    })
    // let index = myContacts.findIndex(i => i.phone == req.query.phone);
    // myContacts.splice(index, 1);
    // // myContacts.splice(req.query.id, 1)
    // return res.redirect('/my-contacts');
})
app.get('/', (req, res) => {
    return res.render('home' , {
        title: 'HOME',
    })
})

app.get('/practice', (req, res) => {
    return res.render('practice' , {
        title: 'Pracrice EJS'
    })
})

app.listen(port , (err) => {
    if(err){
        console.log(err)
    }
    console.log('listening on port ' + port)
});