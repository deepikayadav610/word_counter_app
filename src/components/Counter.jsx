import { useState } from "react";

function Counter() {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="counter">
      <textarea
        className="textarea"
        placeholder="Type or paste your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="actions">
        <button
          className="clear-btn"
          onClick={() => setText("")}
          disabled={text === ""}
        >
          Clear
        </button>
      </div>

      <div className="stats">
        <div className="stat-box stat-char">
          <span className="icon">Aa</span>
          <span>Character: {characterCount}</span>
        </div>
        <div className="stat-box stat-word">
          <span className="icon">¶</span>
          <span>Word: {wordCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;
