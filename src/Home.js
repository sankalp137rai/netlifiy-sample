import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";
import { firebase } from "./utils/firebase";
import { useHistory } from "react-router-dom";
import axios from "./utils/axios"

function Home() {
	let { user } = useContext(UserContext);
	let history = useHistory();
	return (
		<div style={{
      background:"#ccc",
      display: "flex",
      width: "100%",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}>
			{user ? <div>
				<h1
					style={{
						color: "#72587F",
            margin:"7px",
					}}
				>
					Hello!! {user.displayName}
				</h1>
				<img src={user.photoURL} alt="profile pictue"/>
				<h1>{user.uid}</h1>
				<button
					style={{
						// background: "#ccc",
						padding: "10px",
						fontSize: "20px",
            margin: "7px",
					}}
					onClick={function () {
						firebase.auth().signOut();
						history.push("/");
					}}
				>
					Log out
				</button>
        <button
					style={{
						// background: "#ccc",
						padding: "10px",
						fontSize: "20px",
            margin: "7px",
					}}
					onClick={function () {
						axios.get("https://secure-ravine-83532.herokuapp.com/alive").then((response)=>{
              console.log(response);
            }).catch((error)=>{
              console.log(error);
            })
					}}
				>
					I am alive
				</button>
			</div> : undefined}
			
		</div>
	);
}

export default Home;
