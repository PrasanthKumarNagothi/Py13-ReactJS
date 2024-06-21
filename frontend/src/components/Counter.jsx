import React, { useState, useEffect } from "react";
import Database from "./Database";

function Counter() {
  const [res, setRes] = useState(0)
  useEffect(() => {
    setRes(Database())
  }, [res])
  
  const [count, setCount] = useState(5);
  function increseCount() {
    setCount(count + 1);
  }
  function decreseCount() {
    setCount(count - 1);
  }
  return (
    <div>
      {res} <br />
      <button onClick={decreseCount}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
    </div>
  );
}

export default Counter;
