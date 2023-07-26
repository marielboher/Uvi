// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeGsAOt_OPb2ZxgALwBGHQwL-jzqYIH48",
  authDomain: "uviweb-d1ecc.firebaseapp.com",
  projectId: "uviweb-d1ecc",
  storageBucket: "uviweb-d1ecc.appspot.com",
  messagingSenderId: "245284271628",
  appId: "1:245284271628:web:1d37ef360a4150ddab2029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
