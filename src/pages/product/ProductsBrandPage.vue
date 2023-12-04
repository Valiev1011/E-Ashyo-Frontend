<template>
  <div class="container pl-[100px]">

    <div>
      <div>
        <img src="http://localhost:5173/src/assets/iPad.png" alt="iPad">
      </div>
    </div>

    <div class="">
      <div class="flex gap-10 flex-wrap">
        <div v-for="(item, index) in items" :key="index">
          <VCard :item="item"> </VCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/form/VCard.vue";
import { ref, watch } from "vue";
const currentPage = ref(1);
const value = ref([0, 1000]);

import VCard from "../../components/form/VCard.vue";

const max = ref(1000);
const min = ref(0);
// const value = ref([0, 1000000]);
watch(value, (val) => {
  console.log(val);
  if (val[0] > val[1]) {
    min.value = val[1];
    max.value = val[0];
  } else {
    min.value = val[0];
    max.value = val[1];
  }
});
const items = ref([
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
  {
    id: 1,
    name: "airpods 2",
    price: 500000,
    sale_price: 100000,
    average_rating: 4.8,
    productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
  },
]);
</script>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
