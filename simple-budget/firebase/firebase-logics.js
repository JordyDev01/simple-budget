import { ref, set, get} from "firebase/database";
import { database } from "./config";
import Profile from "../model/profile";
import { auth } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = async (name, username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User created:", user);

    const newProfile = new Profile(name, username, email, income, {});

  
    const userRef = ref(database, `users/${user.uid}`); 
    await set(userRef, newProfile);

    return newProfile;
  } catch (error) {
    console.error("Error creating user:", error);
    return `Error creating user: ${error.message}`;
  }
};


export const getUser = async (uid) => {
    try {
      const userRef = ref(database, `${uid}`);
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        const user = snapshot.val();
        console.log(`User found: ${user.name}`);
        return user;
      } else {
        console.log(`No user found with UID: ${uid}`);
        return null;
      }
    } catch (error) {
      console.log("Error fetching user:", error);
      return `Error fetching user: ${error.message}`;
    }
  };
  