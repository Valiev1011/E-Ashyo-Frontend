<template>
  <div>
    <TheNavbar></TheNavbar>
    <Modal></Modal>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../components/header/TheNavbar.vue";
import TheFooter from "../components/footer/TheFooter.vue";
import Modal from "../components/ui/Modal.vue";
console.log(document.cookie);
</script>

<style scoped></style>
