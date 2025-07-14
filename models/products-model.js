import { db } from "./data.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const productCollections = collection(db, "products");

const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productCollections);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async id => {
  try {
    const prodRef = doc(productCollections, id);
    const snapshot = await getDoc(prodRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createProduct = async data => {
  try {
    // TODO chequear que toda la info necesaria esté en la req.body y sino que tire error
    // Con un MIDDLEWARE
    const docRef = await addDoc(productCollections, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async id => {
  try {
    const prodRef = doc(productCollections, id);
    const snapshot = await getDoc(prodRef);
    if (snapshot.exists()) {
      await deleteDoc(prodRef);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

// usar setDoc con {merge: true} para que no se actualice todo
const updateProduct = async data => {
  try {
    // TODO chequear que toda la info necesaria esté en la req.body y sino que tire error
    // Con un MIDDLEWARE
    const docRef = await addDoc(productCollections, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.log(error);
  }
};

export { getProductById, getAllProducts, createProduct, deleteProduct };
