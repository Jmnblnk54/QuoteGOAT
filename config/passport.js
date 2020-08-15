const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField:"userName"
  },
  function(username, password, done){
    console.log("in beginning of passport.js");
    db.User.findOne({
      where: {
        userName:username
      }
    }).then(function(dbUser){
      console.log("this is db user:", dbUser);
      if(!dbUser) {
        console.log("Does not exist", dbUser);
        return done(null, false, {
          message:"Incorrect Username"
        });
      } else if(!dbUser.validPassword(password)){
        console.log("Does not wrong password", dbUser);
        return done (null, false, {
          message: "Incorrect Password"
        });
      }

      return done(null, dbUser);
    });
  }
));


passport.serializeUser(function(user, cb){
  cb(null, user);
});

passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});

module.exports = passport;