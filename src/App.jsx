import "./App.css";
import { Home } from "./pages/home/Home";
import { SignIn } from "./pages/signIn/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
