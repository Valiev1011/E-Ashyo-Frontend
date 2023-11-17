<template>
  <div>
    <TheNavbar></TheNavbar>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../components/header/TheNavbar.vue";
import TheFooter from "../components/footer/TheFooter.vue";
</script>

<style scoped></style>
