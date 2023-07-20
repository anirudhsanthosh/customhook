import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCustomState } from "./useCustomState";

function App() {
    const [count, setCount] = useState(0);

    // custom hook
    const { setters, values } = useCustomState();

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input placeholder="state1" onChange={(e) => setters.setState1(e.target.value)} />
                <input placeholder="state1" onChange={(e) => setters.setState2(e.target.value)} />
                <input placeholder="state1" onChange={(e) => setters.setState3(e.target.value)} />
                <input placeholder="state1" onChange={(e) => setters.setState4(e.target.value)} />
                <input placeholder="state1" onChange={(e) => setters.setState5(e.target.value)} />
                <input placeholder="state1" onChange={(e) => setters.setState6(e.target.value)} />
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>

                <pre>{JSON.stringify(values, null, 4)}</pre>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
