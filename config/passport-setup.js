const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;

const User = require('../models/user');
const config = require('./keys');

// serialize and deserialize
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// Facebook Config
passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL
    },
    async function (accessToken, refreshToken, profile, done) {
        try {
            const currentUser = await User.findOne({
                oauthID: profile.id
            });
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                })
                const newUser = await user.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error);
        }
    }
));

// Google Config
passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL
    },
    async function (accessToken, refreshToken, profile, done) {
        try {
            const currentUser = await User.findOne({
                oauthID: profile.id
            });
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                })
                const newUser = await user.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error);
        }
    }
));

// Twitter Config
passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: config.twitter.callbackURL
    },
    async function (accessToken, refreshToken, profile, done) {
        try {
            const currentUser = await User.findOne({
                oauthID: profile.id
            });
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                })
                const newUser = await user.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error);
        }
    }
));

// Github Config
passport.use(new GithubStrategy({
        clientID: config.github.clientID,
        clientSecret: config.github.clientSecret,
        callbackURL: config.github.callbackURL
    },
    async function (accessToken, refreshToken, profile, done) {
        try {
            const currentUser = await User.findOne({
                oauthID: profile.id
            });
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                })
                const newUser = await user.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error);
        }
    }
));

// Instagram Config
passport.use(new InstagramStrategy({
        clientID: config.instagram.clientID,
        clientSecret: config.instagram.clientSecret,
        callbackURL: config.instagram.callbackURL
    },
    async function (accessToken, refreshToken, profile, done) {
        try {
            const currentUser = await User.findOne({
                oauthID: profile.id
            });
            if (currentUser) {
                done(null, currentUser);
            } else {
                const user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                })
                const newUser = await user.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error);
        }
    }
));