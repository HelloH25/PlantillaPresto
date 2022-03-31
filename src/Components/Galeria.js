
import React, { useState } from 'react'
import galeria from '../images/galeria/galeria';
import Modal from './Modal';

const Galeria = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        const totalLength = galeria.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = galeria[0].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = galeria.filter((src) => {
            return galeria.indexOf(src) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = galeria.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = galeria[totalLength - 1].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = galeria.filter((src) => {
            return galeria.indexOf(src) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <div className='wrapper'>

                {galeria.map(({ src, thumbnail, caption }, index) => (
                    <div key={index} className="wrapper-images">
                        <img
                            className='galeria'
                            src={thumbnail}
                            alt={caption}
                            onClick={() => handleClick(thumbnail, index)} />

                    </div>
                ))
                }
            <div>
                <div>
                    {clickedImg && (
                        <Modal
                            clickedImg={clickedImg}
                            handelRotationRight={handelRotationRight}
                            setClickedImg={setClickedImg}
                            handelRotationLeft={handelRotationLeft}
                        />
                    )}
                </div>
            </div>
        </div>


    )
}



export default Galeria