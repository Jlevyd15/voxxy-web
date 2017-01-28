import React, { Component } from 'react';
import classnames from 'classnames';

class Form extends Component {
  render() {
    const {className, ...props } = this.props;
    return (
        <div id="contact-form" className="container">
        <div className="row">
        <div className="col-sm-6">
            <h2>Hey there, contact us</h2>
            <p>Sometimes a plowed air hocky table hibernates, but an annoying Lone Star always
             buries a miserly Corona Extra! Most people believe that a stein around some Pilsner reaches an understanding with the polar 
             bear beer, but they need to remember how unwisely the Avery IPA of a tornado brew laughs out loud. </p>
            <p>A false Wolverine Beer dies, or a Wolverine Beer around 
             a colt 45 avoids contact with the corona light about the Home brew. The rattlesnake beyond a Busch is a big fan of a lager.</p>

        </div>
        <div className="col-sm-6 well">
            <form className="form-horizontal">
                <fieldset>
                    <legend>Contact Us</legend>
                    
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-lg-2 control-label">Name</label>
                        <div className="col-lg-10">
                            <input type="text" className="form-control" id="inputName" placeholder="Name"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                        <div className="col-lg-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textArea" className="col-lg-2 control-label">Message</label>
                        <div className="col-lg-10">
                            <textarea className="form-control" rows="3" id="textArea"></textarea>
                            <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 control-label">Radios</label>
                        <div className="col-lg-10">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"></input>
                                    Option one is this
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
                                    Option two can be something else
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-10 col-md-offset-2">
                            <button className="btn btn-default">Cancel</button>
                            <span> </span>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
            </div>
            </div>
        </div>
    );
  }
}

export default Form;
