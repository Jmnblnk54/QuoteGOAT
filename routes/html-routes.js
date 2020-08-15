const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req,res){
    if(req.user){
      res.redirect("/user");
    }
    res.render("login");
  });

  app.get("/user", isAuthenticated, function(req,res){
    res.render("userPage");
  });

  app.get("/public/css/style.css", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/public/js/login.js", function(req,res){
    res.sendFile(path.join(__dirname, "../public/js/login.js"));
  });

};
