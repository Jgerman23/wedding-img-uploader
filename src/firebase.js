import firebase from "firebase";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyAp89b25MsYeMkw7UbJ9ZJuwcHXSw0J_7M",
	authDomain: "wedding-site-5b751.firebaseapp.com",
	databaseURL: "https://wedding-site-5b751.firebaseio.com",
	projectId: "wedding-site-5b751",
	storageBucket: "wedding-site-5b751.appspot.com",
	messagingSenderId: "680712178109",
	appId: "1:680712178109:web:62cecb845b32c5e6512ad4",
	measurementId: "G-X7R85Z7DYW",
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
