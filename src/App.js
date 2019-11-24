import React, { useState } from "react";
import GoogleAuthButton from "./GoogleAuthButton";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [sheetId, setSheetId] = useState(null);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">Movie Night</div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <GoogleAuthButton
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  onLogin={() => {
                    setAuthenticated(true);
                  }}
                  onLogout={() => {
                    setAuthenticated(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        {authenticated && (
          <>
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Google Sheets Id"
                />
              </div>
              <div className="control">
                <button className="button">Load</button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default App;
