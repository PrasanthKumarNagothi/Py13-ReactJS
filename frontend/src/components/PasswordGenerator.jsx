import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumbersAllowed, setNumbersAllowed] = useState(false);
  const [isSpecialCharsAllowed, setSpecialCharsAllowed] = useState(false);

  const generatePassword = () => {
    let passchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (isNumbersAllowed) passchars += "0123456789";
    if (isSpecialCharsAllowed) passchars += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      pass += passchars[Math.floor(Math.random() * passchars.length)];
    }

    setPassword(pass);
  };
  useEffect(() => {
    generatePassword();
  }, [isNumbersAllowed, isSpecialCharsAllowed, length]);

  return (
    <div className="mt-5">
      <div className="card w-75 mx-auto px-2 py-4">
        <h1 className="text-center">Password Generator</h1>
        <div className="card-body px-3 py-2">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              value={password}
              readOnly
            />
            <button className="btn btn-danger">Copy</button>
          </div>

          <div className="d-flex align-items-center gap-3">
            <input
              type="range"
              min={4}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span>Length: {length}</span>
            <div className="form-check">
              <input
                id="numbersAllowed"
                type="checkbox"
                className="form-check-input"
                defaultChecked={isNumbersAllowed}
                onChange={() => setNumbersAllowed((prev) => !prev)}
              />
              <label htmlFor="numbersAllowed">Numbers</label>
            </div>
            <div className="form-check">
              <input
                id="specialCharsAllowed"
                type="checkbox"
                className="form-check-input"
                defaultChecked={isSpecialCharsAllowed}
                onChange={() => setSpecialCharsAllowed((prev) => !prev)}
              />
              <label htmlFor="specialCharsAllowed">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
