import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function GoogleAuthButton(props) {
  const { clientId, onLogin, onLogout } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // Wait a bit for gpapi auth check.
  // This prevents the login button briefly showing when the auth check for the
  // user comes back that they are already logged in.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisabled(false);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {!isLoggedIn && (
        <GoogleLogin
          clientId={clientId}
          buttonText={disabled ? "..." : "Login"}
          disabled={disabled}
          isSignedIn
          discoveryDocs={[
            "https://sheets.googleapis.com/$discovery/rest?version=v4"
          ]}
          scopes={["https://www.googleapis.com/auth/spreadsheets"]}
          onFailure={() => {}}
          onSuccess={response => {
            setIsLoggedIn(true);
            onLogin(response);
          }}
        />
      )}
      {isLoggedIn && (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={() => {
            setIsLoggedIn(false);
            onLogout();
          }}
        />
      )}
    </>
  );
}
