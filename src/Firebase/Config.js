import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAp89b25MsYeMkw7UbJ9ZJuwcHXSw0J_7M",
	authDomain: "wedding-site-5b751.firebaseapp.com",
	databaseURL: "https://wedding-site-5b751.firebaseio.com",
	projectId: "wedding-site-5b751",
	storageBucket: "wedding-site-5b751.appspot.com",
	messagingSenderId: "680712178109",
	appId: "1:680712178109:web:62cecb845b32c5e6512ad4",
	measurementId: "G-X7R85Z7DYW",
};

let firebaseCache;

export const getFirebase = () => {
	if (firebaseCache) {
		return firebaseCache;
	}

	firebaseCache = firebase;
	return firebase;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
export default firebase;
