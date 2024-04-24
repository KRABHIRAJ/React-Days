import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberRequired, setNumberRequired] = useState(false);
  const [charRequired, setCharRequired] = useState(false);
  const passRef = useRef(null);


  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    numberRequired ? (str += "0123456789") : "";
    charRequired ? (str += "~!@#$%^&*()_+-={}[]|;,./<>?") : "";
    let tempPass = "";
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      tempPass += str[index];
    }
    setPassword(tempPass);
  }, [length, numberRequired, charRequired]);

  const copyPassword = () => {
    passRef?.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    generatePassword();
  }, [length, numberRequired, charRequired]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          ref={passRef}
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberRequired}
            onChange={() => setNumberRequired((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charRequired}
            onChange={() => setCharRequired((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
