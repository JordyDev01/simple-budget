import { ref, set, get} from "firebase/database";
import { database } from "./config";
import Profile from "../model/profile";

export const createUser = async (name, username, email, uid) => {
  try {
    const newProfile = new Profile(name, username, email);

  
    const userRef = ref(database, `profiles/${uid}`); 
    await set(userRef, newProfile);

    return newProfile;
  } catch (error) {
    console.log("Error creating user:", error);
    return `Error creating user: ${error.message}`;
  }
};


export const getUser = async (uid) => {
    console.log(`uid received: ${uid}`)
    try {
      const userRef = ref(database, `profiles`);
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        console.log(`list of user: ${JSON.stringify(snapshot.val())}`)
        const listUser = Object.entries(snapshot.val());
        console.log(`list user after passing to variable: ${JSON.stringify(listUser)}`)
        const user = listUser.filter((useruid) => useruid[0] === uid)
        if (user) {
            console.log(`User found: ${JSON.stringify(user)}`);
            return user;
        }
            else {
                return null
            }
      } else {
        console.log(`No user found with UID: ${uid}`);
        return null;
      }
    } catch (error) {
      console.log("Error fetching user:", error);
      return null
    }
  };
  