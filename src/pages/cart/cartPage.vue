<template>
  <div class="w-full mt-[80px] mx-auto container">
    <div class="pl-20">
      <h1
        class="text-[32px] font-bold leading-[130%] not-italic text-[#06172D]"
      >
        Savat
      </h1>
      <div
        class="flex mt-[36px] gap-[30px] flex-col"
        v-for="(item, index) in products"
        :key="index + Math.random()"
      >
        <Cart :item="item" :delete="deleteCartItem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Cart from "@/components/form/Cart.vue";
  import { cartStore } from "@/store/cart.js";
  import { ref, onMounted } from "vue";
  const store = cartStore();

  const products = ref();

  const deleteCartItem = (id: any) => {
    store.deleteCartItem(id);
    products.value = store.items;
  };

  onMounted(() => {
    store.getCart();
    products.value = store.items;
  });
</script>

<style scoped></style>
