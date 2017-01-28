import React, { Component } from 'react';


class NavbarContainer extends Component {
  render() {
    const {className, ...props } = this.props;
    return (
    	<div>
    		<nav className="navbar navbar-default navbar-static-top zero-margin-bottom">
		  <div className="container-fullwidth">

		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="brand-font navbar-brand" href="#">Voxxy</a>
		    </div>


		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li className="active"><a href="#">About<span className="sr-only">(current)</span></a></li>
		        <li><a href="#">Blog</a></li>
		        <li><a href="#">Podcasts</a></li>
		        <li><a href="#contact-form">Contact</a></li>
		        <li className="dropdown">
		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Our Services <span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><a href="#">Custom Alexa Skills</a></li>
		            <li><a href="#">Consultation</a></li>
		            <li><a href="#">Voice Design</a></li>
		            <li role="separator" className="divider"></li>
		            <li><a href="#">Separated link</a></li>
		            <li role="separator" className="divider"></li>
		            <li><a href="#">One more separated link</a></li>
		          </ul>
		        </li>
		      </ul>
		      <ul className="nav navbar-nav navbar-right">
		        <li><a href="#">Link</a></li>
		        <li className="dropdown">
		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><a href="#">Action</a></li>
		            <li><a href="#">Another action</a></li>
		            <li><a href="#">Something else here</a></li>
		            <li role="separator" className="divider"></li>
		            <li><a href="#">Separated link</a></li>
		          </ul>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
    	</div>
    );
  }
}

export default NavbarContainer;