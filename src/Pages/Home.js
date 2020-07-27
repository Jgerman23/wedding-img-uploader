import React from "react";
import Fade from "react-reveal/Fade";
import Container from "../Components/Container";
import Logo from "../Img/logo.svg";

const Home = () => {
	return (
		<div>
			<Container>
				<Fade top big>
					<div style={{ textAlign: "center", marginTop: "2rem" }}>
						<img src={Logo} alt="" style={{ width: "45%" }} />
					</div>
				</Fade>
				<Fade bottom delay={500}>
					<p className="special-font">Dear friends and famliy,</p>
				</Fade>
				<Fade bottom delay={500}>
					<p className="body-text">
						We announce with great joy that on the morning of August
						8th, we became husband and wife in a private ceremony.
						We could not be more excited for this new chapter in our
						lives!
					</p>
				</Fade>
				<Fade bottom delay={500}>
					<p className="body-text">
						Thank you for all of your love and support that has
						brought us to this wonderful day. Although we would have
						loved to have been surrounded by all of you, please know
						you were in our thoughts and hearts.
					</p>
				</Fade>
				<p className="body-text"></p>
			</Container>
		</div>
	);
};

export default Home;
