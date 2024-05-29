import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Other(){
    const [wddingData,setweddingData] = useState([]);
    const [wddingData2,setweddingData2] = useState([]);
    const [wddingData3,setweddingData3] = useState([]);
    const [wddingData4,setweddingData4] = useState([]);
    useEffect(()=>{
        setweddingData(
            [
                {
                    "image":"img/long15.jpg",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long10.jpg.png",
                    "name":"Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long17.jpg",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long11.jpg.png",
                    "name":"Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long14.jpg",
                    "name":"Long-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long16.jpg",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long14.jpg",
                    "name":"Long-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long21.jpg",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long29.jpg",
                    "name":"Olive-Green Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long24.jpg",
                    "name":"Red-Flower Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long27.jpg",
                    "name":"Red Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long28.jpg",
                    "name":"Yellow-Flower Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long33.jpg",
                    "name":"Pink-Barbie Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long34.jpg",
                    "name":"Pink-Barbie Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long38.jpg",
                    "name":"Pink-Barbie Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long39.jpg",
                    "name":"Pink-Barbie Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setweddingData2(
            [
                {
                    "image":"img/long23.jpg",
                    "name":"Red-Flower Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long25.jpg",
                    "name":"Red-Flower Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setweddingData3(
            [
                {
                    "image":"img/saree22.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree20.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree24.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree25.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree16.jpg.png",
                    "name":"Pink Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree10.jpg.png",
                    "name":"Green-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree17.jpg.png",
                    "name":"Pink Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree21.jpg",
                    "name":"Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree18.jpg",
                    "name":"Blue-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree19.jpg",
                    "name":"Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree23.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree27.jpg",
                    "name":"Vine-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setweddingData4(
            [
                {
                    "image":"img/saree8.jpg.png",
                    "name":"Blue-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree1.jpg.png",
                    "name":"Blue-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree20.jpg",
                    "name":"Dark-Red-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree2.jpg.png",
                    "name":"Blue-Golden Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
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
                    <h1 className="d-none d-md-block">Wed<span className="span0">ding</span></h1>
                        <h5 className="d-block d-md-none">Wed<span className="span02">ding</span></h5>
                        <NavLink className="nav-link d-none d-md-block" to="/">Home <span className="span01">/ Wedding</span></NavLink>
                        <NavLink className="nav-link1 d-block d-md-none" to="/">Home <span className="span03">/ Wedding</span></NavLink>
                    </div>
                </div>
            </div>
        </section>

        {/* Other2 */}

<section className="portfolio" id="portfolio">
        <h2 className="heading"><span>Long</span> Gowns</h2>
        
        <div className="portfolio_container">
        {
                wddingData.map((product)=>{
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

    {/*Other section3 */}

    <section className="portfolio1" id="portfolio">

        <div className="portfolio_container">
            {
                wddingData2.map((product)=>{
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

        {/* Other3 */}

<section className="portfolio" id="portfolio">
        <h2 className="heading"><span>Saree</span> Concept</h2>
        
        <div className="portfolio_container">
            {
                wddingData3.map((product)=>{
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

    {/*Other section3 */}

    <section className="portfolio1" id="portfolio">

        <div className="portfolio_container">
            {
                wddingData4.map((product)=>{
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