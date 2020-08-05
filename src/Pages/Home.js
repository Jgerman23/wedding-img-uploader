import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Container from "../Components/Container";
import Logo from "../Img/logo.svg";

const Home = () => {
	return (
		<div>
			<Container>
				<Zoom delay={200}>
					<div style={{ textAlign: "center", marginTop: "2rem" }}>
						<img src={Logo} alt="" style={{ width: "45%" }} />
					</div>
				</Zoom>
				<Fade bottom>
					<p className="special-font">Dear friends and famliy,</p>
				</Fade>
				<Fade bottom>
					<p className="body-text">
						We announce with great joy that on the morning of August
						8th, we became husband and wife in an intimate ceremony.
						We could not be more excited for this new chapter in our
						lives!
					</p>
				</Fade>
				<Fade bottom>
					<p className="body-text">
						Thank you for all of your love and support that have
						brought us to this wonderful day. Although we would've
						loved to have been surrounded by all of you, please know
						you were in our thoughts and hearts.
					</p>
				</Fade>
				<Fade bottom>
					<div className="right-align" style={{marginBottom: "100px"}}>
						<p className="special-font">
							With Love, <br />
							<span>Gaby & Justin</span>
						</p>
					</div>
				</Fade>
			</Container>
		</div>
	);
};

export default Home;
