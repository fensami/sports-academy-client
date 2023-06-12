import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import { app } from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //create user 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  //Login with email password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }



  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  //login with google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //update user profile image url 
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(('current user', currentUser));

      if(currentUser){
        axios.post('https://sports-academy-server-kappa.vercel.app/jwt', {email: currentUser.email})
        .then(data =>{
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }
    })
    return () => {
      return unsubscribe()
    }

  }, [])
  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    updateUserProfile,
    login,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;