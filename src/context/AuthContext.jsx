import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
 updateProfile,
  signOut,
 onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const updateProfileFunc = (displayName, photoURL) => {
  if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  
const signoutUserFunc = () => {
  return signOut(auth);
  };

  
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
   user,
    setUser,
loading,
   setLoading,
   createUserWithEmailAndPasswordFunc,
  updateProfileFunc,
    signoutUserFunc,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
