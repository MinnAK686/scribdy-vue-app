<template>
  <!-- Sign up -->
  <form @submit.prevent="signUpUser">
    <h5 class="mb-4 mt-2 text-center">Sign up</h5>
    <div>
      <div v-if="error">
        <p class="fw-bold text-danger">{{error}}</p>
      </div>
    </div>
    <div class="mb-3">
      <label for="fullName">User name</label>
      <input type="text" id="fullName" class="form-control" v-model="fullName">
    </div>
    <div class="mb-3">
      <label for="regEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="regEmail" v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="pass" class="form-label">Password</label>
      <input type="password" class="form-control" id="pass" v-model="password1" />
    </div>
    <div class="mb-3">
      <label for="repPassword" class="form-label">Confirm Password</label>
      <input type="password" class="form-control" id="repPassword" v-model="password2" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="checkAccept" />
      <label class="form-check-label" for="checkAccept"
      >Accept term and condition</label
      >
    </div>
    <div class="d-grid">
      <button type="submit" class="btn btn-primary" :disabled="status">
      <span v-if="status">
        <span class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </span>
        <span v-else>
        <span>Sign up</span>
      </span>
      </button>
    </div>
  </form>
</template>

<script>
import useSignUp from "@/composables/useSignUp";
import { useRouter } from "vue-router";
import {ref} from "vue";
export default {
  name: "SignUp",
  setup() {
    let {error,signUp} = useSignUp();
    let router  = useRouter()
    let fullName = ref("");
    let email = ref("");
    let password = ref("");
    let password1 = ref("");
    let password2 = ref("");
    let status = ref(false);

    let signUpUser = async () => {
      if(!fullName.value && !email.value && !password1.value && !password2.value) {
        error.value = "Please fill the required field";
      }else if(!fullName.value) {
        error.value = "User name can't be empty";
      }else if(!email.value) {
        error.value = "Email address can't be empty";
      }else if(!password1.value || !password2.value) {
        error.value = "Password can't be empty";
      }else if(password1.value.length < 6 && password2.value.length < 6) {
        error.value = "Weak password! Password should be at least 6 characters";
      }else if(password1.value !== password2.value) {
        error.value = "Password does not match";
      }else {
        status.value = true;
        password.value = password1.value;
        let response = await signUp(fullName.value,email.value,password.value);
        error.value = "";
        status.value = false;
        let backdrop = document.querySelector(".modal-backdrop");
        backdrop.classList = "";
        router.push("/home")
      }
    }

    return {
      fullName,email,password1,password2,signUpUser,error,status
    }
  }
}
</script>

<style>
/*.modal-backdrop {*/
/*  background-color: transparent;*/
/*}*/
</style>