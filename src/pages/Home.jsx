import React, {useState, useEffect} from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem  } from "reactstrap";

import heroImg from "../asset/imagenes/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";


import featureImg01 from "../asset/imagenes/service-01.png"
import featureImg02 from "../asset/imagenes/service-02.png"
import featureImg03 from "../asset/imagenes/service-03.png";

import products from "../asset/data-falsa/productos.js";
import foodCategoryImg01 from "../asset/imagenes/hamburger.png";
import foodCategoryImg02 from "../asset/imagenes/pizza.png";
import foodCategoryImg03 from "../asset/imagenes/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../asset/imagenes/location.png";


const featureData = [

    {
       title:"Delivery",
       imgUrl: featureImg01,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque."
    },
    {
        title:"Viandas diarias",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque."
     },
     {
        title:"Take Away",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque."
     },
]


const Home = () => {

    const [category, setCategory] = useState("ALL")
    const [allProducts, setAllProducts] = useState(products)

    const [hotPizza, setHotPizza] = useState([])

    useEffect(() => {
        const filteredPizza = products.filter(item=> item.category === "Pizza")
        const slicePizza = filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    }, [])

    useEffect(()=>{
      
        if(category === "ALL"){
            setAllProducts(products)
        }

        if(category === "BURGER"){
            const filteredProducts = products.filter(item=>item.category ===
                 "Burger")

                 setAllProducts(filteredProducts)
        }

        if(category === "PIZZA"){
            const filteredProducts = products.filter(item=>item.category ===
                 "Pizza")

                 setAllProducts(filteredProducts)
        }

        if(category === "BREAD"){
            const filteredProducts = products.filter(item=>item.category ===
                 "Bread")

                 setAllProducts(filteredProducts)
        }


    },[category])


    return <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                     <div className="hero__content">
                        <h5 className="mb-3">La forma más simple para pedir comida</h5>
                        <h1 className="mb-4 hero__title">
                        <span>¿Con hambre?</span> Llamamos <br /> llevamos<span> la comida a tu casa</span></h1>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio illum praesentium, consequuntur sit est in?</p>
                        </div>

                        <div className="hero__btns d-flex aling-items-center gap-5 mt-4">
                            <button className="order__btn d-flex align-items-center 
                            justify-content-between">
                                Pedir <i class="ri-arrow-right-s-line"></i>
                            </button>

                            <button className="all__foods-btn">
                                <Link to="/foods"> Ver todo</Link>
                                </button>
                        </div>
                    
                    </Col>

                    <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={heroImg} alt="hero-img" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pt-0">
            <Category/>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h5 className="feature__subtitle mb-4">Lorem, ipsum dolor.</h5>
                        <h2 className="feature__title">Lorem ipsum dolor sit amet.</h2>
                        <h2 className="feature__title"> Lorem, ipsum. <span>Lorem, ipsum dolor.</span> </h2>
                        <p className="mb-1 mt-4 feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsa?</p>
                        <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vero? {" "}</p>
                    </Col>

                    {
                      featureData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                        <div className="feature__item text-center px-5 py-3">
                            <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                            <h5 className="fw-bold mb-3">{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </Col>

                      ) )  
                    }

                    
                   
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2>Popular</h2>
                    </Col>

                    <Col lg="12">
                        <div className="food__Category d-flex align-imtes-center justify-content-center gap-4">
                            <button className={`all_btn ${category === "ALL" ? "foodBtnActive" : "" }`} 
                            onClick={()=>
                            setCategory("ALL")}>Todo</button>

                            <button className= {`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : "" }`}
                            onClick={()=> setCategory("BURGER")}><img src={foodCategoryImg01} alt="" />Burger</button>
                            
                            <button className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : "" }`}
                            onClick={()=> setCategory("PIZZA")}><img src={foodCategoryImg02} alt="" />Pizza</button>
                            
                            <button className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : "" }`}
                            onClick={()=> setCategory("BREAD")}><img src={foodCategoryImg03} alt="" />Bread</button>

                        </div>
                    </Col>

                    {
                        allProducts.map(item=>(
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                            <ProductCard item={item}/>
                        </Col>
                        ))
                    }              
                </Row>
            </Container>
        </section>
        
        <section className="why__choose-us">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <img src={whyImg} alt="why-tasty-treat" className="w-100"/>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="why__tasty-treat">
                            <h2 className="tasty__treat-title mb-4">¿Qué es <span>Tasty Treat?</span></h2>
                            <p className="tasty__treat-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium reprehenderit quae mollitia cumque commodi facilis eius pariatur eos voluptate natus expedita animi blanditiis, optio omnis officiis tenetur, eum quis.
                            </p>
                            
                            <ListGroup className="mt-4">
                             <ListGroupItem className="border-0 ps-0">
                                <p className="choose__us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Comida fresta y sabrosa</p>   
                                <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam.
                                </p>
                                </ListGroupItem> 
                                
                             <ListGroupItem className="border-0 ps-0">
                               <p className="choose__us-title d-flex align-items-center gap-2"> <i class="ri-checkbox-circle-line"></i>Servicio de Calidad</p>
                                <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam.
                                </p> 
                               </ListGroupItem>   
                            
                               <ListGroupItem className="border-0 ps-0">
                               <p className="choose__us-title d-flex align-items-center gap-2"> <i class="ri-checkbox-circle-line"></i>Envíos a toda la ciudad {" "}
                                </p>
                                <p className="choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam.
                                </p> 
                               </ListGroupItem> 
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h2>Hot Pizza</h2>
                    </Col>

                    {
                      hotPizza.map(item=> (
                        <Col lg="3" md="4" key={item.id}>
                            <ProductCard item={item}/>
                        </Col>
                      ) )  
                    }
                </Row>
            </Container>
        </section>
       
    </Helmet>
}

export default Home;