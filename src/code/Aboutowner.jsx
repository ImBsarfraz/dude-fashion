import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Aboutowner(){
    const [ownerData1,setownerData1] = useState([]);

    useEffect(()=>{
        setownerData1(
           {
            "img":"img/owner.jpg.png",
            "heading":"A Visionary at the Helm: Sahil Bagwan",
            "info1":"In the ever-evolving world of fashion, some individuals stand out not just for their talent, but for their remarkable vision and determination. Meet Sahil Bagwan, the dynamic force behind The Branded Choice Dude Fashion—a trailblazer who defies convention and redefines success at an age where dreams are often just taking shape.",
            "info2":"With a passion for creativity and an innate sense of entrepreneurship, Sahil embarked on a journey that would soon become a beacon of innovation in the fashion industry. As the visionary owner of The Branded Choice Dude Fashion, he brings a fresh perspective and youthful energy to every aspect of the brand.",
            "info3":"Despite his young age, Sahil's unwavering commitment to quality and excellence has earned him accolades and admiration from peers and patrons alike. His ability to anticipate trends, coupled with a relentless pursuit of perfection, sets The Branded Choice Dude Fashion apart as a leader in the realm of contemporary style.", 
            "info4":"Join us as we celebrate the extraordinary vision and unwavering determination of Sahil Bagwan. Together, let's embark on a journey of style, creativity, and boundless possibilities, guided by the pioneering spirit of youth and innovation.", 
            "info5":"Welcome to The Branded Choice Dude Fashion—a testament to the power of dreams and the resilience of passion.", 
           }
        )
    },[]);
    return(
        <>
        <section className="owner1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">About <span className="span0">The Owner</span></h1>
                        <h5 className="d-block d-md-none">About <span className="span02">The Owner</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ About Owner</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ About Owner</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="owner2">
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center m-5">
                    <h2>About The <span className="spano1">Owner</span></h2>
                   </div>
                </div>
            </div>
        </section>
        <section className="owner3">
            <div className="container">
                <div className="row row1">
                   <div className="col-6 mt-5 p-4">
                    <img src={ownerData1.img} width={"100%"} />
                   </div>
                   <div className="col-6 p-4">
                        <h4 className="mt-4">{ownerData1.heading}</h4>
                        <p className="mt-4">{ownerData1.info1}</p>
                        <p className="mt-2">{ownerData1.info2}</p>
                        <p className="mt-2">{ownerData1.info3}</p>
                        <p className="mt-2">{ownerData1.info4}</p>
                        <p className="mt-2">{ownerData1.info5}</p>
                   </div>
                </div>
            </div>
        </section>

        
        </>
    )
}