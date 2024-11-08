import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../utilities/firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(logegdInUser => {
                setUser(logegdInUser.user);
            })
            .catch(error => {
                console.log(error.message);
                setUser(null)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div>
            {
                user ?

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleSignOut}>Logout</button></li>
                        </ul>
                    </div> :
                    <button className="btn btn-sm" onClick={handleGoogleSignIn}>Login</button>
            }

        </div>
    );
};

export default Login;