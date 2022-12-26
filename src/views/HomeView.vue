<template>
  <div class="home">
    <Navbar></Navbar>
    <Authenticator></Authenticator>
    <AuthHomeSection></AuthHomeSection>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Authenticator from "@/components/Authenticator";
import AuthHomeSection from "@/components/AuthHomeSection";
import Footer from "@/components/Footer";

export default {
  name: "HomeView",
  components: {Navbar,Authenticator,AuthHomeSection,Footer},
};
</script>
<style>
/*.modal-backdrop {*/
/*  background-color: transparent;*/
/*}*/
</style>
