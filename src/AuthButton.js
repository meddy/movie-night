import React from "react";

export default function AuthButton(props) {
  const { isSignedIn } = props;
  if (isSignedIn) {
    return (
      <button
        className="button"
        onClick={() => {
          window.gapi.auth2.getAuthInstance().signOut();
        }}
      >
        Sign Out
      </button>
    );
  }

  return (
    <button
      className="button"
      onClick={() => {
        window.gapi.auth2.getAuthInstance().signIn();
      }}
    >
      Sign In
    </button>
  );
}
