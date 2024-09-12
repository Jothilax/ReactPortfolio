import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import Project from './Projects';
import BookConsultation from './BookConsultation';

function Nav() {
    return(
        <>
      <nav>
      <div class="row">
      <div class="head col-md-8 col-sm-8 col-xs-8">
      <Link to='/home'><h2><i>Jothi Lakshamanan</i></h2></Link>
      </div>
    <div class="proj col-md-2 col-sm-2 col-xs-2 ">
    <Link to='/projects'><h5><i>Projects</i></h5></Link>
    </div>
    <div class="book col-md-2 col-sm-2 col-xs-2 ">
    <Link to='/book'><button>Contact</button> </Link>
    </div>
   </div>
  </nav>
  <hr/>
          </>
  );
  
}

export default Nav;
