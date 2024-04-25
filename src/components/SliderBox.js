import React from "react";
import '../styleSheets/ImagesHeader/SliderBox.css';
import imagenM from '../images/imagenM.avif';
import modelo from '../images/modelo.avif';

export function SliderBox(){
    return(
        <div className='slider-box'>
            <ul>
                <li>
                    <img src={imagenM} alt=''/>
                </li>
                <li>
                    <img src={modelo} alt=''/>
                </li>
            </ul>
        </div>
    );
};
