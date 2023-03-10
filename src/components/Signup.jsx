import { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "../sign-up.css";

function App() {
  const [signupEmail, setsignupEmail] = useState("");
  const [signupPassword, setsignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [type, setType] = useState("password");

  const [user, setUser] = useState({});

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  // SIGN UP

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // LOGIN

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // SIGN OUT

  const logout = async () => {
    await signOut(auth);
  };

  return (
    // CONTAINER

    <div className="container">
      <div className="App">
        <input type="checkbox" id="chk" aria-hidden="true" />

        {/* SIGN UP */}

        <div className="sign-up">
          <label for="chk" aria-hidden="true">
            {" "}
            Sign up{" "}
            
          </label>
        
          <input
            className="email"
            placeholder="Email..."
            onChange={(event) => {
              setsignupEmail(event.target.value);
            }}
          />
          <input
            type={type}
            className="pass"
            placeholder="Password..."
            onChange={(event) => {
              setsignupPassword(event.target.value);
            }}
            required=""
          />
          {type === "password" ? (
            <span className="visibility" onClick={() => setType("text")}>
              <Icon icon={basic_eye_closed} size={18} />
            </span>
          ) : (
            <span className="visibility" onClick={() => setType("password")}>
              <Icon icon={basic_eye} size={18} />
            </span>
          )}

          <button className="bt" onClick={signup}>
            Sign up
          </button>
        </div>

        {/* LOGIN */}

        <div className="login">
          <label for="chk" aria-hidden="true">
            {" "}
            Login{" "}
          </label>

          <input
            className="email"
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            required=""
          />
          <input
            type={type}
            className="pass"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            required=""
          />
          {type === "password" ? (
            <span className="visibility" onClick={() => setType("text")}>
              <Icon icon={basic_eye_closed} size={18} />
            </span>
          ) : (
            <span className="visibility" onClick={() => setType("password")}>
              <Icon icon={basic_eye} size={18} />
            </span>
          )}

          <button className="bt" onClick={login}>
            {" "}
            Login
          </button>
        </div>
      </div>

      {/* STATUS */}

      <div className="status">
        <h4> User Logged In: </h4>
        {user?.email}

        {/* SIGN OUT */}

        <button className="signout" onClick={logout}>
          {" "}
          Sign Out{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
