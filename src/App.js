import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GoogleAuthButton
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onLogin={response => {
          console.log(response);
        }}
        onLogout={() => {
          console.log("logout");
        }}
      />
    </div>
  );
}

export default App;
