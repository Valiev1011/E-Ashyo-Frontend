<template>
  <div class="m-10">
    <div class="flex gap-4 m-10">
      <div v-for="(item, index) in items" :key="index"></div>
    </div>
    <h1 class="text-[25px] font-bold m-10">Telefon xususiyatlar</h1>
    <div class="flex gap-10">
      <div class="text-left flex flex-col gap-5 m-10">
        <p>Brand</p>
        <p>CIM kartani soni</p>
        <p>O'lchamlari</p>
        <p>Modeli</p>
        <p>Akumulyator hajmi</p>
        <p>Yadrolar soni</p>
        <p>Tezkor xotira RAM</p>
        <p>Ichki xotira ROM</p>
        <p>Protsessor</p>
      </div>
      <div class="text-left flex flex-col gap-5 m-10">
        <p>Vivo</p>
        <p>2</p>
        <p>75,09х155,11х8,28</p>
        <p>Redmi T12</p>
        <p>4000 amp</p>
        <p>8</p>
        <p>6 GB</p>
        <p>128 GB</p>
        <p>MediaTek Helio P35 (MT6765)</p>
      </div>
      <div class="text-left flex flex-col gap-5 m-10">
        <p>Oppo</p>
        <p>2</p>
        <p>75,09х155,11х8,28</p>
        <p>Redmi T12</p>
        <p>4000 amp</p>
        <p>8</p>
        <p>6 GB</p>
        <p>128 GB</p>
        <p>MediaTek Helio P35 (MT6765)</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCard from "../../components/form/VCard.vue";
import { ref } from "vue";

import "vue3-carousel/dist/carousel.css";

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.3,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 4.7,
    snapAlign: "center",
  },
});

const settings = ref({
  itemsToShow: 0.5,
  snapAlign: "center",
});
const items = ref([
  {
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale: true,
  },
  {
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale: false,
  },
]);
</script>

<style scoped></style>
