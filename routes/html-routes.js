const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

async function getUserQuotes(req, res, next){
  const quotes = [];
  const userQuotes = await db.Quote.findAll({
    where: {userID: req.user.userId},
    include: [{
      model:db.User,
      attributes:["userName"]
    }]
  });
  userQuotes.forEach( quoteInfo => {
    quotes.push({quote:quoteInfo.dataValues.quote});
  });
  res.userQuotes = quotes;
  next();
}

async function getSomeQuotes(req, res, next){
  const quotes = await db.Quote.findAll({
    limit: 10,
    order: [["numberOfVotes", "DESC"]],
    include: [{
      model:db.User,
      attributes:["userName"]
    }]
  });
  formatedQuotes = quotes.map( quoteInfo => {
    return {quote:quoteInfo.dataValues.quote, name: quoteInfo.dataValues.User.userName};
  });
  res.someQuotes = formatedQuotes;
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

  app.get("/user", isAuthenticated, getSomeQuotes, getUserQuotes, function(req,res){
    res.render("userPage", {
      style: "userPage.css",
      jsFile: "userPage.js",
      quotes: res.someQuotes,
      userQuotes: res.userQuotes
    });
  });


};
