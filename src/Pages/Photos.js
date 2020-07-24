import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import firebase, { auth, provider, storage } from "../firebase";
import Container from "../Components/Container";
import example1 from "../Img/example1.jpg";
import example2 from "../Img/example2.jpg";

class Photos extends Component {
	constructor() {
		super();
		this.state = {
			iterms: [],
			image: null,
			url: "",
			progress: 0,
		};
	}
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12 m4">
							<Zoom>
								<div className="card blue-grey darken-1">
									<div className="card-content white-text">
										<span className="card-title">
											Upload a Photo
										</span>
										<p>
											I am a very simple card. I am good
											at containing small bits of
											information. I am convenient because
											I require little markup to use
											effectively.
										</p>
									</div>
									<div className="card-action">
										<div className="btn-container">
											<div className="button-wrapper">
												<label
													className="label-btn"
													htmlFor="upload"
												>
													<i className="fas fa-upload"></i>
													&nbsp; Upload
												</label>
												<input
													id="upload"
													type="file"
												/>
											</div>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
				<Container>
					<h2>Photos</h2>
					<div className="gallery">
						<div className="gallery-items">
							<img
								className="wedding-img"
								src={example1}
								alt=""
							/>
							<img
								className="wedding-img"
								src={example2}
								alt=""
							/>
							<img
								className="wedding-img"
								src={example1}
								alt=""
							/>
							<img
								className="wedding-img"
								src={example2}
								alt=""
							/>
							<img
								className="wedding-img"
								src={example1}
								alt=""
							/>
							<img
								className="wedding-img"
								src={example2}
								alt=""
							/>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default Photos;
