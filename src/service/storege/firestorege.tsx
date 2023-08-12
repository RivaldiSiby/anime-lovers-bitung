import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  deleteObject,
} from "firebase/storage";
import { app } from "../../config/firebase/config";

const storage = getStorage(app);

export const uploadImgUser = async (file: any, id: string) => {
  // upload to firebase storage
  let storageRef = ref(storage, `/user/${id}.jpg`);

  await uploadBytes(storageRef, file.blob);
  const url = await getDownloadURL(storageRef);
  return url;
};
export const uploadImgPost = async (file: any) => {
  const datenow = new Date().getTime();
  // upload to firebase storage
  let storageRef = ref(storage, `/post/${datenow}.jpg`);

  await uploadBytes(storageRef, file.blob);
  const url = await getDownloadURL(storageRef);
  return url;
};
export const uploadImgEvent = async (file: any) => {
  const datenow = new Date().getTime();
  // upload to firebase storage
  let storageRef = ref(storage, `/event/${datenow}.jpg`);

  await uploadBytes(storageRef, file.blob);
  const url = await getDownloadURL(storageRef);
  return url;
};
export const uploadImgRoom = async (file: any) => {
  const datenow = new Date().getTime();
  // upload to firebase storage
  let storageRef = ref(storage, `/room/${datenow}.jpg`);

  await uploadBytes(storageRef, file.blob);
  const url = await getDownloadURL(storageRef);
  return url;
};

export const deleteImgByUrl = async (url: string) => {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
    console.log("img deleted");
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
