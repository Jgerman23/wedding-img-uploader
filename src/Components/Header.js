import React from "react";
import Photo1 from "../Img/Component 1.png";
import Photo2 from "../Img/Component 2.png";
import Photo3 from "../Img/Component 3.png";
import Photo4 from "../Img/Component 4.png";
import Photo5 from "../Img/Component 5.png";
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

			<Fade top big>
				<header></header>
			</Fade>
			<div className="images">
				<Fade left big cascade delay={700}>
					<ul>
						<li>
							<img src={Photo1} alt="" />
						</li>
						<li>
							<img src={Photo2} alt="" />
						</li>
						<li>
							<img src={Photo5} alt="" />
						</li>
						<li>
							<img src={Photo3} alt="" />
						</li>
						<li>
							<img src={Photo4} alt="" />
						</li>
					</ul>
				</Fade>
			</div>
		</div>
	);
};

export default Header;
