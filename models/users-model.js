import { db } from "./data.js";
import bcryptjs from "bcryptjs";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

// Modelo de los usuarios
const userCollections = collection(db, "users");

const getAllUsers = async () => {
  try {
    const snapshot = await getDocs(userCollections);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async id => {
  try {
    const userRef = doc(userCollections, id);
    const snapshot = await getDoc(userRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async data => {
  try {
    const { password, email } = data;
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    const userRef = await addDoc(userCollections, {
      email,
      password: hashedPassword,
    });
    return { id: userRef.id, ...data };
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, data) => {
  try {
    const userRef = doc(userCollections, id);
    await updateDoc(userRef, data);
    return { id: userRef.id, ...data };
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async id => {
  try {
    const userRef = doc(userCollections, id);
    const snapshot = await getDoc(userRef);
    if (snapshot.exists()) {
      await deleteDoc(userRef);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const getUserByEmail = async email => {
  try {
    const q = query(userCollections, where("email", "==", email));
    const querySnap = await getDocs(q);
    if (!querySnap.empty) {
      const doc = querySnap.docs[0];
      return { id: doc.id, ...doc.data() };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
