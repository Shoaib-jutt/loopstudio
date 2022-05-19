import React from 'react'
import '../../App.css'
import './Navbar.css'
import background from '../../Images/image-hero.jpg'
function Navbar() {
  return (
    < >

      <div className="container-fluid header">
        <div className="row">
          <div className='col-sm-12'>
            <div className=''>
              <div className="row scroll">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12">
                      <nav class="navbar navbar-expand-lg ">
                        <div class="container">
                          <a class="navbar-brand" href="#" id="logo">loopstudio</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto ">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Careers</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Events</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link ">Products</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link ">Support</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h2 id="main-logo">IMMERSIVE EXPERIENCES THAT DELIVER</h2>
                      </div>

                    </div>
                   
                  </div>
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar