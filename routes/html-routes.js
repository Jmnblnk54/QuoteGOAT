module.exports = function(app){
  app.get("/", function(req,res){
    res.render("login");
  });
  app.get("/user", function(req,res){
    res.render("userPage");
  });
};
