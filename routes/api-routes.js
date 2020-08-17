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
    });
  });

  // Route to get all posts from user
  app.get("/api/user_quotes", function (req, res) {
    db.Quote.findAll({
      where: {userID: req.user.userId},
      include: [{
        model:db.User,
        attributes:["userName"]
      }]
    }).then(function (dbQuotes) {
      res.json(dbQuotes);
    });
  });

  // Route to get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Route to get all categories
  app.get("/api/categories", function (req, res) {
    db.Category.findAll({}).then(function (dbCategories) {
      res.json(dbCategories);
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
    db.Quote.create({
      categoryId: req.body.categoryId,
      userId: req.body.userId,
      quote:req.body.quote,
      UserUserId:req.body.userId,
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
    res.json(req.user);
  });

  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });

  app.get("/api/searchBy/:categoryId/:orderby", function(req, res){

    const categoryId = req.params.categoryId;
    const orderBy = req.params.orderby;

    // eslint-disable-next-line default-case
    switch(orderBy){
    case "ASC":
      db.Quote.findAll({
        where: {categoryId: categoryId},
        include: [{
          model:db.User,
          attributes:["userName"]
        }],
        order:[["quote", "ASC"]]
      }).then(function (dbQuotes) {
        res.json(dbQuotes);
      }).catch((err)=>{
        console.log(err);
      });
      break;
    case "createdAt":
      db.Quote.findAll({
        where: {categoryId: categoryId},
        order:[["createdAt", "ASC"]],
        include:[{
          model:db.User,
          attributes:["userName"]
        }]
      }).then(function(dbQuotes){
        res.json(dbQuotes);
      }).catch((err)=>{
        console.log(err);
      });
      break;
    }
  });

  // Delete route for deleting quotes
  // app.delete("/api/quotes/:id", function (req, res) {});

  // PUT route for updating todos. We can get the updated todo from req.body
  // app.put("/api/quotes", function (req, res) {});

};

