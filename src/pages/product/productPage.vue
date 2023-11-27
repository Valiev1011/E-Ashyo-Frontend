<template>
  <div class="w-full mt-[110px]">
    <h1 class="text-[32px] font-bold leading-[130%] mb-[50px] px-12">
      Most Popular product
    </h1>
    <Carousel
      :autoplay="3000"
      :pause-autoplay-on-hover="true"
      v-bind="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <VCard :item="item" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
  import VCard from "../../components/form/VCard.vue";
  import { ref } from "vue";
  // @ts-ignore
  import { Carousel, Navigation, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  const breakpoints = ref({
    // 700px and up
    700: {
      itemsToShow: 3.3,
      snapAlign: "center",
    },
    // 1024 and up
    1024: {
      itemsToShow: 4.5,
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
      sale: true,
    },
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
      sale: true,
    },
    {
      image: "http://localhost:5173/src/assets/airpods.png",
      title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
      price: "6 999 999 uzs",
      lifetime: "6 oy / 1 200 000 usz",
      sale: false,
    },
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
    {
      image: "http://localhost:5173/src/assets/airpods.png",
      title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
      price: "6 999 999 uzs",
      lifetime: "6 oy / 1 200 000 usz",
      sale: false,
    },
  ]);
</script>

<style>
  .carousel__icon {
    width: var(--vc-icn-width);
    height: var(--vc-icn-width);
    fill: currentColor;
    padding: 1px;
    background: white;
    border-radius: 50%;
  }
</style>
