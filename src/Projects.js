import React from 'react';
import './Projects.css';
import baby from './babyshop.png';
import baby2 from './baby2.png';
import baby3 from './baby3.png';
import baby4 from './baby4.png';
import bikerental from './bikerental.png';
import bike2 from './bike2.png';
import bike3 from './bike3.png';
import bike4 from './bike4.png';
import bike5 from './bike5.png';
import Breelewis from './BreeLewis-Still-2.jpg';

function Project() {
    return (
        <div className='project'>
           <h1 className='projecth1'>Case Studies</h1>
           <h2 className='projecth2'>Baby Shop</h2>
           <div className='projectcontent'>
    <p className='projectp'>Baby Bootique is the shopping store for kids & baby products. Baby care products are available in Baby Bootique at Coimbatore, Tamilnadu. Buy baby care products toys, diapers, clothes, footwear, strollers, car seats, furniture and more with care and love. We are thrilled to provide the current generation of modern Indian parents with the opportunity to access the best in pregnancy, infant-care and mother-care products at an affordable price.</p>
<h6>Link : <a href='https://jothilax.github.io/Babyshop/'>https://jothilax.github.io/Babyshop/</a></h6>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={baby} alt="baby" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={baby2} alt="baby2"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={baby3} alt="baby3"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={baby4} alt="baby4"  className="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>


{/* project 2 */}

<h2 className='projecth2'>Bike Rental System</h2>
<div className='projectcontent'>
<p className='projectp'>Bike rental apps come equipped with a range of features that make the rental process convenient and user-friendly. These features are designed to enhance the user experience and ensure smooth and seamless bike rental transactions. One of the key features of bike rental apps is real-time bike availability. Users can check the availability of bikes near their location, as well as reserve or book a bike in advance. This ensures that users have access to bikes whenever they need them, without having to physically check bike rental stations for availability.</p>
<h6>Link : <a href='https://wonderful-creponne-76a75e.netlify.app/'>https://wonderful-creponne-76a75e.netlify.app/</a></h6>
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bikerental} alt="bikerental" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={bike2} alt="bike2"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={bike3} alt="bike3"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={bike4} alt="bike4"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={bike5} alt="bike5"  className="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
           </div>

           {/* Project 3 */}

           <h2 className='projecth2'>Online Food Ordering System</h2>
           <div className='projectcontent'>
           <p className='projectp'>Online Food Ordering System project is aimed at developing a complete online food ordering system for use in the food service industry which will allow the restaurants to quickly and easily manage an online menu which customer can browse and use to place orders with just a few clicks.</p>

    {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={baby} alt="baby" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={bikerental} alt="bikerental"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
    <img src={bikerental} alt="bikerental"  className="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
           </div>

        </div>
    );
}

export default Project;
