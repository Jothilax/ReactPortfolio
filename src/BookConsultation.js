import React from 'react';
import './Book.css';

function BookConsultation(){
    return (
        <div className='sec7'>
            <div className='sec7content'>

           
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
    );
}

export default BookConsultation;
