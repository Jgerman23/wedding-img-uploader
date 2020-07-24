import React from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="nav-container">
			<nav className="nav-bar">
				<Fade top delay={500}>
					<span>GABY & JUSTIN'S WEDDING</span>
				</Fade>
			</nav>
			<div className="nav-links">
				<Fade bottom delay={600}>
					<ul>
						<li>
							<NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink>
						</li>
						<li>
							<NavLink activeClassName="is-active" to="/photos">Gallery</NavLink>
						</li>
						<li>
							<NavLink activeClassName="is-active" to="/wordsofwisdom">Words of Wisdom</NavLink>
						</li>
					</ul>
				</Fade>
			</div>
		</div>
	);
};

export default Navbar;
