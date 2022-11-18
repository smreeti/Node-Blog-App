const Contact = require('../models/Contact');
const path = require('path');

const index = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);

    res.render('index');
};

const about = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
};

const contact = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
};

const post = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post');
};

const sendContact = async (req, res) => {
    const { name, email, phone, message } = req.body;
    let image = req.files.image;

    image.mv(path.resolve(__dirname, 'public/assets/img', image.name), async (error) => {
        await Contact.create({
            name, email, phone, message,
            image: '/img/' + image.name
        });
        console.log("Contact message saved");
        res.render('contact');
    });
};

const users = async (req, res) => {
    const userDetails = await Contact.find({});
    res.render('users', { userDetails });
}

module.exports = { index, about, contact, post, sendContact, users };