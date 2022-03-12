import React, { usestate } from "react";
import "./Dictionary.ess";

export default function Dictionary() {
  let [keyword, setKeyword] = usestate("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onsubmit={search}>
        <input type="search" onchange={handleKeywordChange} />
      </form>
    </div>
  );
}
