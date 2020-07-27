import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import firebase, { storage } from "../firebase";
import Container from "../Components/Container";

class Photos extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			image: null,
			url: "",
			progress: 0,
		};
		this.handleImgChange = this.handleImgChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const itemsRef = firebase.database().ref("items");
		itemsRef.on("value", (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for (let item in items) {
				newState.push({
					id: item,
					image: items[item].image,
					url: items[item].url,
				});
			}
			this.setState({
				items: newState.reverse(),
			});
		});
	}

	handleImgChange = (e) => {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			this.setState(() => ({ image }));
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { image } = this.state;
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				this.setState({ progress });
			},
			(error) => {
				console.log(error);
			},
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						this.setState({ url });
						const itemsRef = firebase.database().ref("items");
						const item = {
							image: this.state.image,
							url: this.state.url,
							name: this.state.image.name,
						};
						itemsRef.push(item);
						this.setState({
							image: null,
							url: "",
						});
					});
			}
		);
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12 m12 l5">
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
													<i className="fas fa-image"></i>
													&nbsp; IMAGE
												</label>
												<input
													id="upload"
													type="file"
													onChange={
														this.handleImgChange
													}
												/>
											</div>
										</div>
									</div>
									<div className="submit-container">
										<button
											className="btn"
											onClick={this.handleSubmit}
										>
											<i className="fas fa-upload"></i>
											&nbsp; Upload
										</button>
									</div>
								</div>
							</Zoom>
						</div>
						<div className="col sm12 m12 l7">
							<progress
								className="progres-bar"
								value={this.state.progress}
								maxx="100"
							/>
						</div>
					</div>
				</div>
				<Container>
					<h2>Photos</h2>
					<div className="gallery">
						<div>
							<ul className="gallery-items">
								{this.state.items.map((item) => {
									return (
										<li key={item.id}>
											<Fade bottom delay={600}>
												<img
													className=""
													src={item.url}
													alt="Uploaded Image"
													height="auto"
													width="100%"
													data-caption={item.name}
												/>
											</Fade>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default Photos;
