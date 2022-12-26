import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);
let signUp = async (fullName, email, password) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error("Can't create new User");
    }
    let user = auth.currentUser;
    await updateProfile(user, { displayName: fullName });
    console.log(user);
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignUp = () => {
  return {
    signUp,
    error,
  };
};

export default useSignUp;
