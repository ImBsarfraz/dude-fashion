import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Maternity(){
    const [maternityData1,setmaternityData1] = useState([]);
    const [maternityData2,setmaternityData2] = useState([]);

    useEffect(()=>{
        setmaternityData1(
            [
                {
                    "image":"img/maternity1.jpg",
                    "name":"Pink Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity2.jpg",
                    "name":"Pink Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity17.jpg",
                    "name":"Pink Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity32.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity4.jpg",
                    "name":"Black Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity5.jpg",
                    "name":"Black Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity7.jpg",
                    "name":"Black Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity10.jpg",
                    "name":"Pink-RedShadow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity23.jpg",
                    "name":"Offwhite Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity19.jpg",
                    "name":"Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity26.jpg",
                    "name":"Offwhite Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity21.jpg",
                    "name":"Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity22.jpg",
                    "name":"Black Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity25.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity31.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity32.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity35.jpg",
                    "name":"Green Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity29.jpg",
                    "name":"Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity36.jpg",
                    "name":"Green Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity30.jpg",
                    "name":"Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity37.jpg",
                    "name":"Pink-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity38.jpg",
                    "name":"Purple-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity33.jpg",
                    "name":"Black-Blue-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity39.jpg",
                    "name":"Blue-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity40.jpg",
                    "name":"Simple-Blue Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity52.jpg",
                    "name":"Blue-Yellow Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity41.jpg",
                    "name":"Blue-Floral Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity49.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity43.jpg",
                    "name":"Black-Silver-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity47.jpg",
                    "name":"Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity34.jpg",
                    "name":"Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity48.jpg",
                    "name":"Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                
            ]
        )
        setmaternityData2(
            [
                {
                    "image":"img/maternity6.jpg",
                    "name":"Black Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity8.jpg",
                    "name":"Black Blue-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity9.jpg",
                    "name":"Black Blue-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity11.jpg",
                    "name":"Pink-RedShadow Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity42.jpg",
                    "name":"Black Red-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity44.jpg",
                    "name":"Black Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity50.jpg",
                    "name":"Red-Longtail Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity51.jpg",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity53.jpg",
                    "name":"Offwhite Black-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/maternity54.jpg",
                    "name":"Red-Longtail Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
    })
    return(
        <>
        {/* maternity section1 */}
        <section className="maternity1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">Mater<span className="span0">nity</span></h1>
                        <h5 className="d-block d-md-none">Mater<span className="span02">nity</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ Maternity</span></NavLink>
                        <NavLink className="nav-link1 zd-block d-md-none" to="/">Home <span className="span03">/ Maternity</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

{/* Maternity section2 */}

<section className="portfolio" id="portfolio">
        <h2 className="heading">Maternity <span>Concept</span></h2>
        <div className="portfolio_container">
            {
                maternityData1.map((product)=>{
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

    {/* Maternity section3 */}


<section className="portfolio1" id="portfolio">
        <h2 className="heading">Maternity <span>Concept</span></h2>
        <div className="portfolio_container">\
            {
                maternityData2.map((product)=>{
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