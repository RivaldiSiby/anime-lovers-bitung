import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../../../config/firebase/config";

const firestoreConfig = getFirestore(app);
const userColection = collection(firestoreConfig, "user");

export const addUser = async (payload: any) => {
  try {
    const result = await addDoc(userColection, payload);
    return result.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUser = async (id: string) => {
  try {
    const q = query(userColection, where("id", "==", id));
    const result = await getDocs(q);

    const wrapdata: any = [];
    result.forEach((docs) => {
      const payload = { ...docs.data() };
      wrapdata.push(payload);
    });
    return wrapdata[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
