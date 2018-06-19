import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
	render() {
		return(
			<div>
				<ul className="nav-bar">
					<li className="nav-item nav-name">HG</li>
					<li className="nav-item nav-last"><a href="#contact" className="nav-link">Contact</a></li>
					<li className="nav-item"><a href="#tutorials" className="nav-link">Tutorials</a></li>
					<li className="nav-item"><a href="#about" className="nav-link">About</a></li>
					<li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
				</ul>
			</div>
		)
	}
}

export default Navbar;