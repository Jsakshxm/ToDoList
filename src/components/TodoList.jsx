import React, { useState } from "react";

export default function TodoList(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function toggleLine() {
    setIsCompleted(!isCompleted);
  }

  const lineStyle = {
    textDecoration: isCompleted ? "line-through" : "none"
  };

  return (
    <li onClick={toggleLine} style={lineStyle}>
      {props.text}
    </li>
  );
}
