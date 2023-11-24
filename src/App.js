import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/product";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Layout from "./component/layout/Layout";

function App() {
  return (


    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route exact path="/" element={<Login/>}/>
      </Route>
      <Route element={<PrivateRoutes/>}>
        <Route element={<Layout/>}>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
        </Route>
      </Route>
    </Routes>


  );
}

export default App;
