<template>
  <br>
  <div class="container flex gap-10">
    <div class="bg-[#EBEFF3] rounded w-[374px] h-full">
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">Ashyo haqida</h2>
        <p>Ashyo 2022 yilda Toshkent shahrida tashkil etylgan.</p>
      </div>
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">Muddatli tolov</h2>
        <p>Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn to’lov rejasi.</p>
      </div>
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">To'lov usullari</h2>
        <p>Siz uchun qulay usulda to’lang do’konda, Cilik, Payme orqali.</p>
      </div>
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">Yetkazib berish</h2>
        <p>Ashyoda tovarlarni yetkazib berish shartlari.</p>
      </div>
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">Tavarlarga kafolat</h2>
        <p>Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma narsani bilib oling</p>
      </div>
      <div class="p-7 flex flex-col gap-2">
        <h2 class="font-bold">Yordam</h2>
        <p>Tushumagan narsalaringiz bo’lsa savollaringizni bering</p>
      </div>
    </div>
    <div class="flex flex-col gap-5 w-[776px]">
      <h1 class="font-bold text-[25px]">Ashyo haqida</h1>
      <div class="w-[776px] h-[300px] bg-[#6F73EE] flex items-center justify-center text-[150px] text-[#FFF]">Ashyo</div>
      <div class="flex flex-col gap-5">
        <p>Ashyo - bozor narhid maishy texnika va electronics dukonlari qurilmalari. 2 oydan davomid mizhozlarga keng assortimentdagi mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi</p>
        <p>Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga qadar jami poytaxtda va viloyatlarda 26 that dukon faoliyat ko'rsatmoqda.</p>
        <p>Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq dukonlarida yoki website. Maishy uchun texnikasi onlayn b'lib t'lov rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu pasport.</p>
        <p>Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi - qo'shimcha to'lovlarsiz sotib olish mumkin.</p>
      </div>
      <div class="flex gap-[30px]">
        <button><img src="../../assets/u_print.svg" alt=""></button>
        <button><img src="../../assets/fi_share.svg" alt=""></button>
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
