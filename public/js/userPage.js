$(document).ready(function () {
  $.get("/api/categories").then(categories=>{
    $.each(categories, function(val, text){
      $("#categoryOptions").append(
        $("<option></option>").val(val).text(text.categoryName).attr("id", text.categoryId)
      );
    });
  });

  $("#submitQuoteBtn").on("click", function (event) {
    event.preventDefault();

    $.get("/api/user_data").then(user=>{
      let newQuote = {
        quote: $("#textBoxFormatting").val().trim(),
        categoryId: $("#categoryOptions option:selected").attr("id"),
        userId: user.userId,
        UserUserId: user.userId,
      };

      $.post("/api/quotes", newQuote).then(location.reload());

    });


    //$.post("/api/quotes", newQuote).then(function () {});
  });


  //Logout functionality
  $("#logOut").on("submit", function(event) {
    event.preventDefault();
    app.get("", function(req, res){
      req.logout();
      res.redirect("/");
    });
  });
});
