import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    const {classNameName, ...props } = this.props;
    return (
    	<div>
    		{props.children}
    	</div>
    );
  }
}

export default Navbar;