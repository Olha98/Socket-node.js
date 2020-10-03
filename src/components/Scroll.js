import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';



class CustomScrollbars extends Component {
	render() {
	  return (
		<Scrollbars
		  renderThumbHorizontal={props => (
			<div {...props} />
		  )}
	
		  renderThumbVertical={props => (
			<div {...props} />
		  )}
		  {...this.props}
		/>
	  );
	}
  }
  
  export default CustomScrollbars;