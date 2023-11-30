<template>
  <div
    class="card-body rounded flex flex-col justify-center items-center w-[250px]"
  >
    <div
      class="bg-[#EBEFF3] w-[250px] flex items-center justify-center flex-col p-5 rounded-[8px]"
    >
      <div class="flex bg-gray gap-[120px] w-[300px] px-10">
        <p
          v-if="props?.item?.sale_price"
          class="bg-[#FFF] text-[#E81504] rounded p-1"
        >
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
        :src="
          props?.item?.productMedia[1]
            ? `${props?.item?.productMedia[1]?.url}`
            : `${props?.item?.productMedia[0]?.url}`
        "
        alt="img"
        class="h-[170px] w-[200px] object-contain"
      />
    </div>
    <div class="card-header flex flex-col gap-3">
      <p
        class="text-left text-[#545D6A] hover:cursor-pointer hover:text-[black] hover:underline"
        @click="toSinglePage(props.item.id)"
      >
        {{ props?.item?.name }}
      </p>
      <h1 class="text-[20px] text-left font-medium">
        {{ props?.item?.price }} uzs
      </h1>
    </div>
    <div class="w-full flex gap-3">
      <p
        class="text-[#F02C96] bg-[#F02C961A] flex justify-center items-start rounded"
      >
        6 oy / {{ Math.round(props?.item?.price / 6) }} uzs
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
import { useRouter } from "vue-router";

export interface IProps {
  item: {
    id: number;
    name: string;
    price: number;
    sale_price: number;
    average_rating: number;
    productMedia: [{ url: string }];
  };
}
import { mdiHeartOutline, mdiCardsHeart } from "@mdi/js";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
const like = ref(false);
const router = useRouter();
const props = defineProps<IProps>();
// console.log(props.item.productMedia.url);
const toSinglePage = (id: number) => {
  router.push({ name: "singleProduct", query: { id } });
};
</script>
<style scoped></style>
