import React from 'react'
import Footer from '../Components/Footer'
import GoogleMaps from "simple-react-google-maps"



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
                  <h4><a href="tel:#">1-800-123-1234</a></h4>
                  <p>You can call us anytime</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-classic">
                <div class="box-icon-inner decorate-circle"><span class="icon-xl linearicons-map2"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">51 Francis Street, San Diego, CA 91702 United States</a></h4>
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

          <GoogleMaps
            apiKey={"AIzaSyD0zcbxac6iyBT23MH1bcua053o5uCpWbQ"}
            style={{ height: "400px", width: "100%" }}
            zoom={6}
            center={{ lat: 37.4224764, lng: -122.0842499 }}
            markers={{ lat: 37.4224764, lng: -122.0842499 }}
          />
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Contacto