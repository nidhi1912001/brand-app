import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
   // <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route exact path="/home" element={<Home/>}/>
       {/*<Route exact path="/home/:category/"*/}
     </Routes>
    // </BrowserRouter>

  );
}

export default App;
