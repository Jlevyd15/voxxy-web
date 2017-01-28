import React, { Component } from 'react';
import classnames from 'classnames';

import NavbarContainer from '../../containers/NavbarContainer';
import Navbar from '../Navbar/Navbar';

import FormContainer from '../../containers/FormContainer';
import Form from '../Form/Form';

import ImageShowcaseContainer from '../../containers/ImageShowcaseContainer';
import ImageShowcase from '../ImageShowcase/ImageShowcase';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    const {className, ...props } = this.props;
    return (
      <div>
        <NavbarContainer>
            <Navbar></Navbar>
          </NavbarContainer>
        <div className="background-container">
          

          <div className="container-fluid">
          <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <div className="jumbotron text-center color-white">
          <h1>Hello we are Voxxy!</h1>
          <h4>We're a premier voice design agency. We specialize in building <span className="text-success">voice applications for Amazon Alexa devices.</span></h4>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
          </div>
          </div>
          </div>

        </div>
        <div className="landing__sectionGrey">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                      Panel content
                      Panel content
                      Panel content
                      Panel content
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                      Panel content
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                      Panel content
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
        <div className="background-container">
          <ImageShowcaseContainer>
            <ImageShowcase></ImageShowcase>
          </ImageShowcaseContainer>
        </div>
        <div className="landing__sectionWhite">
          <FormContainer>
          <Form></Form>
        </FormContainer>
        </div>
        
      </div>
    );
  }
}

export default App;
