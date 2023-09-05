import React, { useState } from 'react';
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'
import six from '../../assets/6.jpg'
import seven from '../../assets/7.jpg'
import eight from '../../assets/8.jpg'
import nine from '../../assets/9.jpg'
import ten from '../../assets/10.jpg'
import eleven from '../../assets/11.jpg'
import twelve from '../../assets/12.jpg'
import thirteen from '../../assets/13.jpg'
import fourteen from '../../assets/14.jpg'
import fifteen from '../../assets/15.jpg'
import sixteen from '../../assets/16.jpg'
import seventeen from '../../assets/17.jpg'
import eighteen from '../../assets/18.jpg'
import nineteen from '../../assets/19.jpg'
import Slide from '../Animations/Slide';

const SlideStruct = ({selectedEffect}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
                     
                  
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={one} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={two} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={three} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div class="container1 four">
<img className='four1' src={four} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={five} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={six} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={seven} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div class="container1 eight">
<img className='eight1' src={eight} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={nine} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={ten} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={eleven} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={twelve} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={thirteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={fourteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={fifteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div class="container1 sixteen">
<img className='sixteen1' src={sixteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={seventeen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={eighteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={nineteen} alt="" />
<Slide>
<div className={`overlay ${isHovered ? 'hovered' : 'not-hovered'} ${
          selectedEffect === 'FadeIn' ? 'fade-in-effect' : 'slide-effect'
        }`}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</Slide>
</div>
</>
    );
};

export default SlideStruct;