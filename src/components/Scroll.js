import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import  css from "./sockerList.module.css"


class CustomScrollbars extends Component {
	render() {
	  return (
		<Scrollbars
		  renderThumbHorizontal={props => (
			<div {...props} className="thumb-horizontal" />
		  )}
	
		  renderThumbVertical={props => (
			<div {...props} className="thumb-vertical" />
		  )}
		  {...this.props}
		/>
	  );
	}
  }
  
  export default CustomScrollbars;