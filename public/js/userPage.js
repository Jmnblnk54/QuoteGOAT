$(document).ready(function () {
  $.get("/api/categories").then(categories=>{
    $.each(categories, function(val, text){
      $("#categoryOptions").append(
        $("<option></option>").val(val).text(text.categoryName).attr("id", text.categoryId)
      );
    });
    $.each(categories, function(val, text){
      $("#categoryDropdown").append(
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

  $("#searchFilterBtn").on("click", function(event){
    event.preventDefault();
    $("#searchQuotes").empty();
    //get the user input
    const category = $("#categoryDropdown option:selected").attr("id");
    const orderby = $("#orderByDropdown").val().trim();

    //ping our routes to get the data
    $.get("/api/searchBy/"+category+"/"+orderby)
      .then(
        quotes=>{
          $.each(quotes, function(val, text){
            $("#searchQuotes").append(
              $("<li></li>").text(text.quote)
            );
          });
        },
        //clear hidden visibility
        $("#searchDiv").css("visibility", "visible")
      );
  });


  //Logout functionality
  $("#logOut").on("click", function(event) {
    event.preventDefault();
    app.get("", function(req, res){
      req.logout();
      res.redirect("/");
    });
  });
});
