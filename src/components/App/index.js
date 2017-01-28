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
          <h1 className="font-weight-bold">Hello, we are Voxxy!</h1>
          <h4><p><span className="text-success font-weight-bold">We're a premier voice design agency. We specialize in building voice applications for Amazon Alexa enabled devices.</span></p></h4>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
          </div>
          </div>
          </div>

        </div>
        <div className="landing__sectionGrey">
          <div className="container">
            <h2>From our blog</h2>
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                  <p>
                    A greasy Heineken
                    A Pilsner Urquell starts reminiscing about a lost buzz, but a mean-spirited grizzly beer dances with a paternal Amarillo Pale Ale. An ice house around a Keystone is financial. 
                    The lover for a Pilsner ceases to exist, or a most difficult Pilsner Urquell unwisely gives lectures on morality to the hammered Ipswich Ale.
                  </p>
                  <button className="btn btn-success">Check it out</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                      <p>
                        A greasy Heineken
                        A Pilsner Urquell starts reminiscing about a lost buzz, but a mean-spirited grizzly beer dances with a paternal Amarillo Pale Ale. An ice house around a Keystone is financial. 
                        The lover for a Pilsner ceases to exist, or a most difficult Pilsner Urquell unwisely gives lectures on morality to the hammered Ipswich Ale.
                      </p>
                      <button className="btn btn-success">Check it out</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">Panel info</h3>
                  </div>
                  <div className="panel-body">
                      <p>
                        A greasy Heineken
                        A Pilsner Urquell starts reminiscing about a lost buzz, but a mean-spirited grizzly beer dances with a paternal Amarillo Pale Ale. An ice house around a Keystone is financial. 
                        The lover for a Pilsner ceases to exist, or a most difficult Pilsner Urquell unwisely gives lectures on morality to the hammered Ipswich Ale.
                      </p>
                      <button className="btn btn-success">Check it out</button>
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
