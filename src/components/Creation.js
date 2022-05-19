import React from 'react'
import './Creations.css'
import soccer from '../Images/image-soccer-team.jpg'
import night from '../Images/image-night-arcade.jpg'
import road from '../Images/image-from-above.jpg'
import fisheye from '../Images/image-fisheye.jpg'
import earth from '../Images/image-deep-earth.jpg'
import curiosity from '../Images/image-curiosity.jpg'
import car from '../Images/image-grid.jpg'
import pocket from '../Images/image-pocket-borealis.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Creation() {

    const scroll = ()=>{
        window.scrollTo(0,0)
    }
  return (
    <>
    <div className="creations-headings">
    <h3 id='our'>OUR CREATIONS</h3>
    <button className="btn btn-outline-dark" onClick={scroll}>SEE ALL</button>

    </div>  

    <div className="creations-images">
        <div className="container">
         <div className='row'>
           <div className='col-6'>
           <img ClassName='image' alt='' src={curiosity}/>
           <img ClassName='image' alt='' src={earth}/>
           
           </div>
           <div className='col-6'>
           <img ClassName='image' alt='' src={fisheye}/>
           <img ClassName='image' alt='' src={road}/>
           </div>
         </div>
         <div className='row'>
            <div className="col-6">
            <img ClassName='image2' alt='' src={night}/>
            <img ClassName='image2' alt='' src={soccer}/>
            </div>
            <div className="col-6">
            <img ClassName='image2' alt='' src={car}/>
            <img ClassName='image2' alt=''src={pocket}/>

            </div>
         </div>
        </div>
    </div>  
   <div className="footer">
    <dvi className='row'>
      <div className="col-md-10">
          <h3>loopstudio</h3>
          <ul>
            <li>About</li>
            <li>career</li>
            <li>Event</li>
            <li>products</li>
            <li>Support</li>
          </ul>
      </div>
      <div className="col-md-2 ">
           <FacebookIcon fontSize='large' />
           <InstagramIcon fontSize='large'/>
           <TwitterIcon fontSize='large' />

      </div>
    </dvi>
   </div>
    </>
  )
}

export default Creation