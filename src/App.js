import React, { useEffect, useState } from "react";
import SpreadSheetInput from "./SpreadSheetInput";
import AuthButton from "./AuthButton";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4"
          ],
          scope: "https://www.googleapis.com/auth/spreadsheets"
        })
        .then(
          function() {
            window.gapi.auth2
              .getAuthInstance()
              .isSignedIn.listen(setIsSignedIn);

            setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          },
          function(error) {
            console.error(error);
          }
        );
    });
  }, []);

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
                <AuthButton isSignedIn={isSignedIn} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        {isSignedIn && (
          <SpreadSheetInput
            onSubmit={spreadsheetId => {
              console.log(spreadsheetId);
              window.gapi.client.sheets.spreadsheets.values
                .get({
                  spreadsheetId,
                  range: "Sheet1!A1:D5"
                })
                .then(
                  response => console.log(response),
                  error => console.log(error)
                );
            }}
          />
        )}
      </section>
    </>
  );
}

export default App;
