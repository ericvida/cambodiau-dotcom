# import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth";

# TODO: Add SDKs for Firebase products that you want to use
# https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
	apiKey: "AIzaSyC9nrgMz-m8i1DOAvZ5chyzA69X7gAlKH8",
	authDomain: "cambodiau-bo-er.firebaseapp.com",
	projectId: "cambodiau-bo-er",
	storageBucket: "cambodiau-bo-er.appspot.com",
	messagingSenderId: "705573385528",
	appId: "1:705573385528:web:6329a9e9a5a86971683dcd",
	measurementId: "G-1JL7P02Z97"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);
# const analytics = getAnalytics(app);
