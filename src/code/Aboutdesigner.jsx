import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Aboutdesigner(){
    return(
        <>
       <section className="designer1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">About <span className="span0">The Designer</span></h1>
                        <h5 className="d-block d-md-none">About <span className="span02">The Designer</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ About Designer</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ About Designer</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="designer2">
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center  m-5">
                    <h2>About The <span className="spano1">Designer</span></h2>
                   </div>
                </div>
            </div>
        </section>
        <section className="designer3">
            <div className="container">
                <div className="row row1">
                   <div className="col-6 p-4">
                    <img src="img/designer.jpg.png" width={"100%"} />
                   </div>
                   <div className="col-6 p-4">
                    <h4 className="mt-4">Meet Our Creative Force: Swapnil Bhosle</h4>
                    <p className="mt-4">Step into the world of The Branded Choice Dude Fashion, where innovation meets style and tradition blends seamlessly with contemporary flair. At the heart of our brand stands Swapnil Bhosle, a visionary designer renowned for his unmatched creativity and passion for fashion.

                        With a keen eye for detail and an unwavering commitment to excellence, Swapnil brings forth a captivating blend of sophistication and edgy charm in every creation. Drawing inspiration from diverse cultures, art forms, and global trends, he weaves magic into each design, turning dreams into reality for our discerning clientele.

                        As the driving force behind The Branded Choice Dude Fashion, Swapnil Bhosle brings years of experience and a fresh perspective to the fashion landscape. His dedication to craftsmanship, paired with a relentless pursuit of perfection, sets our brand apart, making every ensemble a masterpiece in its own right.

                        Join us on a journey of style and elegance, curated by the visionary mind of Swapnil Bhosle. Experience the allure of bespoke fashion and discover the epitome of sartorial excellence at The Branded Choice Dude Fashion.

                        Welcome to a world where style knows no bounds, and every outfit tells a story. Welcome to The Branded Choice Dude Fashion.</p>
                    
                   </div>
                </div>
            </div>
        </section>
        </>
    )
}