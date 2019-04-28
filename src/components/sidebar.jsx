import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Narender Kumar</a></h1>
              <span class="position"><a href="https://drive.google.com/open?id=1DDgQXsf-u4AbF02T1zgvNjQqgoDhzFk-" target="_blank">Full Stack Developer</a></span>
              <span className="email"><i className="icon-mail"></i>narender.dhull@hotmail.co.uk</span>
              <span className="number"><i className="icon-phone"></i>+91-999-613-6315</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#" data-nav-section="skills">Skills</a></li>
                  <li><a href="#" data-nav-section="experience">Experience</a></li>
                  <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.pintaram.com/u/narender_dhull" target="_blank"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/narenderdhull/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Narender-Dhull" target="_blank"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> */}
                  Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration 
              </small></p>
              {/* <p><small>
                  Automated deployment on gh-pages using Travis-CI
              </small></p> */}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
