import { faIceCream, faUtensils, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Platos, Bebidas, Postres } from "../data/data"


const Menu = () => {

    const [clickedImg, setClickedImg] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (img, index) => {
        setCurrentIndex(index);
        setClickedImg(img);
    };

    const itemsMenu = (productos) => {

        const Menu = productos.map(({ img, name, value }, index) => (
            <div>
                <div class="box-event-modern">

                    <div className="event-item-modern articulo">
                        <div id='imgArticulo'>
                            <img src={img} width="200px" height="100px" alt='imagenes'
                                onClick={() => handleClick(img, index)} />
                        </div>

                        <div id='desArticulo'>

                            <p className="event-time">{value}</p>
                            <h4 className="event-item-modern-title"><a href="/">{name}</a></h4>
                            <div className="event-item-modern-text">
                                <p>The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return <>
            {Menu}
            <div>
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        setClickedImg={setClickedImg}

                    />
                )}
            </div>
        </>
    }

    return (
        <div>
            <section className="section section-lg bg-gray-1">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>

                            <h4>


                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center TabMenu">
                                    <Tab eventKey="home" title={<FontAwesomeIcon icon={faUtensils} />}>
                                        <div className="row row-20 row-lg-30">
                                            {itemsMenu(Platos)}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title={<FontAwesomeIcon icon={faWineGlass} />}>
                                        <div className="row row-20 row-lg-30">
                                            {itemsMenu(Bebidas)}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title={<FontAwesomeIcon icon={faIceCream} />}>
                                        <div className="row row-20 row-lg-30">
                                            <br />
                                            {itemsMenu(Postres)}
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

const Modal = ({ clickedImg, setClickedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return<div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
            x
        </span>
    </div>

}

export default Menu