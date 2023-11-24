<template>
  <div
    class="card-body rounded flex flex-col justify-center items-center w-[250px]"
  >
    <div
      class="bg-[#EBEFF3] w-[250px] flex items-center justify-center flex-col p-5 rounded-[8px]"
    >
      <div class="flex bg-gray gap-[120px] w-[300px] px-10">
        <p v-if="props.item.sale" class="bg-[#FFF] text-[#E81504] rounded p-1">
          Aksiyada
        </p>
        <p v-else class="p-[15px] w-[100px]"></p>
        <button @click="like = !like" v-if="!like">
          <SvgIcon type="mdi" :path="mdiHeartOutline" />
        </button>
        <button @click="like = !like" v-else>
          <SvgIcon type="mdi" :path="mdiCardsHeart" class="text-[red]" />
        </button>
      </div>
      <img
        :src="props.item.image"
        alt="img"
        class="h-[150px] w-[150px] object-cover"
      />
    </div>
    <div class="card-header flex flex-col gap-3">
      <p class="text-left">{{ props.item.title }}</p>
      <h1 class="text-[20px] text-left">{{ props.item.price }}</h1>
      <!-- <pre>{{ props }}</pre> -->
    </div>
    <div class="flex gap-3">
      <p
        class="text-[#F02C96] bg-[#F02C961A] text-left flex items-center justify-center rounded"
      >
        {{ props.item.lifetime }}
      </p>
      <button
        class="w-[42px] h-[34px] rounded border text-center flex items-center justify-center"
      >
        <tarozi />
      </button>
      <button
        class="w-[42px] h-[34px] rounded bg-[#134E9B] text-center flex items-center justify-center"
      >
        <shop_bag />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import shop_bag from "../../assets/shopping-bag.vue";
import tarozi from "../../assets/la_balance-scale-right.vue";
import heart from "../../assets/heart.vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHeartOutline, mdiCardsHeart } from "@mdi/js";
let like = ref(false);

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      title: "",
      image: "",
      price: "",
      lifetime: "",
    }),
  },
});
</script>
<style scoped></style>
