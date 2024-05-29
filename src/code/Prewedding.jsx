import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


export default function Prewedding(){
    const [punjabiConcept,setpunjabiConcept] = useState([]);
    const [southindianConcept,setsouthindianConcept] = useState([]);
    const [traditionalConcept,settraditionalConcept] = useState([]);
    const [westernConcept1,setwesternConcept1] = useState([]);
    const [westernConcept2,setwesternConcept2] = useState([]);

    useEffect(()=>{
        setpunjabiConcept(
            [
                {
                    "image":"img/couple1.png",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple15.png",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple8.png",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple17.png",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple66.jpg",
                    "name":"Black-Pink Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple67.jpg",
                    "name":"Black-Pink Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple68.jpg",
                    "name":"Black-Pink Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple69.jpg",
                    "name":"Black-Pink Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setsouthindianConcept(
            [
                {
                    "image":"img/couple64.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple62.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple63.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple65.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple26.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple73.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple74.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple80.jpg",
                    "name":"South-Indian Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        settraditionalConcept(
            [
                {
                    "image":"img/couple29.jpg",
                    "name":"Gold-White Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple45.jpg",
                    "name":"Gold-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple28.jpg",
                    "name":"Gold-White Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple46.jpg",
                    "name":"Gold-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple28.jpg",
                    "name":"Gold-White Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple40.jpg",
                    "name":"Blue-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple41.jpg",
                    "name":"Blue-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple42.jpg",
                    "name":"Blue-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setwesternConcept1(
            [
                {
                    "image":"img/couple34.jpg",
                    "name":"Blue-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple37.jpg",
                    "name":"Vine Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple35.jpg",
                    "name":"Blue-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple38.jpg",
                    "name":"Vine Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple44.jpg",
                    "name":"Grey-Black Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple75.jpg",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple52.jpg",
                    "name":"Grey-Black Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple76.jpg",
                    "name":"Black-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple55.jpg",
                    "name":"White-Red-Shadow Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple49.jpg",
                    "name":"Green-Red Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple56.jpg",
                    "name":"White-Red-Shadow Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple57.jpg",
                    "name":"White-Red-Shadow Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setwesternConcept2(
            [
                {
                    "image":"img/couple60.jpg",
                    "name":"Green Golden-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple61.jpg",
                    "name":"Green Golden-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple70.jpg",
                    "name":"Grey vine-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple71.jpg",
                    "name":"Grey vine-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple81.jpg",
                    "name":"Green Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple82.jpg",
                    "name":"Green Yellow-Gown Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple58.jpg",
                    "name":"Grey Black-Ghagra Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/couple59.jpg",
                    "name":"Grey Black-Ghagra Concept",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
    },[]);

    return(
        <>
        {/* Pre Wedding Section1 */}
        
        <section className="prewed1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h1 className="d-none d-md-block">Pre Wed<span className="span0">ding</span></h1>
                        <h5 className="d-block d-md-none">Pre Wed<span className="span02">dingr</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ Pre-Wedding</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ Pre-Wedding</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        {/* pre wedding section2 */}

        <section className="portfolio" id="portfolio">
        <h2 className="heading">Punjabi <span>Concept</span></h2>
        <div className="portfolio_container">
            {
                punjabiConcept.map((product)=>{
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


        {/* pre wedding section3 */}

        <section className="portfolio" id="portfolio">
        <h2 className="heading"><span>South Indian</span> Concept</h2>
        
        <div className="portfolio_container">
            {
                southindianConcept.map((product)=>{
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

        {/* pre wedding section3 */}

    <section className="portfolio" id="portfolio">
        <h2 className="heading">Traditional <span>Concept</span></h2>
        <div className="portfolio_container">
            {
                traditionalConcept.map((product)=>{
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
        {/* pre wedding section4 */}

    <section className="portfolio" id="portfolio">
        <h2 className="heading">Western <span>Concept</span></h2>
        <div className="portfolio_container">
            {
                westernConcept1.map((product)=>{
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

    {/* Prewedding Section5 */}

    <section className="portfolio1" id="portfolio">
         
         <div className="portfolio_container">
            {
                westernConcept2.map((product)=>{
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
