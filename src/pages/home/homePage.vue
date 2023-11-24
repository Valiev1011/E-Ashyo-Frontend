<template>
  <div>
    <AdsTop></AdsTop>
    <MasonryBrand></MasonryBrand>
    <productPage></productPage>
    <productPage></productPage>
    <productPage></productPage>
    <MasonryCategory></MasonryCategory>
    <AdsBottom></AdsBottom>
  </div>
</template>

<script setup lang="ts">
import MasonryBrand from "../../components/ui/MasonryBrand.vue";
import MasonryCategory from "../../components/ui/MasonryCategory.vue";
import AdsBottom from "../../components/ui/AdsBottom.vue";
import AdsTop from "../../components/ui/AdsTop.vue";
import productPage from "../product/productPage.vue";
</script>

<style scoped></style>
