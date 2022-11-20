// import logo from "./logo.svg"; 
import "./App.css";
// import HomeScreen from "./component/HomeScreen";
import Login from "./component/Login";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      {/* <Error /> */}
      {/* <Router>
        <Routes>
      <HomeScreen />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
