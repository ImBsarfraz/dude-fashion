import React, { useEffect, useState } from "react";
import "./style.css";

export default function Index(){
    const [menData,setmenData] = useState([]);
    const [womenData,setwomenData] = useState([]);
    const [sareeData,setsareeData] = useState([]);
    const [ghagraData,setghagraData] = useState([]);
    useEffect(()=>{
        setmenData(
            [
                {
                    "image":"img/men1.png",
                    "name":"Black-Gold Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men3.png",
                    "name":"Jodhpuri Pattern",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men2.png",
                    "name":"Black-Gold Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men4.png",
                    "name":"Jodhpuri Pattern",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men5.png",
                    "name":"Black-Welwet Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men12.png",
                    "name":"Blue-Welwet Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men6.png",
                    "name":"Black-Welwet Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men14.png",
                    "name":"Blue-Welwet Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men8.png",
                    "name":"Blue-Welwet Sherwani",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men13.png",
                    "name":"Coffee WesCoat",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men18.png",
                    "name":"Blue-Welwet Sherwani",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men16.png",
                    "name":"Coffee-Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men9.png",
                    "name":"Blue-Welwet Sherwani",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men7.png",
                    "name":"Sky-Blue Blazer",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men10.png",
                    "name":"Blue-Welwet Sherwani",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/men17.png",
                    "name":"Coffee WesCoat",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setwomenData(
            [
                {
                    "image":"img/long1.jpg.png",
                    "name":"Red Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long2.jpg.png",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long6.jpg.png",
                    "name":"Pink Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long4.jpg.png",
                    "name":"Yellow Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long7.jpg.png",
                    "name":"Red Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long12.jpg.png",
                    "name":"Sky-Blue Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long9.jpg.png",
                    "name":"Pink Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/long10.jpg.png",
                    "name":"Yellow Gown",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setsareeData(
            [
                {
                    "image":"img/saree2.jpg.png",
                    "name":"Blue Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree4.jpg.png",
                    "name":"White-Red Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree5.jpg.png",
                    "name":"White-Red Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree6.jpg.png",
                    "name":"Red-Gold Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree7.jpg.png",
                    "name":"Red-Gold Saree",
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
                    "image":"img/saree15.jpg.png",
                    "name":"South-Indian Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/saree12.jpg.png",
                    "name":"DarkRed-Gold Saree",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
        setghagraData(
            [
                {
                    "image":"img/ghagra1.png",
                    "name":"Pink-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra8.png",
                    "name":"Red-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra2.png",
                    "name":"Pink-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra.png",
                    "name":"Gujarati-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra9.png",
                    "name":"Red-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra6.png",
                    "name":"Dark-Brown Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra10.png",
                    "name":"Red-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
                {
                    "image":"img/ghagra7.png",
                    "name":"Dark-Brown-Ghagra",
                    "details":"For More Details Click On The Below Icon",
                    "phone":"tel:7843030127",
                    "icon":"fa fa-phone",
                },
            ]
        )
    })
    return(
        <>
        <section className="index1 p-0">
            <div className="container_fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-290c-61fd-bd23-4c934162a616/raw?se=2025-06-22T08%3A09%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=620cb12c-41ff-5b94-ac6e-14d2011964c0&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T17%3A27%3A20Z&ske=2025-06-22T17%3A27%3A20Z&sks=b&skv=2024-08-04&sig=paZy6WlDJNka9YvLgYl%2BQdpD/hbpL2E/MJTSTkFI3%2BU%3D" className="d-block" alt="..."/>
                                </div>
                            <div className="carousel-item">
                                <img width={"100%"} src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-b700-61fd-ae25-1e0bf6a32569/raw?se=2025-06-22T08%3A07%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=749c61ce-b9c1-5e0d-b32b-fbb6d8a52748&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-21T17%3A37%3A22Z&ske=2025-06-22T17%3A37%3A22Z&sks=b&skv=2024-08-04&sig=sY72AxXb5ob3q/DARhvCoQxrB%2B8vlNZ1jB1QzsRIMbk%3D" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img width={"100%"} src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4e74-61f7-a33a-bc8eb3e77f1f/raw?se=2025-06-22T08%3A12%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=0201b471-19a7-5170-8c3c-2675f46439c1&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-22T02%3A03%3A29Z&ske=2025-06-23T02%3A03%3A29Z&sks=b&skv=2024-08-04&sig=/r2LKGx34rcNRM%2Bj/DJWK9qES7GtjG2ijMT6dPQ61Jc%3D" className="d-block w-100" alt="..."/>
                                
                        </div>
                    </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="portfolio" id="portfolio">
        <h2 className="heading">Glimpse Of <span>Men</span></h2>
        
        <div className="portfolio_container">
            {
                menData.map((product)=>{
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

    {/* Women */}

    <section className="portfolio" id="portfolio">
        <h2 className="heading">Glimpse Of <span>Women</span> Collection</h2>
        
        <div className="portfolio_container">
            {
                womenData.map((womenProduct)=>{
                    return(
                        <>
                        <div className="portfolio_box">
                            <img src={womenProduct.image} alt=""/>
                            <div className="portfolio_layer">
                                <h6>{womenProduct.name}</h6>
                                <p>{womenProduct.details}</p>
                                <a href={womenProduct.phone}><i className={womenProduct.icon}></i></a>
                            </div>
                        </div>
                        </>
                    )
                })
            }  
        </div>
    </section>

    {/* Saree */}
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Saree <span>Collection</span></h2>
        
        <div className="portfolio_container">
            {
                sareeData.map((sareeProduct)=>{
                    return(
                        <>
                        <div className="portfolio_box">
                            <img src={sareeProduct.image} alt=""/>
                            <div className="portfolio_layer">
                                <h6>{sareeProduct.name}</h6>
                                <p>{sareeProduct.details}</p>
                                <a href={sareeProduct.phone}><i className={sareeProduct.icon}></i></a>
                            </div>
                        </div>
                        </>
                    )
                })
            }        
        </div>
    </section>

    {/* Ghagra */}
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Ghagra <span>Collection</span></h2>
        
        <div className="portfolio_container">
            {
                ghagraData.map((ghagraProduct)=>{
                    return(
                        <>
                        <div className="portfolio_box">
                            <img src={ghagraProduct.image} alt=""/>
                            <div className="portfolio_layer">
                                <h6>{ghagraProduct.name}</h6>
                                <p>{ghagraProduct.details}</p>
                                <a href={ghagraProduct.phone}><i className={ghagraProduct.icon}></i></a>
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