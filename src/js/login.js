      var oktaConfig = {
<<<<<<< Updated upstream
        issuer: "https://dev-83242155.okta.com/oauth2/default",
        redirectUri: "http://localhost:3000",
        clientId: "0oab30deqekOQM9eB5d7"
=======
        issuer: "https://dev-77563048.okta.com/oauth2/default",
        redirectUri: 'http://localhost:3000',
        clientId: "0oab2bnt5yBYqtSdo5d7"
>>>>>>> Stashed changes
      }
      // Search for URL Parameters to see if a user is being routed to the application to recover password
      var searchParams = new URL(window.location.href).searchParams;
      oktaConfig.otp = searchParams.get('otp');
      oktaConfig.state = searchParams.get('state');

     const oktaSignIn = new OktaSignIn(oktaConfig);

      oktaSignIn.authClient.token.getUserInfo().then(function(user) {
        document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are *still* logged in! :)";
        document.getElementById("logout").style.display = 'block';
      }, function(error) {
        oktaSignIn.showSignInToGetTokens({
          el: '#okta-login-container'
        }).then(function(tokens) {
          oktaSignIn.authClient.tokenManager.setTokens(tokens);
          oktaSignIn.remove();

          const idToken = tokens.idToken;
          document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
          document.getElementById("logout").style.display = 'block';

        }).catch(function(err) {
          console.error(err);
        });
      });

      function logout() {
        oktaSignIn.authClient.signOut();
        location.reload();
      }