import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Aboutambassador(){
    const [ambassadorData1,setambassadorData1] = useState([]);

    useEffect(()=>{
        setambassadorData1(
           {
            "img":"img/ambassador.png",
            "heading":"Introducing Our Icon of Elegance: Dhanashree Wagh",
            "info1":"Elegance personified, grace unparalleled—meet Dhanashree Wagh, the radiant face and epitome of style at The Branded Choice Dude Fashion. As our esteemed Brand Ambassador and the reigning MISS GLAM ICON OF MAHARASHTRA, Dhanashree embodies the essence of sophistication and glamour.",
            "info2":"With her captivating presence and innate sense of fashion, Dhanashree brings a touch of allure to every ensemble she adorns. Her journey from the runways of Maharashtra to the global stage is a testament to her unwavering dedication and unparalleled talent.",
            "info3":"At The Branded Choice Dude Fashion, Dhanashree Wagh serves as the beacon of inspiration, guiding fashion enthusiasts towards the pinnacle of style and elegance. Her impeccable taste and flair for the extraordinary elevate our collections, turning heads and setting trends with every stride.", 
            "info4":"Join us in celebrating the union of beauty and style, as Dhanashree Wagh graces The Branded Choice Dude Fashion with her charm and charisma. Together, let's redefine glamour and leave an indelible mark on the world of fashion.", 
            "info5":"Welcome to a realm where sophistication meets substance, guided by the luminous presence of Dhanashree Wagh. Welcome to The Branded Choice Dude Fashion.", 
           }
        )
    },[]);
    
    return(
        <>
        <section className="designer1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">About <span className="span0">The Ambassador</span></h1>
                        <h5 className="d-block d-md-none">About <span className="span02">The Ambassador</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ About Ambassador</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ About Ambassador</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        <section className="designer2">
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center  m-5">
                    <h2>About The <span className="spano1">Ambassador</span></h2>
                   </div>
                </div>
            </div>
        </section>
        <section className="designer3">
            <div className="container">
                <div className="row row1">
                   <div className="col-6 p-4">
                    <img src={ambassadorData1.img} width={"100%"} />
                   </div>
                   <div className="col-6 p-4">
                    <h4 className="mt-4">{ambassadorData1.heading}</h4>
                        <p className="mt-5">{ambassadorData1.info1}</p>

                        <p>{ambassadorData1.info2}</p>

                        <p>{ambassadorData1.info3}</p>

                        <p>{ambassadorData1.info4}</p>

                        <p>{ambassadorData1.info5}</p>
                   </div>
                </div>
            </div>
        </section>
        </>
    )
}