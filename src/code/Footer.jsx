import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Footer(){
    return(
        <>
                {/* fixed  buttons */}
        
                <ul className="buttons d-none d-md-block">
              <li><div className="fbtn"><a href="https://www.instagram.com/dude_fashion_boutique/"><button className="btn1"><i className="fa fa-instagram"></i></button></a></div></li>
              <li><div className="fbtn"><a href="tel:+7843030127"><button className="btn2"><i className="fa fa-phone"></i></button></a></div></li>
              <li><div className="fbtn"><a href="https://wa.me/7843030127" target="_blank"><button className="btn3"><i className="fa fa-whatsapp"></i></button></a></div></li>
        </ul>

        
        {/* footer main */}

        <section className="footer1 p-5">
        <div className="container-fluid footer ">
            <div className="row">
                <div className="col-md-4 mt-md-1">
                   <h1><span className="spanf">DUDE </span>FASHION</h1>
                    <p className="mt-4 text-justify">The Branded Choice DUDE FASHION Best Rental Service Provider Of Ahmednagar District</p>
                    <h6 className="mt-3"><i class="fa-solid fa-location-dot"></i>  Nalbandkhunt Ahmednagar<br /> Ahmednagar 414001</h6>
                    <p className="mt-3"><a href="tel:+7796404058"><i class="fa-solid fa-phone-flip"></i></a> <a href="tel:+7796404058">7796404058</a> <a href="tel:+7843030127"><i class="fa-solid fa-phone-flip"></i></a> <a href="tel:+7843030127">7843030127</a></p>
                    <p className="mt-3"><a href="https://www.instagram.com/dude_fashion_boutique/"><i class="fa fa-instagram"></i> dude_fashion_boutique</a></p>
                </div>
                <div className="col-md-2 mt-md-1">
                    <h6>Links:</h6>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/aboutowner">About Owner</NavLink>
                    <NavLink className="nav-link" to="/aboutdesigner">About Designer</NavLink>
                    <NavLink className="nav-link" to="/aboutambassador">Ambassador</NavLink>
                    <NavLink className="nav-link" to="/prewedding">Pre Wedding</NavLink>
                    <NavLink className="nav-link" to="/maternity">Maternity</NavLink> 
                    <NavLink className="nav-link" to="/other">Other</NavLink> 
                </div>
                <div className="col-md-2 mt-md-1">
                    <h6>Rent Sevices:</h6>
                    <NavLink className="nav-link" to="/">Wedding</NavLink>
                    <NavLink className="nav-link" to="/prewedding">Pre Wedding</NavLink>
                    <NavLink className="nav-link" to="/maternity">Maternity</NavLink> 
                    <NavLink className="nav-link" to="/other">Other</NavLink> 
                </div>
                <div className="col-md-4 mt-md-1">
                    <h6>Follow Us: </h6>
                    <h3 className="mt-4"><a href="https://www.instagram.com/dude_fashion_boutique/"><i className="fa fa-instagram"></i></a> <a href="tel:+7796404058"><i className="fa fa-phone ml-3"></i></a> <a href="https://wa.me/7843030127" target="_blank"><i className="fa fa-whatsapp ml-2"></i></a> <a href="tel:+7843030127"><i className="fa fa-phone ml-2"></i></a></h3>
                    <h6 className="mt-4"><a href="tel:+7796404058">Owner: 7796404058</a></h6>
                    <h6 className="mt-4"><a href="tel:+7843030127">Designer: 7843030127</a></h6>
                    <h6 className="mt-4"><a href="tel:+7843030127">Ambassador: 9307257733</a></h6>
                </div>
            </div>
        </div>
        </section>
{/* footer end */}

        <section className="footerend">
            <div className="container_fluid">
                <div className="row">
                    <div className="col-12 foot p-3 text-center">
                        <p className="mt-2">Copyright @ 2023 The Branded Choice DUDE FASHION. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="footerend1">
            <div className="container_fluid">
                <div className="row">
                    <div className="col-12 foot p-3 text-center">
                        <p className="mt-2">Developed by <a href="https://sarfraz-mern-portfolio.vercel.app/">Mr. sarfraz Bagwan</a></p>
                    </div>
                </div>
            </div>
        </section>
 
        

        </>
    )
}