import { faIceCream, faPlateWheat, faUtensils, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Frecuentes from '../images/Frecuentes'
import Productos from './Productos'

const Menu = () => {

    const platos = Frecuentes.map(({ img, name, value }) => (
        <div>
            <div class="box-event-modern">

                <div className="event-item-modern articulo">
                    <div id='imgArticulo'>
                        <img src={img} width="100px" />
                    </div>
                    <div id='desArticulo'>

                        <p className="event-time">{value}</p>
                        <h4 className="event-item-modern-title"><a href="#">{name}</a></h4>
                        <div className="event-item-modern-text">
                            <p>The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            <section className="section section-lg bg-gray-1">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>

                            <h4>


                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center TabMenu">
                                    <Tab eventKey="home" title={<FontAwesomeIcon icon={faUtensils}/>}>
                                        <div className="row row-20 row-lg-30">
                                            {platos}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title={<FontAwesomeIcon icon={faWineGlass}/>}>
                                        <div className="row row-20 row-lg-30">
                                            {platos}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title={<FontAwesomeIcon icon={faIceCream}/>}>
                                        <div className="row row-20 row-lg-30">
                                            <br />
                                            {platos}
                                        </div>
                                    </Tab>
                                </Tabs>
                            </h4>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu