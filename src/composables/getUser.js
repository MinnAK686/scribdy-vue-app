import {ref} from "vue";
import {auth} from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth"

let user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
    user.value = _user;
})
// console.log("Hit")
let getUser = () => {
    return user;
}
export default getUser;
