import React from "react";
import Nav from "./Nav.jsx";
import Index from "./Index.jsx";
import Aboutowner from "./Aboutowner.jsx";
import Aboutdesigner from "./Aboutdesigner.jsx";
import Aboutambassador from "./Aboutambassador.jsx";
import Prewedding from "./Prewedding.jsx";
import Maternity from "./Maternity.jsx";
import Other from "./Other.jsx";
import Kids from "./Kids.jsx";
import Contactus from "./Contactus.jsx";
import Footer from "./Footer.jsx";
import "./style.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 
export default function Main(){
    return(
        <>
        <Router>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/aboutowner" element={<Aboutowner></Aboutowner>}></Route>
                <Route path="/aboutdesigner" element={<Aboutdesigner></Aboutdesigner>}></Route>
                <Route path="/aboutambassador" element={<Aboutambassador></Aboutambassador>}></Route>
                <Route path="/prewedding" element={<Prewedding></Prewedding>}></Route>
                <Route path="/maternity" element={<Maternity></Maternity>}></Route>
                <Route path="/other" element={<Other></Other>}></Route>
                <Route path="/kids" element={<Kids></Kids>}></Route>
                <Route path="/contactus" element={<Contactus></Contactus>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
        
        </>
    )
}