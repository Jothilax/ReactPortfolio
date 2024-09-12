import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faAt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row '>
            <div className='col-12'>
                <br/>
                <h5>Jothi Lakshamanan</h5>
                <hr className='foothr'/>
                <div className='icons'>
                <a href='https://jothilakshmi2162000@gmail.com'>
                <FontAwesomeIcon icon={faAt} size="1x" transform="left-10" /> </a>
                <a href='https://github.com/Jothilax'>
            <FontAwesomeIcon icon={faGithub} size="1x" transform="right-5" /></a>
            <a href='https://www.linkedin.com/in/jothi-lakshmanan-5286b4200'>
            <FontAwesomeIcon icon={faLinkedin}  size="1x" transform="right-20" /></a>
            </div>
                </div>
           


            {/* <div className='col-4'>
                <h3>Jothi</h3>
            </div> */}
            {/* <div className='col-4 icons'>
            <FontAwesomeIcon icon={faAt} size="2x" transform="right-20" /> 
            <FontAwesomeIcon icon={faGithub} size="2x" transform="right-40" />
            {/* <a href='https://github.com/Jothilax'></a> */}
            {/* <Link to=''></Link> */}
            {/* <FontAwesomeIcon icon={faLinkedin}  size="2x" transform="right-60" />

            </div> */} 
            {/* <div className='col-4 location' >
            <span><FontAwesomeIcon icon={faLocationDot} size="2x" transform="right-35" /></span>
            <div className="address">
            <p> 33, Maharaja Nagar, </p>
              <p> Nehru Nagar(west), Kalapatti,</p>
              <p>  Coimbatore-641048.</p>
            </div>
               
            </div> */}
            </div>
        </div>
    );
}

export default Footer;
