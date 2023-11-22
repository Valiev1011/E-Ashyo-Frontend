<template>
  <div>
    <TheNavbar></TheNavbar>
    <MasonryBrand></MasonryBrand>
    <router-view></router-view>
    <MasonryCategory></MasonryCategory>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../components/header/TheNavbar.vue";
import TheFooter from "../components/footer/TheFooter.vue";
import MasonryBrand from "../components/ui/MasonryBrand.vue";
import MasonryCategory from "../components/ui/MasonryCategory.vue";
</script>

<style scoped></style>
