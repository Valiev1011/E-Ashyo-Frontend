<template>
  <AdsTop></AdsTop>
  <MasonryBrand></MasonryBrand>
  <popularProductPage></popularProductPage>
  <MasonryCategory></MasonryCategory>
  <saleProductPage></saleProductPage>
  <AdsBottom></AdsBottom>
  <viewProductPage></viewProductPage>
</template>

<script setup lang="ts">
import MasonryBrand from "../../components/ui/MasonryBrand.vue";
import MasonryCategory from "../../components/ui/MasonryCategory.vue";
import AdsBottom from "../../components/ui/AdsBottom.vue";
import AdsTop from "../../components/ui/AdsTop.vue";
import popularProductPage from "../product/popularProductPage.vue";
import viewProductPage from "../product/viewProductPage.vue";
import saleProductPage from "../product/saleProductPage.vue";
</script>

<style scoped></style>
