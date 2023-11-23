import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/product";

function App() {
  return (

     <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route exact path="/home" element={<Home/>}/>
       <Route exact path="/product/:id" element={<Product/>}/>

     </Routes>


  );
}

export default App;
