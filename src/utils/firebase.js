import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3gfF4iWOdfYoWP7ir2nkMdvT4_v99lIM",
  authDomain: "learning-firebase-24df1.firebaseapp.com",
  projectId: "learning-firebase-24df1",
  storageBucket: "learning-firebase-24df1.appspot.com",
  messagingSenderId: "897255914993",
  appId: "1:897255914993:web:6136c788785eb4a6659850"
};
firebase.initializeApp(config);

export { firebase };
