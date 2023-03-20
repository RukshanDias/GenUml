import "./App.css";
import { useState } from "react";
import Signin from "./pages/SignIn/SignIn.js";
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup/Signup";
import UserInput from "./pages/UserInput/UserInput";
import Download from "./pages/Download/Download";
import Edit from "./pages/Edit/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiagramMarkdownContext from "./context/DiagramMarkdownContext";

function App() {
    const [responseData, setResponseData] = useState(null);
    return (
        <div className="App">
            <DiagramMarkdownContext.Provider value={{ responseData, setResponseData }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sign-in" element={<Signin />} />
                        <Route path="/sign-up" element={<Signup />} />
                        <Route path="/userRequirment" element={<UserInput />} />
                        <Route path="/download" element={<Download />} />
                        <Route path="/edit" element={<Edit />} />
                    </Routes>
                </Router>
            </DiagramMarkdownContext.Provider>
        </div>
    );
}

export default App;
