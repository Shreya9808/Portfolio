import React from 'react'
import image from '../assests/0.jpg'
import About from './About';
import Exp from './Exp';
import Contact from './Contact';
import Projec from './Projec';


const Home = () => {
  return (
    <div>
     

    <div className='row' style={{height:"100px"}}></div>

     <div className='row'>
      <div className='col-md-5' >

        <div style={{marginLeft:"50px", marginTop:"50px"}}>
        <h1 style={{marginBottom:"25px"}}>Hi, I'm Shreya</h1>
        <p>Motivated IT graduate with hands-on experience in React.js, JavaScript, HTML, and CSS, with knowledge of Python and Django. Reach out if you’re like to learn more.
        </p>
        <button className='btn btn-custom'>
        <a 
        href="/shreyaresume@111.pdf"  
        download="shreyaresume@111.pdf" 
        style={{ color: 'white', textDecoration: 'none' }}
       >
       Download Resume
      </a>
      </button>


        
        </div>
      </div>


      <div className='col-md-3'></div>



      <div className='col-4'>
        <img src={image} alt="profile" style={{width:"260px", height:"250px", borderRadius:"50%",marginTop:"12px"}} />
        
      </div>


     </div>





<div className='row'>
  <div className='col'>
    <About />
  </div>
</div>

<div className='row'>
  <div className='col'>
    <Exp />
  </div>
</div>

<div className='row'>
  <div className='col'>
    <Projec />
  </div>
</div>

<div className='row'>
  <div className='col'>
    <Contact />
  </div>
</div>









    </div>
  )
}

export default Home;
