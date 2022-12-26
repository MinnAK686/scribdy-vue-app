<template>
  <div v-if="user">
    <div class="container my-3 border rounded shadow p-3">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="m-0">Hi <span class="fw-bold">{{ user.displayName }}</span></p>
          <p class="m-0">Logged in as <span class="fw-bold">{{ user.email }}</span></p>
        </div>
        <div>
          <button class="btn btn-danger" @click="logoutUser">Logout</button>
        </div>
      </div>
    </div>
    <h1>Auth View Page</h1>

  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";
import {auth} from "@/firebase/config";
import { signOut } from "firebase/auth"
export default {
  name: "AuthHomeView",
  setup() {
    let router = useRouter();
    let user = getUser();
    watch(user,() => {
      console.log(user.value)
      if(!user.value) {
        router.push("/");
      }
    });
    let logoutUser = async () => {
      await signOut(auth);
    }

    return { user,logoutUser }
  }
}
</script>

<style scoped>

</style>