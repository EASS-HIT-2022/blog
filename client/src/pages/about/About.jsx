import React from 'react'
import "./sidebar.css";
import ShareLink from 'react-linkedin-share-link'

export default function About() {
    return (
        <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <p>  
          ©yossi shaul
  Computer Science Student at Holon Institute of Technology · 
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW</span>
          <div className="sidebarSocial">
          <ShareLink link='https://www.linkedin.com/in/yossi-shaul-1968a2101/?originalSubdomain=il'>
     {link => (
        <a class="fab fa-linkedin" href={link} target='_blank'></a>
     )}
  </ShareLink>
          
          </div>
        </div>
      </div>
    )
}
