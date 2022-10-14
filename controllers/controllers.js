const Contact = require('../models/Contact');

const index = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
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
    console.log("Contact message called");
    const { name, email, phone, message } = req.body;
    await Contact.create({
        name, email, phone, message
    });
    console.log("Contact message saved");
}

module.exports = { index, about, contact, post, sendContact };