import React, { useState } from 'react'

function Fblink() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
  
    const handleLogin = async () => {
      window.FB.login(
        async (response) => {
          if (response.authResponse) {
            setIsLoggedIn(true);
            setAccessToken(response.authResponse.accessToken);
          }
        },
        { scope: "publish_actions" }
      );
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <p>Access Token: {accessToken}</p>
        ) : (
          <button onClick={handleLogin}>Login with Facebook</button>
        )}
      </div>
    );
  };

export default Fblink