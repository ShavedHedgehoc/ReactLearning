import React, { useState } from "react";

const SearchForm = function () {
  const [searchValue, setSearchValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  function submitClick() {
    setResultValue(searchValue);
  }

  function clearClick() {
    setResultValue("");
    setSearchValue("");
  }
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <button onClick={submitClick}>On</button>
      <button onClick={clearClick}>Off</button>

      <h1>{resultValue}</h1>
    </div>
  );
};

export default SearchForm;
