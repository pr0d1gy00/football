import { truncate } from 'fs';
import React, { useEffect } from 'react'
import { useState } from 'react'
import style from 'styled-components';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
const CarouselContainer = style.div`
    width: 100%;
`


const CarouselImg = style.img`
    max-width: 1920px;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: 1s;
    &.loaded{
        opacity: 1;
    }`
;

// const CarouselButtonContainer = style.div`
//     position: absolute;
//     top: 50%;
//     bottom: 50%;
//     display: flex;
//     justify-content: space-between;
// `;

const CarouselButton = style.button`
    background-color: transparent;
    padding: 10px;
    border: none;
    color: white;
    font-size: 5rem;
`
interface CarouselProps {
    images: string[];
    autoplay?: boolean;
    showButtons?: boolean;

}
const Carousel = (props: CarouselProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(props.autoplay){
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            },2500);
            return () => clearInterval(interval);

        }

    })
    const selectNewImage = (index: number, images : string[], next = true) => {
        setLoaded(false);

        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1  : selectedIndex > 0;
            const nextIndex = next ? condition ? selectedIndex + 1 : 0 :  condition ? selectedIndex -1 : images.length -1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
            },500); 
            
        }

    const previous =()=>{
        selectNewImage(selectedIndex, props.images, false);
    }

    const next = ()=>{
        selectNewImage(selectedIndex, props.images);

    }
        return (
            <CarouselContainer>
                <div  className='carousel-container'>
                    <CarouselImg src={selectedImage} alt="carousel" className={loaded ? "loaded" : ""} loading='lazy' onLoad={()=> setLoaded(true)} />
                    {props.showButtons ? 
                        <div className='carousel-container__buttons'>
                            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
                            <CarouselButton onClick={next}>{">"}</CarouselButton>    
                        </div>
                        :
                        null
                    }
                </div>
                
            </CarouselContainer>
        )
    } // Add a closing parenthesis here


export default Carousel
