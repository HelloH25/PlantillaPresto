import React from 'react'
import Footer from '../Components/Footer'
import Galeria from '../Components/Galeria'

const Nosotros = () => {
  return (
    <div><section className="parallax-container overlay-1" data-parallax-img="images/breadcrumbs.jpg">
      <div className="parallax-content breadcrumbs-custom context-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h2 className="breadcrumbs-custom-title">About Us</h2>
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="section section-lg bg-gray-1">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-6 pr-xl-5"><img src="images/about-us-1-518x434.jpg" alt="" width="518" height="434" />
            </div>
            <div className="col-lg-6">
              <h2>About Our Restaurant</h2>
              <div className="text-with-divider">
                <div className="divider"></div>
                <h4>We offer the best Italian dishes in a friendly and calm atmosphere.</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg bg-white">
        <div class="container">
          <h2 class="text-center">Why People Choose Us</h2>
          <div class="row row-30 row-md-60">
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-triangle"><span class="icon-xl restaurant-icon-30"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Friendly Team</a></h4>
                  <p>Morbi tristique senectus et netus et malesuada fames ac turpis.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-circle"><span class="icon-xl restaurant-icon-11"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Fresh Food</a></h4>
                  <p>Cum resistentia mori, omnes elevatuses imperium plac.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-rectangle"><span class="icon-xl restaurant-icon-36"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Quality Cuisine</a></h4>
                  <p>Cum consilium accelerare, omnes absolutioes quaestio fatalis.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-circle"><span class="icon-xl restaurant-icon-27"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Best Service</a></h4>
                  <p>Cum onus studere, omnes consiliumes amor plac.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-triangle"><span class="icon-xl restaurant-icon-34"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Diverse Menu</a></h4>
                  <p>Cum demolitione persuadere, omnes devatioes captis.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box-icon-modern">
                <div class="box-icon-inner decorate-rectangle"><span class="icon-xl restaurant-icon-26"></span></div>
                <div class="box-icon-caption">
                  <h4><a href="#">Affordable Prices</a></h4>
                  <p>Mirabilis, gratis devatios mechanice contactus de neuter, primus vigil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Galeria />
      <Footer />
    </div>
  )
}

export default Nosotros