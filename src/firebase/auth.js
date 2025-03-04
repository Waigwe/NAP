import { auth } from "./firebase";

// Sign Up- creates user using email&password
export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.createUserWithEmailAndPassword(email, password);


// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out- no arg needed, obj already knows user
export const doSignOut = () =>
    auth.signOut();

  
// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);
  
// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);