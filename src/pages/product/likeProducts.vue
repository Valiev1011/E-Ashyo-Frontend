<template>
  <div class="container">
    <div class="flex gap-5 mt-9 px-16">
      <div class="" v-for="item in store.products" :key="item.id">
        <VCard v-if="item" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAdminProductStore } from "../../store/products";
import VCard from "../../components/form/VCard.vue";

const store = useAdminProductStore();
const products = ref();
onMounted(async () => {
  const productsId = JSON.parse(
    localStorage.getItem("likedProducts") as string
  );
  let newArray = [];
  if (productsId) {
    newArray = productsId?.map((item: any) => item.id);
  }
  products.value = await store.findProductOnStorage(newArray);
  console.log(store.products);
});
</script>

<style scoped></style>
