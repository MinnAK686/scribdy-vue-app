import {ref} from "vue";
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "@/firebase/config";

let error = ref("");
let signIn = async (email,password) => {
    try {
        let response = await signInWithEmailAndPassword(auth,email,password);
        if(!response) {
            throw new Error("Can't sign in user");
        }
        return response;
    } catch (err) {
        error.value = err.message;
    }
}

let useSignIn = () => {
    return {
        signIn,error
    }
}

export default useSignIn;