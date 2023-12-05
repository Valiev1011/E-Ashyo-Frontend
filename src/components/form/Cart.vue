<template>
  <div class="w-[761px] flex h-[170px]x`">
    <!-- Foto -->
    <div
      class="flex justify-center items-center w-[202px] h-[170px] bg-[#EBEFF3]"
    >
      <img
        class="w-[115px] h-[115px]"
        :src="item?.product?.productMedia[0]?.url"
        alt=""
      />
    </div>

    <!-- Main text -->
    <div class="flex flex-col gap-[40px] ml-[30px] mt-[17px]">
      <div class="flex justify-between w-[525px]">
        <h3
          class="text-[18px] w-[288px] text-[#545D6A] font-normal not-italic leading-[24px]"
        >
          {{ item?.product?.name }}
        </h3>
        <h3
          class="text-[24px] font-bold not-italic leading-[118%] text-[#06172D]"
        >
          {{ item?.product?.price }}
          <span class="text-[14px] text-[#000000] font-normal leading-[130%]"
            >UZS</span
          >
        </h3>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-row gap-[10px]">
          <div
            class="flex w-[52px] rounded-[6px] h-[40px] justify-center cursor-pointer items-center bg-[#EBEFF3]"
          >
            <button
              v-if="similar(item.product.id)"
              @click="productStore.removeFromLikedProducts(item.product.id)"
            >
              <SvgIcon type="mdi" :path="mdiCardsHeart" class="text-[red]" />
            </button>
            <button
              v-else
              @click="productStore.addToLikedProducts(item.product.id)"
            >
              <SvgIcon type="mdi" :path="mdiHeartOutline" />
            </button>
          </div>

          <div
            class="flex w-[52px] rounded-[6px] h-[40px] justify-center cursor-pointer items-center bg-[#EBEFF3]"
            @click="props.delete(item.id)"
          >
            <SvgIcon type="mdi" :size="24" :path="mdiDeleteOutline" />
          </div>
        </div>

        <div class="flex gap-[25px]">
          <!-- Minus -->
          <div
            class="bg-[#EBEFF3] flex justify-center items-center px-[18px] rounded-[6px]"
            :class="quantity < 2 ? 'cursor-not-allowed' : 'cursor-pointer'"
            @click="change('remove')"
          >
            <SvgIcon type="mdi" :path="mdiMinus" :size="22" />
          </div>

          <!-- Number -->
          <h2
            class="text-[24px] font-normal not-italic leading-[130%] pt-[3px]"
          >
            {{ quantity }}
          </h2>
          <!-- Plus -->
          <div
            class="bg-[#EBEFF3] flex justify-center cursor-pointer items-center px-[18px] rounded-[6px]"
            @click="change('add')"
          >
            <SvgIcon type="mdi" :path="mdiPlus" :size="22" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHeartOutline,
  mdiDeleteOutline,
  mdiMinus,
  mdiPlus,
  mdiCardsHeart,
} from "@mdi/js";
import { ref, onMounted } from "vue";
import { cartStore } from "@/store/cart.js";
import { useAdminProductStore } from "../../store/products";

export interface IProduct {
  item: {
    id: number;
    quantity: number;
    product: {
      id: number;
      name: string;
      price: string;
      sale_price: string;
      average_rating: string;
      productMedia: [
        {
          url: string;
        }
      ];
      productInfo: [
        {
          attribute_value: string;
        }
      ];
      stock: {
        quantity: number;
      };

      productmodel: {
        model_name: string;
      };

      brand: { brand_name: string };
    };
  };
  delete: Function;
}
const props = defineProps<IProduct>();
const store = cartStore();
const productStore = useAdminProductStore();

let quantity = ref(props.item.quantity);

const change = (action: string) => {
  if (action == "add") {
    store.addItem(props.item.id);
    quantity.value = store.getItem(props.item.id)[0]["quantity"];
  } else if (action == "remove") {
    if (quantity.value > 1) {
      store.removeItem(props.item.id);
      quantity.value = store.getItem(props.item.id)[0]["quantity"];
    }
  } else {
    return false;
  }
};
const similar = (id: number) => {
  //@ts-ignore
  const answer = productStore?.liked?.filter((prod) => prod?.id == id);
  if (answer?.length) {
    return true;
  }
  return false;
};
</script>

<style scoped></style>
