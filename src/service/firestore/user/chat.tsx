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
export const chatCollection = collection(firestoreConfig, "chat");

export const addChat = async (payload: any) => {
  try {
    payload.created_at = new Date().getTime();
    payload.updated_at = new Date().getTime();
    const result = await addDoc(chatCollection, payload);
    return result.id;
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
