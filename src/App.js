import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    pic: "",
  });

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setData({
          name: result.user.displayName,
          email: result.user.email,
          pic: result.user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={data.pic} className="App-logo" alt="logo" />
        <p>
          {data.name}
        </p>
        <p>
          {data.email}
        </p>
        <button onClick={googleLogin}>
        Sign in with Google
      </button>
      </header>
    </div>
  );
}

export default App;
