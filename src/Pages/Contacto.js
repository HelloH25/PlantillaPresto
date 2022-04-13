import React from 'react'
import Footer from '../Components/Footer'
import GoogleMaps from "simple-react-google-maps"
import Formulario from '../Components/Formulario'



const Contacto = () => {
  return (
    <div>
      <section class="parallax-container overlay-1" data-parallax-img="images/breadcrumbs.jpg">
        <div class="parallax-content breadcrumbs-custom context-dark">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-9">
                <h2 class="breadcrumbs-custom-title">Contacts</h2>
                <ul class="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li class="active">Contacts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg text-center bg-default">
        <div class="container">
          <div class="row row-50">
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-classic">
                <div class="box-icon-inner decorate-triangle"><span class="icon-xl linearicons-phone-incoming"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="tel:+573158419142">+573158419142</a></h4>
                  <p>You can call us anytime</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-classic">
                <div class="box-icon-inner decorate-circle"><span class="icon-xl linearicons-map2"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="https://goo.gl/maps/wndXxR6cV6jZVR4EA"> A dos kilometros de la marginal por la vía de bugambiles</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-classic">
                <div class="box-icon-inner decorate-rectangle"><span class="icon-xl linearicons-paper-plane"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="mailto:#">info@demolink.org</a></h4>
                  <p>Feel free to email us your questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-lg text-center bg-default'>
        <div className='container'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6131.086120620096!2d-72.8926470068468!3d4.852565387755384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad38530c7c54b%3A0xef455ee14cf5bf5e!2sCentro%20Ecotur%C3%ADstico%20Canaima!5e0!3m2!1ses-419!2sco!4v1649363178636!5m2!1ses-419!2sco" width="100%" height="450px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='canaima'></iframe>
        </div>

      </section>
      <section>
        <div className="container">

          <Formulario />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contacto