import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className="page-footer center">
				<div className="container">
					<div className="developed-by">
						Developed with{" "}
						<span role="img" aria-label="heart">
							♥️
						</span>{" "}
						by{" "}
						<a
							href="https://justingerman.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Justin German
						</a>
					</div>
					<div className="footer-content">&copy; 2020</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
