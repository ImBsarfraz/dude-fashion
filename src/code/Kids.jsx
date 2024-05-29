import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Kids(){
    const [kidsData,setKidsData] = useState([]);
    useEffect(()=>{
        setKidsData(
            [
                {
                    "image":"img/kid1.png",
                    "name":"Western Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid2.png",
                    "name":"Western Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid3.png",
                    "name":"Western Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid4.png",
                    "name":"Western Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid5.png",
                    "name":"Traditional Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid6.png",
                    "name":"Traditional Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid7.png",
                    "name":"Traditional Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/kid8.png",
                    "name":"Traditional Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                }
            ]
        )
    },[]);
    return(
        <>
        {/* other1 */}
        <section className="other1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">Kids<span className="span0"> Collection</span></h1>
                        <h5 className="d-block d-md-none">Kids<span className="span02">Collection</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ Kids</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ Kids</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        {/* Other2 */}

<section className="portfolio" id="portfolio">
        <h2 className="heading"><span>Kids</span> Collection</h2>
        
        <div className="portfolio_container">
        {
                kidsData.map((product)=>{
                    return(
                        <>
                        <div className="portfolio_box">
                            <img src={product.image} alt=""/>
                            <div className="portfolio_layer">
                                <h6>{product.name}</h6>
                                <p>{product.details}</p>
                                <a href={product.phone}><i className={product.icon}></i></a>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
        </>
    )
}