<template>
  <!-- Sign in -->
  <form @submit.prevent="signInUser">
    <h5 class="mb-4 mt-2 text-center">Sign in</h5>
    <div>
      <div v-if="error">
        <p class="fw-bold text-danger">{{error}}</p>
      </div>
    </div>
    <div class="mb-3">
      <label for="loginEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="loginEmail" v-model="email" />
    </div>
    <div class="mb-3">
      <label for="loginPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="loginPassword" v-model="password" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <div class="d-grid">
      <button type="submit" class="btn btn-primary" :disabled="status">
      <span v-if="!status">
        <span>Sign in</span>
      </span>
        <span v-else>
        <span class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </span>
      </button>
    </div>
  </form>
</template>

<script>
import {ref} from "vue";
import useSignIn from "@/composables/useSignIn";
import {useRouter} from "vue-router";
export default {
  name: "SignIn",
  setup() {
    let {signIn,error} = useSignIn();
    let router = useRouter();
    let email = ref("");
    let password = ref("");
    let status = ref(false);

    let signInUser = async () => {
      if(!email.value && !password.value) {
        error.value = "Please fill the required field";
      }else if(!email.value) {
        error.value = "Email address can't be empty";
      }else if(!password.value) {
        error.value = "Password can't be empty";
      }else {
        status.value = true;
        let response = await signIn(email.value,password.value);
        status.value = false;
        if(response) {
          let backdrop = document.querySelector(".modal-backdrop");
          backdrop.classList = "";
          router.push("/home");
        }
      }
    }

    return {
      email,password,signInUser,error,status
    }
  }
}
</script>

<style scoped>

</style>