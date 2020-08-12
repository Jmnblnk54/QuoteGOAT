const path = require("path");

module.exports = function(app) {

  app.get("/", function(req,res){
    res.render("login");
  });
  app.get("/user", function(req,res){
    res.render("userPage");
  });

  app.get("/public/css/style.css", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

};
