import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  updatePassword,
} from "firebase/auth";
import { app } from "../../config/firebase/config";

const providerGoogle = new GoogleAuthProvider();

export const auth: any = getAuth(app);

// register user
export const signUpUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    console.log(result.user);
    return result.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// login user
export const logoutUserHandler = async () => {
  try {
    const result = await signOut(auth);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// logout user
export const signInUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    console.log(result.user);
    return result.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signUpUserWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, providerGoogle);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log("data from google auth");
    console.log(credential);
    const user = result.user;
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProfileUser = async (payload: any) => {
  try {
    await updateProfile(auth.currentUser, payload);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const updatePass = async (payload: any) => {
  try {
    await updatePassword(auth.currentUser, payload);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
