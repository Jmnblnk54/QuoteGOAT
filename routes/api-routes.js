const db = require("../models");

module.exports= function(app){
  // eslint-disable-next-line no-unused-vars
  app.get("/api/top_quotes", function(req,res){
    db.Vote.findAll({
      limit: 10,
      order:[["numberOfVotes", "DESC"]]
    }).then(function(dbVote){
      res.json(dbVote);
    });
  });

  //   app.get("/api/top_categories", function(req,res){

  //   });

  app.get("/api/random_quote", function(req,res){
    Quote.find({
      order: [
        Sequelize.fn( "RAND" ),
      ]
    }).then(function(dbQuote){
      res.json(dbQuote);
    });
  });

};


// SELECT * FROM TableA A INNER JOIN TableB B ON A.key = B.key

// SELECT OrderNumber, TotalAmount, FirstName, LastName, City, Country
//   FROM [quotes] JOIN Customer
//     ON [quotes].CustomerId = Customer.Id