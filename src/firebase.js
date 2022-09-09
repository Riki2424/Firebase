//使用するモジュールを読み込む
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
//firebaseのプロジェクトの構造
const firebaseConfig = {
    apiKey: "AIzaSyAke66k0qiufXTHR7mmQLp0UqtkU-t-mxs",
    authDomain: "post-cbff4.firebaseapp.com",
    projectId: "post-cbff4",
    storageBucket: "post-cbff4.appspot.com",
    messagingSenderId: "966026900322",
    appId: "1:966026900322:web:662b1daecdf3896703323b",
  };
//Configの初期化
const app = initializeApp(firebaseConfig);
//storageとdbを公開
export const storage = getStorage(app);
export const db = getFirestore(app);