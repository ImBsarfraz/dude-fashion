import React from "react";
import "./style.css";

export default function Contactus(){
    return(
        <>
        <section className="contact p-5" id="contact">
        <h1 className="heading text-center mb-5">Contact <span>Us!</span></h1>
        <form>
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <input className="form-control" type="text" name="name" placeholder="Full Name"/>
                </div>
                <div className="col-md-6">
                    <input className="form-control" type="number" name="mobile" placeholder="Mobile"/>
                </div>
                <div className="col-md-6">
                    <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                </div>
                <div className="col-md-6">
                    <input className="form-control" type="email" name="email" placeholder="Email Subject"/>
                </div>
                <div className="col-12">
                    <textarea className="form-control" name="" id="" cols="20" rows="10" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                        <a className="btna" href="https://wa.me/7843030127"><button className="btn1 d-none d-md-block">SEND</button></a>
                </div>
            </div>
           </div>
        </form>
    </section>
        </>
    )
}