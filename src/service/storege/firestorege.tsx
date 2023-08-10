import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
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
export const uploadImg = async (file: any, id: string) => {
  // upload to firebase storage
  let storageRef = ref(storage, `/img/${id}.jpg`);

  await uploadBytes(storageRef, file.blob);
  const url = await getDownloadURL(storageRef);
  return url;
};
