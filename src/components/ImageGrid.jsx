import React, { useState } from 'react';
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
import FadeIn from './Animations/FadeIn';
import FadeInStruct from './AnimationStructures/FadeInStruct';
import ZoomIn from './Animations/ZoomIn';
import ZoomInStruct from './AnimationStructures/ZoomInStruct';
import FadeOutStruct from './AnimationStructures/FadeOutStruct';
import SwipeStruct from './AnimationStructures/SwipeStruct';
import SlideStruct from './AnimationStructures/SlideStruct';
import SlideOverStruct from './AnimationStructures/SlideOverStruct';
import ZoomOutStruct from './AnimationStructures/ZoomOutStruct';
import ShakeStruct from './AnimationStructures/ShakeStruct';
import Sense3DStruct from './AnimationStructures/Sense3DStruct';
import TransStruct from './AnimationStructures/TransStruct';
import FlipStruct from './AnimationStructures/FlipStruct';
import FlipInStruct from './AnimationStructures/FlipInStruct';
import FlipOutStruct from './AnimationStructures/FlipOutStruct';
import BubbleStruct from './AnimationStructures/BubbleStruct';
import BouncInStruct from './AnimationStructures/BouncInStruct';
import BouncOutStruct from './AnimationStructures/BounceOutStruct';
import FlipForwardStruct from './AnimationStructures/FlipForwardStruct';
import FlipBackwardStruct from './AnimationStructures/FlipBackwardStruct';
import BlindsStruct from './AnimationStructures/BlindsStruct';
import BlocksStructure from './AnimationStructures/BlocksStructure';

const ImageGrid = ({selectedEffect}) => {
    const [isHovered, setIsHovered] = useState(false);
    let animationComponent;
    if(selectedEffect){
      console.log(selectedEffect);
        switch(selectedEffect){
            case 'FadeIn':
             animationComponent = (
                 <FadeInStruct isHovered={isHovered} setIsHovered={setIsHovered} selectedEffect={selectedEffect}></FadeInStruct>
               
               );
               break;
            case "ZoomIn":
                animationComponent=(
                   <ZoomInStruct></ZoomInStruct>

                );
                break;
            case 'FadeOut':  
            animationComponent=(
              <FadeOutStruct isHovered={isHovered} setIsHovered={setIsHovered} selectedEffect={selectedEffect}></FadeOutStruct>
            );
            break;
            case "Swipe":
             animationComponent=(
              <SwipeStruct selectedEffect={selectedEffect}></SwipeStruct>
             )
             break;
            case "Slide":
              animationComponent=(
                <SlideStruct selectedEffect={selectedEffect}></SlideStruct>
              );
              break;
              case "SlideOver":
                animationComponent=(
                  <SlideOverStruct selectedEffect={selectedEffect}></SlideOverStruct>
                );
                break;
              case "ZoomOut":
                animationComponent=(
                  <ZoomOutStruct></ZoomOutStruct>
                );
                break;
              case "Shake":
                animationComponent=(
                  <ShakeStruct></ShakeStruct>
                );
                break;
              case "Sense3D":
                animationComponent=(
                  <Sense3DStruct></Sense3DStruct>
                );
                break;
              case "Trans":
                animationComponent=(
                  <TransStruct></TransStruct>
                );
                break;
              case "Flip":
                animationComponent=(
                  <FlipStruct selectedEffect={selectedEffect}></FlipStruct>
                );
                break;
              case "FlipIn":
                animationComponent=(
                  <FlipInStruct selectedEffect={selectedEffect}></FlipInStruct>
                );
                break;
              case "FlipOut":
                animationComponent=(
                  <FlipOutStruct selectedEffect={selectedEffect}></FlipOutStruct>
                );
                break;
              case "Bubble":
                animationComponent=(
                  <BubbleStruct selectedEffect={selectedEffect}></BubbleStruct>
                );
                break;
              case "BounceIn":
                animationComponent=(
                  <BouncInStruct selectedEffect={selectedEffect}></BouncInStruct>
                );
                break;
              case "BounceOut":
                animationComponent=(
                  <BouncOutStruct selectedEffect={selectedEffect}></BouncOutStruct>
                );
                break;
              case "FlipForward":
                animationComponent=(
                  <FlipForwardStruct selectedEffect={selectedEffect}></FlipForwardStruct>
                );
                break;
              case "FlipBackward":
                animationComponent=(
                  <FlipBackwardStruct selectedEffect={selectedEffect}></FlipBackwardStruct>
                );
                break;
              case "Blinds":
                animationComponent=(
                  <BlindsStruct selectedEffect={selectedEffect}></BlindsStruct>
                );
                break;
              case "Blocks":
                animationComponent=(
                  <BlocksStructure selectedEffect={selectedEffect}></BlocksStructure>
                )


     
         }
    }
    else{
        animationComponent=(
            <>
            <div class="container1">
            <img src={one} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={two} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={three} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1 four">
            <img className='four1' src={four} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={five} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={six} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={seven} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1 eight">
            <img className='eight1' src={eight} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={nine} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={ten} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={eleven} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={twelve} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={thirteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={fourteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={fifteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1 sixteen">
            <img className='sixteen1' src={sixteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={seventeen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={eighteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
<div class="container1">
            <img src={nineteen} alt="" />
  <div class="overlay">
    <div class="text">
    <h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
    </div>
  </div>
</div>
</>   
        )
    }
    
    return (
        <div className='container d-flex justify-content-center mt-5 mb-5'>
            <div className="grid mb-5">
      
                {animationComponent}
              
            </div>
        </div>
    );
};

export default ImageGrid;