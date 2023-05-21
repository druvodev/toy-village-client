import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);

  // register with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn with google
  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // SignIn with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut User
  const logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("toyUserToken");
      })
      .catch((error) => setError(error.message));
  };

  // Observe User Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    //   Stop observing when unmounting
    return () => unsubscribe();
  }, [user]);

  // Verify User By JWT
  const verifyUserByJWT = (loggedUser) => {
    fetch("https://toy-village-server.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loggedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("jwt response", data);
        localStorage.setItem("toyUserToken", data.token);
      });
  };

  const authInfo = {
    createUser,
    signInWithGoogle,
    signInUser,
    logOut,
    user,
    loading,
    setLoading,
    toys,
    setToys,
    verifyUserByJWT,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
