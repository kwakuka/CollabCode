
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/*Sign In */
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
    var ref = new Firebase('https://chatforcollabcode.firebaseio.com/');
      //this is the sign in function
      function signInFunction() {
            if ($("login-username").val()==""){
                $("login-wrong").val("Fill in all of the fields");
                console.log($("login-wrong").val());

            }
            if ($("login-password").val()==""){
                $("login-wrong").val("Fill in all of the fields");
            }
            else
            {
                var login_email = $('#login-username').val();
                var login_password = $('#login-password').val();
                ref.authWithPassword({
                  email    : login_email,
                  password : login_password//this inputs the varibles that we saved above in order to check it on the server
                }, function(error, authData) 
                {
                  if (error) {
                    //reload the page withew$
                    $('login-wrong').val("Wrong password or username");
                    console.log("Login Failed!", error);
                  } else {
                    console.log("Authenticated successfully with payload:", authData);
                    //make it load into home.html
                    }
                });
              }
            }

      document.getElementById("btn-login").onclick = function() {signInFunction()};
      $('#login-password','#login-username').keypress(function (e) {
        if (e.keyCode == 13) {
          signInFunction(); 
        }
      });

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/*Sign Up */
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
      var ref = new Firebase('https://chatforcollabcode.firebaseio.com/');
      //sign up function
      function signUpFunction() {
         if ($("singup-email")==""){
            $("signup-wrong").val("Fill in all of the fields");
            console.log($("signup-wrong").val)

        }
        if ($("signup-password")==""){
            $("signup-wrong").val("Fill in all of the fields");
        }
        else
        {
          ref.createUser({
            email    : "bobtony@firebase.com",
            password : "correcthorsebatterystaple"
            name: signup-lastname , signup-firstname
          }, 

          function(error, userData) {
            if (error) {
              //reload the page withew$
              $('signup-wrong').val("Wrong password or username");
              console.log("Error creating user:", error);
            } else {
              console.log("Successfully created user account with uid:", userData.uid);
            }
          });
        }
      document.getElementById("btn-signup").onclick = function() {signUpFunction()};
      $('#signup-password','#signup-username').keypress(function (e) {
        if (e.keyCode == 13) {
          signUpFunction(); 
        }
      });