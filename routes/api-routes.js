/* eslint-disable no-unused-vars */
const db = require("../models");
const sequelize = require("sequelize");
const { Sequelize } = require("../models");
const passport = require("../config/passport");


module.exports = function (app) {
  // eslint-disable-next-line no-unused-vars
  app.get("/api/top_quotes", function (req, res) {
    db.Vote.findAll({
      limit: 10,
      order: [["numberOfVotes", "DESC"]],
      include:[{
        model: db.Quote,
        attributes:["quote"]
      },{
        model: db.Category,
        attributes:["categoryName"]
      }]

    }).then(function (dbVote) {
      res.json(dbVote);
    });
  });

  //Route to get a random quote
  app.get("/api/random_quote", function (req, res) {
    db.Quote.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1
    }).then(function (dbQuote) {
      res.json(dbQuote);
    });
  });

  // Route to get all quotes
  app.get("/api/quotes", function (req, res) {
    db.Quote.findAll({}).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all posts from user
  app.get("/api/quotes/:user", function (req, res) {
    db.Quote.findAll({
      where: {userID: req.params.user},
      include: [{
        model:db.User,
        attributes:["userName"]
      }]
    }).then(function (dbQuotes) {
      res.json(dbQuotes);
      console.log("Here is a list of all quotes:", dbQuotes);
    });
  });

  // Route to get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
      console.log("Here is a list of all users:", dbUser);
    });
  });

  // Route to get all categories
  app.get("/api/categories", function (req, res) {
    db.Category.findAll({}).then(function (dbCategories) {
      res.json(dbCategories);
      console.log("Here is a list of all categories:", dbCategories);
    });
  });

  //Route to get top categories
  app.get("/api/top_categories", function (req, res) {
    db.Vote.findAll({
      limit: 10,
      order: [["numberOfVotes", "DESC"]],
      include: [{
        model: db.Category,
        attributes: ["categoryName"]
      }]
    }).then(function (dbCategory) {
      res.json(dbCategory);
    });
  });

  // Route to Post a new quote
  app.post("/api/quotes", function(req, res) {
    console.log("Request body is: ", req.body);
    db.Quote.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbQuote) {
      res.json(dbQuote);
    });
  });

  app.get("/api/user_data", function(req, res){
    if(!req.user){
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        userName: req.user.userName,
        fullName: req.user.fullName,
        userId: req.user.userId
      });
    }
  });

  app.post("/api/signup", function(req, res) {
    console.log("Request body is: ", req.body);
    db.User.create({
      userName: req.body.userName,
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err){
        console.log(err);
      });
  });

  app.post("/api/login", passport.authenticate("local",{ successRedirect: "/user"}), function(req, res){
    console.log("made it /api/login in api-routes");
    res.json(req.user);
  });

  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });
  // Delete route for deleting quotes
  // app.delete("/api/quotes/:id", function (req, res) {});

  // PUT route for updating todos. We can get the updated todo from req.body
  // app.put("/api/quotes", function (req, res) {});




};

