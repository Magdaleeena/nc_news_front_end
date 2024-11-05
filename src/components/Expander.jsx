import { useState } from "react";

export default function Expander(props) {
  const { children, contentType } = props;
  const [isShowing, setIsShowing] = useState(true);

  function toggleContent() {
    setIsShowing((currIsShowing) => {
      return !currIsShowing
    })
  }

  return (
    <>
      <button onClick={toggleContent} className="toggle-button">
        {isShowing ? "Hide results" : "Show results"} {contentType}
      </button>
      {isShowing && children}
    </>
  );
}