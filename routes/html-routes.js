const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

async function getUserQuotes(req, res, next){
  const quotes = [];
  const userquotes = await db.Quote.findAll({
    where: {userID: req.user.userId},
    include: [{
      model:db.User,
      attributes:["userName"]
    }]
  });

  userquotes.forEach( quoteInfo => {
    quotes.push({quote:quoteInfo.dataValues.quote});
  });
  res.userQuotes = quotes;
  next();
}

module.exports = function(app) {

  app.get("/", function(req,res){
    if(req.user){
      res.redirect("/user");
    }
    res.render("login", {
      style: "style.css",
      jsFile: "login.js"
    });
  });

  app.get("/user", isAuthenticated, getUserQuotes, function(req,res){
    res.render("userPage", {
      style: "userPage.css",
      jsFile: "userPage.js",
      userQuote: res.userQuotes
    });
  });


};
