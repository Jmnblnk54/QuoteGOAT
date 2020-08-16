//Render top ten quotes to user
$("#renderTopTen").on("submit", function(event) {
  event.preventDefault();

  let topQuotes = {
    
  };

  //Send get request
  $.ajax("/api/top_quotes", {
    type: "GET",
    data: topQuotes
  }).then(
    function() {
      console.log("Top ten quotes are "+ topQuotes);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

//Logout functionality
$("#logOut").on("submit", function(event) {
  event.preventDefault();
  app.get("", function(req, res){
    req.logout();
    res.redirect("/");
  });
});