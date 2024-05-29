import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Nav(){
    return(
        <>
        <section className="nav1 d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 p-3 text-center">
                        <h6><a href="https://www.instagram.com/dude_fashion_boutique/"><i className="fa fa-instagram mr-2"></i> <span className="span2">dude_fashion_boutique</span></a></h6>
                    </div>
                    <div className="col-6 p-3 text-center">
                        <h6><a href="tel:+7796404058"><i class="fa-solid fa-phone-flip"></i></a> <a href="tel:+7796404058">7796404058</a> <a href="tel:+7843030127"><i class="fa-solid fa-phone-flip"></i></a> <a href="tel:+7843030127">7843030127</a> </h6>
                    </div>
                    <div className="col-3 p-3 text-center">
                        <h6><a href="https://wa.me/7843030127" target="_blank"><i className="fa fa-whatsapp mr-2"></i> <span className="span2">7843030127</span></a></h6>
                    </div>
                </div>
            </div>
        </section>
        <section className="nav2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 col-md-3 p-0 p-md-4">
                        <h4 className="">DUDE <span className="span1">FASHION</span></h4>
                    </div>
                    <div className="col-7 col-md-7 p-0 p-md-4">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown active">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            About Us
                                        </a>
                                    <div className="dropdown-menu">
                                        <NavLink className="nav-link aboutl" to="/aboutowner">About Owner</NavLink>
                                        <NavLink className="nav-link aboutl" to="/aboutdesigner">About Designer</NavLink>
                                        <NavLink className="nav-link aboutl" to="/aboutambassador">Brand Ambassador</NavLink>
                                    </div>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/other">Wedding</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/prewedding">PreWedding</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/maternity">Maternity</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/kids">Kids</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/contactus">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-2 p-2 p-md-4 text-center">
                        <a className="btna" href="https://wa.me/7843030127"><button className="btn1 d-none d-md-block">CONTACT</button></a>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}