import firebaseConfig from "./Firebase.config"
import { initializeApp } from "firebase/app";

const initilizeAuthentication = ()=>{


    initializeApp(firebaseConfig)
}

export default initilizeAuthentication;