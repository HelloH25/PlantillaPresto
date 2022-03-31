import React from 'react'

const Productos = (props) => {

    const populares = props.frecuentes
        const Populares = populares.map(({ img, name, value }) => (
                <div className="col-md-6 col-lg-4 wow-outer">
                    <div className="wow fadeInUp">
                        <div className="product-featured">
                            <div className="product-featured-figure"><img src={img} alt="" width="370" height="395" />
                                <div className="product-featured-button"><a className="button button-primary" href="/">order now</a></div>
                            </div>
                            <div className="product-featured-caption">
                                <h4><a className="product-featured-title" href="/">{name}</a></h4>
                                <p className="big">{value}</p>
                            </div>
                        </div>
                    </div>
                </div>

      ))
    return Populares
}

export default Productos