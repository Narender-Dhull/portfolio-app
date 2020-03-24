import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        		<section class="colorlib-contact" data-section="contact">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Get in Touch</span>
							<h2 class="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-info-large-outline"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="#">narender.dhull@hotmail.co.uk</a></p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-map"></i>
								</div>
								<div class="colorlib-text">
									<p>Sector 15, Gurgaon. Pin code 122001.</p>
								</div>
							</div>
							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-phone"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="tel://">+91 9996136315</a></p>
								</div>
							</div>
						</div>	
                        <div class="col-md-7 col-md-push-1">
							<div class="row">
								<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
									<i class="icon-download"></i>
								</div>
								<div class="colorlib-text">
                  <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1DDgQXsf-u4AbF02T1zgvNjQqgoDhzFk-" target="_blank">Download resume <i className="icon-download4" /></a></p>
								</div>
							 </div>
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
