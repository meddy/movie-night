import React, { useState } from "react";

export default function SpreadSheetInput(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Google Sheets Id"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
      </div>
      <div className="control">
        <button
          className="button"
          onClick={() => {
            onSubmit(value);
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
}
