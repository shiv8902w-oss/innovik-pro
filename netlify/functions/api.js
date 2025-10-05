const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const router = express.Router();

// Set the view engine and views directory
// Note: The path is relative to the function's location
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// --- Your Routes ---
router.get('/', (req, res) => {
    res.render('frontpage');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/adminhomepage', (req, res) => {
    res.render('adminhomepage');
});

router.get('/userhomepage', (req, res) => {
    res.render('userhomepage');
});

router.get('/product', (req, res) => {
    res.render('product');
});

router.get('/inventorymanagement', (req, res) => {
    res.render('inventorymanagement');
});

// Corrected route for customermanager
router.get('/customermanager', (req, res) => {
    res.render('customermanager');
});

router.get('/analyticaldashboard', (req, res) => {
    res.render('analyticaldashboard');
});

// Corrected route for governmentschemes
router.get('/governmentschemes', (req, res) => {
    res.render('governmentschemes');
});

router.get('/settings', (req, res) => {
    res.render('settings');
});

router.get('/loginuser', (req, res) => {
    res.render('loginuser');
});

router.get('/loginadmin', (req, res) => {
    res.render('loginadmin');
});

// Corrected route for signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/billingpage', (req, res) => {
    res.render('billingpage');
});

router.get('/cloths', (req, res) => {
    res.render('cloths');
});

router.get('/cloth', (req, res) => {
    res.render('cloth');
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.get('/jewelry', (req, res) => {
    res.render('jewelry');
});

// --- End of Routes ---

// All routes will be prefixed with /.netlify/functions/api
app.use('/', router);

// Export the handler for Netlify

module.exports.handler = serverless(app);
