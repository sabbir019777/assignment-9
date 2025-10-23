import { auth, googleProvider } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";

// Signup with Email/Password
export const signupWithEmail = async (name, email, password, photoURL) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName: name, photoURL });
  }
  return userCredential.user;
};

// Login with Email/Password
export const loginWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Google Login
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Forgot Password
export const sendResetPasswordEmail = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

// Update Profile
export const updateUserProfile = async (updates) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, updates);
  }
};

// Logout
export const logout = async () => {
  await signOut(auth);
};
