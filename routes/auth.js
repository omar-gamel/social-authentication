const router = require('express').Router();
const passport = require('passport');


router.get('/auth/login', (req, res) => {
    res.render('login', { user: req.user });
});

router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Google Routes
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

// Facebook Routes
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

// Instagram Routes
router.get('/auth/instagram', passport.authenticate('instagram'));
router.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

// Twitter Routes
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

// Github Routes
router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res)  => {
    res.redirect('/profile');
});

module.exports = router;
