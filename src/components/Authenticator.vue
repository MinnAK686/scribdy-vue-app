<template>
  <!-- Modal Start -->

  <div class="container my-12">
    <!-- Modal -->
    <div
        class="modal fade"
        id="authModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
          </div>
          <div v-if="toggleForm">
            <div class="modal-body">
              <SignIn></SignIn>
            </div>
            <div class="modal-footer justify-content-center">
              <div class="mt-3 mb-2">
                <p>
                  Don't have an account? Create account
                  <a
                      href="#"
                      class="link-primary"
                      @click="toggleForm = !toggleForm"
                  >here</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="modal-body">
              <SignUp></SignUp>
            </div>
            <div class="modal-footer justify-content-center">
              <div class="mt-3 mb-2">
                <p>
                  Already have an account? Sign in
                  <a
                      href="#"
                      class="link-primary"
                      @click="toggleForm = !toggleForm"
                  >here</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal End -->
</template>

<script>
import {ref} from "vue";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

export default {
  name: "Authenticator",
  components: {
    SignIn,SignUp
  },
  setup() {
    let toggleForm = ref(true);

    return { toggleForm }
  }
}
</script>

<style scoped>

</style>