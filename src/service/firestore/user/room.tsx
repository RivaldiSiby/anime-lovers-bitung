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
  setDoc,
} from "firebase/firestore";
import { app } from "../../../config/firebase/config";

const firestoreConfig = getFirestore(app);
export const romCollection = collection(firestoreConfig, "room");

export const addRoom = async (payload: any) => {
  try {
    payload.created_at = new Date().getTime();
    payload.updated_at = new Date().getTime();
    const result = await addDoc(romCollection, payload);
    return result.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateRoom = async (payload: any, id: string) => {
  try {
    const docRef = doc(firestoreConfig, "room", id);
    await setDoc(docRef, payload);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getRoom = async () => {
  try {
    const q = query(romCollection, limit(20));
    const result = await getDocs(q);
    const wrapdata: any = [];
    result.forEach((docs) => {
      const payload = { ...docs.data(), id: docs.id };
      wrapdata.push(payload);
    });
    return wrapdata;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
