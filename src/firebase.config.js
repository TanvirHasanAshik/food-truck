import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBg2nUalmXVfyhnueEma5svb-hD9YDo3P8",
    authDomain: "food-truck-98e12.firebaseapp.com",
    projectId: "food-truck-98e12",
    storageBucket: "food-truck-98e12.firebasestorage.app",
    messagingSenderId: "396539181146",
    appId: "1:396539181146:web:2cb7cf6661dc6074528063"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;