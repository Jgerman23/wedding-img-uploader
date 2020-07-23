import React from "react";
import Fade from "react-reveal/Fade";

const Navbar = () => {
	return (
		<div className="nav-container">
			<nav className="nav-bar">
				<Fade top delay={500}>
					<span>The German Wedding</span>
				</Fade>
			</nav>
			<div className="nav-links">
				<Fade bottom delay={600}>
					<ul>
						<li>Home</li>
						<li>Photos</li>
						<li>Words of Wisdom</li>
					</ul>
				</Fade>
			</div>
		</div>
	);
};

export default Navbar;
