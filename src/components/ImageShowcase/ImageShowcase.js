import React, { Component } from 'react';
import classnames from 'classnames';

var imagePanelStyle = {
    height: "180px;",
    width: "100%;",
    display: "block;"
}

class ImageShowcase extends Component {
    render() {
        const {classNameNameName, ...props } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 color-white">
                        <h3>Our Latest Projects</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-6">
                        <a href="#" className="thumbnail"> <img alt="100%x180" data-src="holder.js/100%x180" src="/images/img-placeholder.svg" data-holder-rendered="true" style={imagePanelStyle}/> </a>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <a href="#" className="thumbnail"> <img alt="100%x180" data-src="holder.js/100%x180" src="/images/img-placeholder.svg" data-holder-rendered="true" style={imagePanelStyle}/> </a>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <a href="#" className="thumbnail"> <img alt="100%x180" data-src="holder.js/100%x180" src="/images/img-placeholder.svg" data-holder-rendered="true" style={imagePanelStyle}/> </a>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <a href="#" className="thumbnail"> <img alt="100%x180" data-src="holder.js/100%x180" src="/images/img-placeholder.svg" data-holder-rendered="true" style={imagePanelStyle}/> </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageShowcase;