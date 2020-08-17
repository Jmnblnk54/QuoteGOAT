const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models", "../public/js/userPages.js");

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

async function getTopQuotes(req, res, next){
  const quotes = await db.Vote.findAll({
    limit: 10,
    order: [["numberOfVotes", "DESC"]],
    include: [{
      model: db.Category,
      attributes:["categoryName"]
    },{
      model: db.Quote,

      include: [{
        model:db.User,
        attributes: ["userName"]
      }]

    }]
  });
  //   formatedQuotes = quotes.map( quoteInfo => {
  //     return {quote:quoteInfo.dataValues.quote, name: quoteInfo.dataValues.User.userName};
  //   });
  formatedQuotes = quotes.map( quoteInfo => {
    return {
      quote:quoteInfo.dataValues.Quote.dataValues.quote,
      userName: quoteInfo.dataValues.Quote.User.dataValues.userName
    };
  });
  res.topQuotes = formatedQuotes;
  console.log(formatedQuotes);
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

  app.get("/user", isAuthenticated, getTopQuotes, getUserQuotes, function(req,res){
    console.log(res.topQuotes);
    res.render("userPage", {
      style: "userPage.css",
      jsFile: "userPage.js",
      quotes: res.topQuotes,
      userQuotes: res.userQuotes
    });
  });


};
