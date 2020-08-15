$(document).ready(function() {

  function loginUser(username, password) {
    console.log("Made it to loginUser in login.js");
    $.post("/api/login", {
      userName:username,
      password:password
    })
      .then(function(){
        window.location.replace("/user");
      })
      .catch(err =>{
        console.log(err);
      });
  }

  function signUpUser(username, fullname, email, password){
    console.log("made it to User Sign up function in login.js");
    $.post("/api/signup", {
      userName: username,
      fullName: fullname,
      email: email,
      password: password
    })
      // eslint-disable-next-line no-unused-vars
      .then(function(data){
        window.location.replace("/user");
      })
      .catch(function(err){
        console.log(err);
      });
  }

  $("#newUserSubmit").on("click", function (event) {
    event.preventDefault();
    console.log("new user submit fired");

    let newUser = {
      username: $("#newUserName").val().trim(),
      fullname: $("#fullName").val().trim(),
      email: $("#newEmail").val().trim(),
      password: $("#newPassword").val().trim(),
    };
    console.log("New User Data: ", newUser);

    if(!newUser.username || !newUser.fullname || !newUser.email || !newUser.password){
      return;
    }

    signUpUser(newUser.username, newUser.fullname, newUser.email, newUser.password);
    $("#newUserName").val("");
    $("#fullName").val("");
    $("#newEmail").val("");
    $("#newPassword").val("");
    // $.post("/api/users", newUser).then(function){

    // }
  });

  $("#userSubmit").on("click", function (event) {
    event.preventDefault();
    console.log("event listener for userSubmit fired");
    let user = {
      username: $("#userName").val().trim(),
      password: $("#password").val().trim(),
    };
    console.log(user);

    if(!user.username || !user.password){
      return;
    }

    loginUser(user.username, user.password);
    $("#userName").val("");
    $("#password").val("");

  });


});
