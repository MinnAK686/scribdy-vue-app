import {auth} from "@/firebase/config";
import { signOut } from "firebase/auth"
let logout = async () => {
    await signOut();
}

let useSignOut = () => {
    return logout;
}

export default useSignOut;