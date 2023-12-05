<template>
  <div class="ml-[130px] mt-[30px]">
    <div>
      <h2 class="text-[32px] font-bold not-italic leading-[130%]">
        {{ product?.name }}
      </h2>
    </div>
    <!-- Product rasmi -->
    <div class="flex mt-[31px] gap-[24px]">
      <div class="flex flex-col gap-[10px] overflow-y-auto h-[430px]">
        <div
          class="w-[120px] min-h-[100px] cursor-pointer bg-[#EBEFF3] flex justify-center items-center rounded-[6px]"
          v-for="(item, index) in product?.productMedia"
          :key="item.url"
          @click="changeImage(item.url)"
        >
          <img
            class="w-[54px] h-[54px] object-cover"
            :src="item.url"
            alt="single"
          />
        </div>
      </div>

      <div
        class="flex justify-center flex-col w-[530px] h-[430px] rounded-[10px] bg-[#EBEFF3]"
      >
        <div class="text-[#233C5FB2] h-fit flex gap-[20px] pl-[431px]">
          <SvgIcon
            :size="24"
            type="mdi"
            :path="mdiScaleUnbalanced"
            class="cursor-pointer"
          />
          <button v-if="similar(id)" @click="store.removeFromLikedProducts(id)">
            <SvgIcon type="mdi" :path="mdiCardsHeart" class="text-[red]" />
          </button>
          <button v-else @click="store.addToLikedProducts(id)">
            <SvgIcon type="mdi" :path="mdiHeartOutline" />
          </button>
        </div>

        <div class="flex justify-center items-center overflow-hidden">
          <img
            class="h-[341px] object-cover"
            :class="isHovered ? 'cursor-zoom-in' : 'cursor-auto'"
            :src="main_image"
            alt="single"
            @mousemove="zoomIn"
            @mouseleave="zoomOut"
          />
        </div>
      </div>

      <div class="flex flex-col w-[474px] mt-[31px]">
        <div class="flex gap-[20px] items-end">
          <span
            class="text-[16px] font-normal not-italic leading-[129%] text-[#515D6C] pb-1"
            >Narxi:</span
          >
          <h3 class="text-[32px] font-bold not-italic leading-[120%]">
            {{ product?.price }}
          </h3>
          <h3 class="text-[24px] font-bold not-italic leading-[118%] pb-[2px]">
            UZS
          </h3>
        </div>

        <button class="bg-[#EBEFF3] mt-[36px] h-[56px] rounded-[6px]">
          <p
            class="text-[16px] text-[#545D6A] font-normal not-italic leading-[130%] text-center"
          >
            Oyiga {{ Math.round((product?.price * 1) / 6).toString() }} usz dan
            muddatli to’lov
          </p>
        </button>

        <div class="flex mt-[10px] gap-[14px] flex-row">
          <!-- <button
            class="border bg-[#134E9B] border-[#134E9B] w-[230px] h-[56px] rounded-[6px]"
            @click=""
          >
            <p
              class="text-[16px] font-normal text-center not-italic leading-[130%] text-white"
            >
              Savatga qo'shish
            </p>
          </button> -->
          <button
            v-if="findOut(id)"
            class="border bg-[white] border-[#134E9B] w-[230px] h-[56px] rounded-[6px]"
            @click="toCartPage"
          >
            <p
              class="text-[16px] font-normal text-center not-italic leading-[130%] text-[#134E9B]"
            >
              Savatga o'tish
            </p>
          </button>
          <button
            v-else
            class="border bg-[#134E9B] border-[#134E9B] w-[230px] h-[56px] rounded-[6px]"
            @click="addToCart(id)"
          >
            <p
              class="text-[16px] font-normal text-center not-italic leading-[130%] text-white"
            >
              Savatga qo'shish
            </p>
          </button>
          <button class="bg-[#134E9B] w-[230px] h-[56px] rounded-[6px]">
            <p
              class="text-[16px] font-normal text-center not-italic leading-[130%] text-[#fff]"
            >
              Xarid qilish
            </p>
          </button>
        </div>

        <div class="flex flex-col gap-[21px] mt-[46px]">
          <div class="flex gap-[16px] text-[#06172DB2]">
            <SvgIcon type="mdi" :path="mdiTruckDeliveryOutline" :size="24" />
            <h3 class="text-[16px] font-normal not-italic leading-[130%]">
              Yetkazib berish O’zbekiston bo’ylab
            </h3>
          </div>
          <div class="flex gap-[16px] text-[#06172DB2]">
            <SvgIcon type="mdi" :path="mdiStoreOutline" :size="24" />
            <h3 class="text-[16px] font-normal not-italic leading-[130%]">
              Do’kondi o’zidan olib ketishingiz mumkin
            </h3>
          </div>
          <div class="flex gap-[16px] text-[#06172DB2]">
            <SvgIcon type="mdi" :path="mdiClockOutline" :size="24" />
            <h3 class="text-[16px] font-normal not-italic leading-[130%]">
              Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-[80px] mb-[50px]">
      <div class="flex flex-row gap-[85px] mb-[20px]">
        <h2
          class="cursor-pointer text-[18px] leading-[129%] not-italic"
          :class="isActive ? '' : ' font-bold underline leading-[130%]'"
          @click="isActive = false"
        >
          Telefon xususiyatlari
        </h2>
        <h2
          class="cursor-pointer text-[18px] leading-[129%] not-italic"
          :class="isActive ? ' font-bold underline leading-[130%]' : ''"
          @click="isActive = true"
        >
          Mijozlar fikri
        </h2>
      </div>

      <!-- Texnik xususiyatlar -->
      <div
        class="flex mt-[70px] w-[651px] mb-[20px] flex-col overflow-auto max-h-[500px] no-scrollbar"
        v-if="!isActive"
      >
        <div class="flex flex-wrap" v-for="item in product?.productInfo">
          <h2 class="w-[378px] font-bold">{{ item.attribute?.name }}</h2>
          <h2>{{ item.attribute_value }}</h2>
          <div
            class="w-[651px] my-[13px] border-dashed border-b-[2px] border-[#B6BABF]"
          ></div>
        </div>
      </div>

      <!-- Mijozlar fikri -->
      <div class="overflow-auto max-h-[500px] no-scrollbar" v-else>
        <div
          class="mt-[60px] w-[651px] mb-[20px] flex gap-[14px]"
          v-for="(item, index) in comments"
          :key="index"
        >
          <!-- Icon -->
          <div
            class="bg-[#D9D9D9] w-[64px] px-[10px] h-[64px] flex justify-center items-center rounded-[50%]"
          >
            <SvgIcon
              type="mdi"
              :path="mdiAccountOutline"
              class="text-[#5e5e5e]"
              :size="42"
            />
          </div>
          <div class="flex flex-col mt-[14px]">
            <h2
              class="text-[18px] leading-[129%] font-normal not-italic text-[#06172D]"
            >
              {{ item.user }}
            </h2>
            <!-- Star -->
            <div class="flex mt-[6px]">
              <el-rate v-model="item.rating" disabled text-color="#ff9900" />
            </div>
            <p
              class="text-[12px] text-[#00000066] font-normal leading-[130%] not-italic mt-[18px]"
            >
              September 3, 2022
            </p>
            <p
              class="text-[16px] leading-[130%] font-normal not-italic text-[#515D6C] mt-[9px]"
            >
              {{ item.comment }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <ProductPage />
  </div>
</template>

<script setup lang="ts">
import ProductPage from "../product/popularProductPage.vue";
import {
  mdiScaleUnbalanced,
  mdiHeartOutline,
  mdiTruckDeliveryOutline,
  mdiStoreOutline,
  mdiClockOutline,
  mdiAccountOutline,
  mdiCardsHeart,
} from "@mdi/js";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { useAdminProductStore } from "../../store/products";

import { ref, reactive, onMounted } from "vue";
import { useRoute, type LocationQueryValue, useRouter } from "vue-router";
import { cartStore } from "../../store/cart";
import { danger, success } from "../../plugins/Notification";

const store = useAdminProductStore();
const name = ref("Smartfon Xiaomi 12 Lite 8/128Gb");
const price = ref("2470000");
const isHovered = ref(false);
const isActive = ref(false);
const product = ref();
const router = useRouter();
const cart_store = cartStore();

const route = useRoute();
const id = ref<number | undefined>();

id.value = Number(route.query.id?.toString());
console.log(id.value);
const main_image = ref("");

onMounted(async () => {
  product.value = await store.findOne(id.value);
  main_image.value = product.value?.productMedia[0]?.url;
});

// const images = reactive([
//   "http://localhost:5173/src/assets/single_phone.png",
//   "http://localhost:5173/src/assets/tv.png",
//   "http://localhost:5173/src/assets/single_phone.png",
//   "http://localhost:5173/src/assets/single_phone.png",
// ]);

const characteristic = reactive([{ name: "Brand", value: "Vivo" }]);

const zoomIn = (event: any) => {
  isHovered.value = true;
  const img = event.target;
  const rect = img.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = "scale(2.2)";
};

const toStorage = () => {};

const zoomOut = (event: any) => {
  isHovered.value = false;
  const img = event.target;
  img.style.transform = "scale(1) translate(0, 0)";
};

const comments = reactive([
  {
    user: "Evgeniy Viktorovich",
    comment:
      "The most inconvenient application written with the left heel. Theinterface is awkward. Putting something up for sale is as difficultas possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass",
    rating: 3.9,
  },
]);

const changeImage = (image: any) => {
  main_image.value = image;
};

const to_number = (number: string) => {
  let count = 0;
  let price: String[] = [];

  for (let i = number.length - 1; i > -1; i--) {
    if (count == 3) {
      price.unshift(" ");
      price.unshift(number[i]);
      count = 0;
    } else {
      price.unshift(number[i]);
    }
    count += 1;
  }
  return price.join("");
};

const findOut = (id: number | undefined) => {
  const answer = cart_store?.items?.filter((prod) => prod.product_id == id);
  if (answer?.length) {
    return true;
  }
  return false;
};
const toCartPage = () => {
  router.push({ path: "/cart" });
};
const ID = ref();
const added = ref(false);
const addToCart = async (id: any) => {
  await cart_store.createCart({
    product_id: id,
    quantity: 1,
  });
  if (cart_store?.error) {
    danger(cart_store?.error);
    cart_store.error = null;
  } else {
    ID.value = id;
    added.value = true;
    localStorage.setItem("products", JSON.stringify(cart_store.items));
    success("Product added to cart");
  }
};

const similar = (id: number | undefined) => {
  //@ts-ignore
  const answer = store?.liked?.filter((prod) => prod?.id == id);
  if (answer?.length) {
    return true;
  }
  return false;
};
</script>

<style scoped></style>
