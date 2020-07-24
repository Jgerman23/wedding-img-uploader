import React from "react";
import HeaderImg from "../Img/header-img.png";
import Fade from "react-reveal/Fade";

const Header = () => {
	return (
		<div className="img-container">

			<Fade top big>
				<div>
					<img className="mobile-img" src={HeaderImg} alt=""/>
				</div>
			</Fade>
		</div>
	);
};

export default Header;
