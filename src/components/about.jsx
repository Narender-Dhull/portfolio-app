import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hey! in case we are meeting for the first time, I am Narender Kumar, I am a professional software developer with 8.0 years of exposure in software systems analysis, design, and development.  I have hands-on experience in Microservices Architecture, Rest API, MVC, Net Core, LINQ, Node js, React, Redux loop, Entity Framework, SQL Server, Rx Stream. </p>
                    <p>I have domain expertise encompasses Foreign Exchange, Banking, and Finance.</p>
                    <p>Apart from coding, I enjoy swimming and listen to music. I am die hard movie fan. I occasionally love to read a novel or a random article. I love tea over coffee, prefer to watch Big Bang Theory over Friends. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Design Patterns/Principles</h3>
                    <p>SOLID, DRY, GoF and Concurrency Types of Design Patterns</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-microphone" />
                </span>
                <div className="desc">
                    <h3>Architecture</h3>
                    <p>MVC(Model-View-Controller), Microservices, MV*</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-reply2" />
                </span>
                <div className="desc">
                    <h3>Services</h3>
                    <p>WCF, Rest API, <br/> Web Services.</p>
                </div>
                </div>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-paper-stack" />
                </span>
                <div className="desc">
                    <h3>Language</h3>
                    <p>C#, React Js, Redux loop,<br/> Node Js </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-book" />
                </span>
                <div className="desc">
                    <h3>Frameworks</h3>
                    <p>Framework 3.5  4.0,<br/> Dot Net core</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Others</h3>
                    <p>Ajax, Jquery, Nuget Package, Swagger, Open API, Middleware</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
