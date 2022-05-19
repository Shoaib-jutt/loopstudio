import React from 'react'
import Navbar from './pages/Navbar'
import banner from '../Images/image-interactive.jpg'
import './Header.css'
function Header() {
  return (
    <>
      <Navbar />
    
    <div className="center">
      
      <img src={banner} className="banner" alt=''/>
      <div className="banner-typography">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
         </div>
         </div>
        
     
        

      

      {/* <img src={banner} className="banner" alt=''/>

         <div className="banner-typography">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
         </div>
       </div> */}


    </>
  )
}

export default Header