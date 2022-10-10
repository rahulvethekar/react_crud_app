import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Registration from "./components/Registration";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Nav/>
            <section>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/addproduct" element={<AddProduct/>}/>
                    <Route path="/editproduct/:id" element={<EditProduct/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/reg" element={<Registration/>}/>

                    
                </Routes>
            </section>

  
      </Router>

    </>
  );
}

export default App;
