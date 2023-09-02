import React from 'react';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/12.jpg'
import thirteen from '../assets/13.jpg'
import fourteen from '../assets/14.jpg'
import fifteen from '../assets/15.jpg'
import sixteen from '../assets/16.jpg'
import seventeen from '../assets/17.jpg'
import eighteen from '../assets/18.jpg'
import nineteen from '../assets/19.jpg'
import './ImageGrid.css'

const ImageGrid = () => {
    return (
        <div className='container mx-auto mt-5 mb-5'>
            <div className="grid">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img className='four' src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
                <img className='eight' src={eight} alt="" />
                <img src={nine} alt="" />
                <img src={ten} alt="" />
                <img src={eleven} alt="" />
                <img src={twelve} alt="" />
                <img src={thirteen} alt="" />
                <img src={fourteen} alt="" />
                <img src={fifteen} alt="" />
                <img className='sixteen' src={sixteen} alt="" />
                <img src={seventeen} alt="" />
                <img src={eighteen} alt="" />
                <img src={nineteen} alt="" />
            </div>
        </div>
    );
};

export default ImageGrid;