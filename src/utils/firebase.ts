import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Receta } from "../types/receta";



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const saveReceta = async (receta:Receta) =>{
    try {
        await addDoc(collection(db, "recetas"), receta);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

};



export default {saveReceta};