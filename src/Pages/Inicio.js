import React from 'react'
import "./css/pages.css"
import imagen1 from "../images/home-3-1-483x327.jpg"
import img2 from "../images/home-3-2-341x391.png"
import img3 from "../images/signature-1-140x50.png"
import Productos from '../Components/Productos'
import Frecuentes from '../images/Frecuentes'
import Menu from '../Components/Menu'
import Galeria from '../Components/Galeria'
import PiePagina from '../Components/PiePagina'
import RedesSociales from '../Components/RedesSociales'
import Footer from '../Components/Footer'



const Inicio = () => {

  return (
    <div>
      <section className="section section-lg section-main-bunner section-main-bunner-filter text-center">
        <div className="main-bunner-img" id="bienvenido"></div>
        <div className="main-bunner-inner">
          <div className="container">
            <div className="box-default">
              <h1 className="box-default-title">Welcome</h1>
              <div className="box-default-decor"></div>
              <p className="big box-default-text">Our restaurant offers full-service dining with breathtaking views seen from our indoor covered patio and our outdoor sundeck.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg section-inset-1 bg-gray-1 pt-lg-0">
        <div className="container">
          <div className="row row-50 justify-content-xl-between align-items-lg-center">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="box-image"><img className="box-image-static" src={imagen1} alt="" width="100%" height="327" /><img className="box-image-position" src={img2} alt="" width="341" height="391" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 wow fadeInRight">
              <h2>About Us</h2>
              <p>Pesto is a family owned and operated Italian Restaurant offering a combination of fresh ingredients and authentic Italian cooking.</p>
              <p>We will make sure you are served the most authentic and fresh Italian dishes, while offering the best customer service. Our kitchen is committed to providing our guests with the best Italian Cuisine.</p><img src={img3} alt="" width="140" height="50" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-9 col-lg-7 wow-outer">
              <div className="wow slideInDown">
                <h2>Featured Offers</h2>
                <p className="text-opacity-80">We offer a great variety of  the best Italian dishes to our visitors and guests. Below are some of our most popular main dishes and desserts.</p>
              </div>
            </div>
          </div>
          <div className="row row-20 row-lg-30">
            <Productos frecuentes={Frecuentes} />
          </div>
        </div>
      </section>

      <Menu />
      <section className="section">
        <div className="row isotope-wrap">
          <center>

            <div className="col-lg-12">
              <center>

                <h2>Galeria</h2>
              </center>
              <Galeria />
            </div>
          </center>
        </div>
      </section>
      <Footer/>
    </div>
  )
}


export default Inicio