import React, { useEffect, useLayoutEffect } from 'react';
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


const Sense3DStruct = () => {
    useLayoutEffect(() => {
        // Get all elements with class 'container1'
        const elements = document.getElementsByClassName('container1');
    
        // Loop through each element and add event listeners
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i];
          console.log(el);
    
          // Get the height and width of the element
          const height = el.clientHeight;
          const width = el.clientWidth;
    
          // Add a listener for the mousemove event
          el.addEventListener('mousemove', handleMove);
    
          // Define function handleMove for each element
          function handleMove(e) {
            const xVal = e.layerX;
            const yVal = e.layerY;
    
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);
            const string =
              'perspective(500px) scale(1) rotateX(' +
              xRotation +
              'deg) rotateY(' +
              yRotation +
              'deg)';
            el.style.transform = string;
          }
    
          // Add listener for mouseout event
          el.addEventListener('mouseout', function () {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
          });
    
          // Add listener for mousedown event
          el.addEventListener('mousedown', function () {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
          });
    
          // Add listener for mouseup event
          el.addEventListener('mouseup', function () {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
          });
        }
      }, []);
    return (
        <>
        
                     
                  
        <div class="container1" id="container1">
        
<img className='one' src={one} alt="" />


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


<div class="container1" id="container1">

<img className='two1' src={two} alt="" />


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


<div class="container1" id="container1">

<img className='three1' src={three} alt="" />


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



<div class="container1 four" id="container1">

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



<div class="container1" id="container1">

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


<div class="container1" id="container1">


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


<div class="container1" id="container1">

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


<div class="container1 eight" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

<img src={fifteen} alt="" />



<div class="overlay" onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
<div class="text">
<h3 className='text-center'>Silence is golden</h3>
<h5 className='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div className="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>


<div class="container1 sixteen" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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


<div class="container1" id="container1">

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
    );
};

export default Sense3DStruct;