<template>
  <div class="w-[1200px]">

    <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
      <Slide v-for="(item, index) in items" :key="index" >
        <VCard :item="item" />
      </Slide>
      
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

</template>

<script setup lang="ts">
import VCard from "../../components/form/VCard.vue"
import { ref } from "vue";
// @ts-ignore
import { Carousel, Navigation, Slide } from 'vue3-carousel'


import 'vue3-carousel/dist/carousel.css'

const breakpoints = ref({
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1500: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    })

const settings = ref({
      itemsToShow: 1,
      snapAlign: 'center',
})
const items = ref([
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:false
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:false
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:true
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:false
  },
{
    image: "http://localhost:5173/src/assets/airpods.png",
    title: "Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px",
    price: "6 999 999 uzs",
    lifetime: "6 oy / 1 200 000 usz",
    sale:false
  },
])
</script>

<style scoped>
</style>
