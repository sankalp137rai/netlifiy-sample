import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import { firebase } from "./utils/firebase";
import axios from './utils/axios'

import { Switch, Route } from "react-router-dom";

let UserContext = React.createContext();

function App() {
	let [user, setUser] = useState(false);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
			if(user){
				user.getIdToken(/* forceRefresh */ true).then(function(idToken) {
					 axios.defaults.headers['Authorization'] = `Bearer ${idToken}`;
					//  console.log(axios.defaults.headers["Authorization"]);
				}).catch(function(error) { 
					// Handle error
					console.log(error);
				});
			}
		});
	}, []);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div>
				<Switch>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
				</Switch>
			</div>
		</UserContext.Provider>
	);
}

export { App, UserContext };
