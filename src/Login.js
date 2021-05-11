import "./App.css";
import React from "react";
// import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./utils/firebase";
// import { useHistory } from "react-router-dom";

function Login() {
// 	let history = useHistory();
// 	let { user} = useContext(UserContext);

	const uiConfig = {
		signInFlow: "popup",
		signInSuccessUrl: "/",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		]
	};

	return (
		<div style={{
			background :"#72587F",
			display :"flex",
			flexDirection : "column",
			width : "100%",
			minHeight : "100vh",
			justifyContent : "center",
			alignItems : "center",
		}}>
			<div className="Login">
			{/* {user ? (
				<button
					onClick={function () {
						firebase.auth().signOut();
					}}
				>
					Log Out
				</button>
			) : (
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
				// <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			)} */}
		   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

		  </div>
		</div>
		
	);
}

export default Login;
