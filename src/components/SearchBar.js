import React, { useState } from "react";

export default ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="control">
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <label className="label">Image Search</label>
          <input
            type="text"
            className="input is-success"
            onChange={onInputChange}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};
