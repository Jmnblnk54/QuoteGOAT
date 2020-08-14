$(document).ready(function () {
  $("#newUserSubmit").on("click", function (event) {
    event.preventDefault();

    let newUser = {
      username: $("#newUserName").val().trim(),
      fullname: $("#fullName").val().trim(),
      email: $("#newEmail").val().trim(),
      password: $("#newPassword").val().trim(),
    };
    console.log(newUser);

    $.post("/api/users", newUser).then(function){

    }
  });

  $("#UserSubmit").on("click", function (event) {
    event.preventDefault();

    let User = {
      username: $("#userName").val().trim(),
      password: $("#password").val().trim(),
    };
    console.log(User);

    $.post("/api/users", newUser).then(function){
    }
  });
});
