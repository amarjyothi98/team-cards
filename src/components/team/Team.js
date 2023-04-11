import React from 'react'
import  './team.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Team() {
  return (
    <>
    <h1>Our Team</h1>
        <div className="main-wrapper">
        
        <div className="team-card">
                <div className="bg-img">
                    <img src="/assets/raja.png" alt="" />
                </div>
                <div className="pic">
                    <img src="/assets/UtkarshGS.jpeg" alt="" />
                </div>
                <div className="info">
                    <h3>Utkarsh Singh</h3>
                    <span>Joint Secretary</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint debitis et deleniti nulla animi modi minima quod dignissimos illum.</p>
                    <div className="icons">
                        <a href=""><LinkedInIcon/></a>
                        <a href=""><EmailIcon/></a>
                        <a href=""><InstagramIcon/></a>
                    </div>
                </div>
            </div>
          
        </div>
        
        <section className="team-container">

            <div className="team-card">
                <div className="bg-img">
                    <img src="/assets/elephant.png" alt="" />
                </div>
                <div className="pic">
                    <img src="/assets/Rohit.jpeg" alt="" className='img-rohit' />
                </div>
                <div className="info">
                    <h3>Rohit Kumar Singh</h3>
                    <span>Joint Secretary</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint debitis et deleniti nulla animi modi minima quod dignissimos illum.</p>
                    <div className="icons">
                        <a href=""><LinkedInIcon/></a>
                        <a href=""><EmailIcon/></a>
                        <a href=""><InstagramIcon/></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="bg-img">
                    <img src="/assets/palace.png" alt="" />
                </div>
                <div className="pic">
                    <img src="/assets/Gaurav.jpeg" alt="" />
                </div>
                <div className="info">
                    <h3>Gaurav Malik</h3>
                    <span>Joint Secretary</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint debitis et deleniti nulla animi modi minima quod dignissimos illum.</p>
                    <div className="icons">
                        <a href=""><LinkedInIcon/></a>
                        <a href=""><EmailIcon/></a>
                        <a href=""><InstagramIcon/></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="bg-img">
                    <img src="/assets/queen.png" alt="" />
                </div>
                <div className="pic">
                    <img src="/assets/Chanchal.jpg" alt="" />
                </div>
                <div className="info">
                    <h3>Chanchal Malik</h3>
                    <span>Joint Secretary</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint debitis et deleniti nulla animi modi minima quod dignissimos illum.</p>
                    <div className="icons">
                        <a href=""><LinkedInIcon/></a>
                        <a href=""><EmailIcon/></a>
                        <a href=""><InstagramIcon/></a>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="bg-img">
                    <img src="/assets/fort.png" alt="" />
                </div>
                <div className="pic">
                    <img src="/assets/adityaJs.png" alt="" />
                </div>
                <div className="info">
                    <h3>Aditya Gupta</h3>
                    <span>Joint Secretary</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint debitis et deleniti nulla animi modi minima quod dignissimos illum.</p>
                    <div className="icons">
                        <a href=""><LinkedInIcon/></a>
                        <a href=""><EmailIcon/></a>
                        <a href=""><InstagramIcon/></a>
                    </div>
                </div>
            </div>

        </section>
   
    </>
  )
}
