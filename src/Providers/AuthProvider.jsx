import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //create user 
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //login with email pass
  // const signIn = (email, password) => {
  //   setLoading(true)
  //   return sig
  // }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

  //login with google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn =() => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  //update user profile image url 
  const updateUserProfile = (name, photo)=> {
    return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    })
  }



  useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(('current user', currentUser));
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
    login
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;