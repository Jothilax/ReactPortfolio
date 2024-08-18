import React from 'react';
import './Home.css';
import pic from './mypic.jpg';
import pic2 from './pic2.jpg';
import Breelewis from './pic3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp,faUsers} from '@fortawesome/free-solid-svg-icons';
import { faGratipay} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import baby from './babyshop.png';
import bikerental from './bikerental.png';
import Breelewis2 from './BreeLewis-Still-2.jpg';


function Home(){
    return (
        <>
        <div>
        <div className='sec1'>
            <div className='content'>
                <p className='sec1p'>Hey, I'm Jothi</p>
                <h1>I help small businesses and entrepreneurs build meaningful digital experiences. </h1>
                <button type="button" href="#">Work with Me</button>
            </div>
            <div className='image'>
                <img src={pic2} alt="Pic1" className='img1'/>
            </div>

        </div>
        <div className='sec2'>
        <div className='sec2-image'>
        <img src={Breelewis} alt="Pic2" className='img2' />
        </div>
        <div className='sec2-content'>
            <h1>My Approach</h1>
            <h2>Collaborative</h2>
            <p className='sec2p'>I believe in the power of collaboration to create exceptional websites. As an extension of your team, I immerse myself in your vision and goals. I work closely with you to develop a website that not only reflects your brand but exceeds your expectations.</p>
            <h2>Iterative</h2>
            <p className='sec2p'>I take an iterative approach in my work to ensure the final result aligns with your creative vision and reflects your unique brand identity. We’ll work together to refine and fine-tune your site’s design, leaving no detail overlooked.</p> 
            
            
        </div>
        </div>

        <div className='sec3'>
        <div className='sec3-card'>
        <FontAwesomeIcon icon={faCloudArrowUp} size = '9x'   className='icon'/>
        <h5>Over 5 Websites Made</h5>
        <p>For 4 happy clients</p>
        </div>
        <div className='sec3-card'>
        <FontAwesomeIcon icon={faGratipay} size = '9x'  className='icon'/>
        <h5>2+ years of Design Experiences</h5>
        <p>Across web, mobile and prints</p>
        </div>
        <div className='sec3-card'>
        <FontAwesomeIcon icon={faUsers} size = '8x'  className='icon'/>
        <h5>Community Advocate</h5>
        <p>For a more inclusive world</p>
        </div>
        </div>
        <div  className='sec4-heading'><h1>Case Studies</h1></div>
        <div className='sec4'>
          {/* <div></div> */}
          
        <div className='sec4-card'>
        <h1>Baby Shop</h1>
        <p>Baby Bootique is the shopping store for kids & baby products. Baby care products are available in Baby Bootique at Coimbatore, Tamilnadu. Buy baby care products toys, diapers, clothes, footwear, strollers, car seats, furniture and more with care and love. We are thrilled to provide the current generation of modern Indian parents with the opportunity to access the best in pregnancy, infant-care and mother-care products at an affordable price.</p>
        <Link to='/porject'><h5>View Project</h5></Link>
        </div>
        <div className='sec4-card'>
        <h1>Bike Rental System</h1>
        <p>Bike rental apps come equipped with a range of features that make the rental process convenient and user-friendly. These features are designed to enhance the user experience and ensure smooth and seamless bike rental transactions. One of the key features of bike rental apps is real-time bike availability. Users can check the availability of bikes near their location, as well as reserve or book a bike in advance. This ensures that users have access to bikes whenever they need them, without having to physically check bike rental stations for availability.</p>
        <Link to='/porject'><h5>View Project</h5></Link>
        </div>
        <div className='sec4-card'>
        <h1>Service CRM</h1>
        <p>Customer relationship management (CRM) is a system for managing all of your company’s interactions with current and potential customers. The goal is simple: improve relationships to grow your business. CRM technology helps companies stay connected to customers, streamline processes, and improve profitability. When people talk about CRM, they’re usually referring to a CRM system: software that helps track each interaction you have with a prospect or customer. That can include sales calls, customer service interactions, marketing emails, and more.</p>
        <Link to='/porject'><h5>View Project</h5></Link>
        </div>
        </div>



    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={baby} alt="baby" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={bikerental} alt="bikerental"  className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={Breelewis} alt="Pic2" className="d-block w-100" />
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
<hr/>
<div className='sec5'>
    <div className='content1'>
    <h1>What Clients are Saying</h1>
<p>"Jothi is so patient and thoughtful. She helped me highlight my work in a way that makes me so proud of my unique approach to design."</p>
    </div>
    <div className='content2'>
    <p>"Being an e-commerce entrepreneur isn't easy, and Jothi gave my products the design direction they needed to become bestsellers."</p>
    </div>

</div>
<hr/>
    <div className='sec6'>
        <div className='sec6-content'>
            <h1>Get in Touch!</h1>
            <p>Schedule a free 1:1 introductory session with me to discuss your web design needs.</p>
        </div>
        <div className='sec6-img'>
        <img src={Breelewis2} alt="Pic2" />
        </div>
    </div>

    <div className='sec7'>
    <h1>Subscribe for Exclusive Updates </h1>
    <form class="row g-3">
        <div className='formcontent'>
            <div class="row">
            <div class="col-md-4">
  <label for="Fname" class="form-label">First Name</label>
  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>

  </div>
  <div class="col-md-4">
  <label for="Lname" class="form-label">Last Name</label>
  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
            </div>
            <br/>
            <div class="row">
            <div class="col-8">
    <label for="Email" class="form-label">Email</label>
    <input type="email" class="form-control" id="Email" placeholder="Email"/>
  </div>
            </div>
            <br/>
            <div class="row">
            <div class="col-8">
    <button type="submit" class="btn btn-primary">Subscribe</button>
  </div>
            </div>
  
  
        </div>
  
</form>
    </div>
    </div>
        </>
    );
}

export default Home;
