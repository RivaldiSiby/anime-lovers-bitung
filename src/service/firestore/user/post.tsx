import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../../config/firebase/config";

const firestoreConfig = getFirestore(app);
export const postCollection = collection(firestoreConfig, "post");

export const addPost = async (payload: any) => {
  try {
    payload.created_at = new Date().getTime();
    payload.updated_at = new Date().getTime();
    const result = await addDoc(postCollection, payload);
    return result.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const delDoc = async (id: any) => {
  try {
    const docRef = doc(firestoreConfig, "post", id);
    await deleteDoc(docRef);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// export const getPost = async () => {
//   try {
//     const q = query(postCollection, limit(50));
//     const result = await onSnapshot(q);
//     const wrapdata: any = [];
//     result.forEach((docs) => {
//       const payload = { ...docs.data() };
//       wrapdata.push(payload);
//     });
//     return wrapdata;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
