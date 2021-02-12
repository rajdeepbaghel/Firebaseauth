// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDGF5ZTZD-YB8WVjBSjOct_uKh8mQCd3eU",
    authDomain: "logintask-e3029.firebaseapp.com",
    projectId: "logintask-e3029",
    storageBucket: "logintask-e3029.appspot.com",
    messagingSenderId: "259217699027",
    appId: "1:259217699027:web:4dbce825c5fd65be722426",
    measurementId: "G-X22HX8L8M7"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;