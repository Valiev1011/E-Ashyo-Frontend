<template>
  <div class="w-full container mx-auto">
    <div class="w-full flex justify-between bg-[#EBEFF3] px-20">
      <div
        class="w-full flex gap-5 text-[#545D6A] font-sans text-[14px] font-normal border"
      >
        <div class="flex gap-2">
          <span>
            <img
              src="../../components/icons/akar-icons_location.svg"
              alt="location"
            />
          </span>
          <span>
            <router-link to="#">Tashkent</router-link>
          </span>
        </div>
        <span>
          <router-link to="#">About us</router-link>
        </span>
        <span>
          <router-link to="#">Products</router-link>
        </span>
        <span>
          <router-link to="#">Contacts</router-link>
        </span>
      </div>
      <div
        class="w-full flex gap-5 justify-end text-[#545D6A] font-sans text-[14px] font-normal border"
      >
        <span>
          <router-link to="#">+998 (71) 123-45-67</router-link>
        </span>
        <span>
          <select name="" id="" class="bg-[#EBEFF3] outline-none">
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          </select>
        </span>
      </div>
    </div>
    <div class="w-full mb-6 mt-6 flex gap-14 pl-16">
      <div class="w-1/6 flex relative items-center">
        <img src="../../components/icons/Group 48097269.svg" alt="group img" />
        <h1
          class="font-sans text-[36px] text-[#134E9B] font-black absolute left-14"
        >
          Ashyo
        </h1>
      </div>
      <div class="w-3/6 flex items-center gap-3 mr-6">
        <div
          class="items-center justify-center bg-[#134E9B] rounded-md px-3 py-3"
        >
          <button
            @click="toggleModal"
            :class="{ 'open-modal': isModalOpen }"
            class="flex text-white"
          >
            <span v-if="isModalOpen" class="flex">Kategoriya </span>

            <span v-else class="flex">Kategoriya </span>

            <div :class="{ 'rotate-180': isModalOpen }">
              <svg-icon
                type="mdi"
                :path="mdiChevronDown"
                class="text-white cursor-pointer"
              ></svg-icon>
            </div>
          </button>

          <div v-if="isModalOpen" class="categories-list w-5/6 mx-auto flex">
            <div class="w-2/5 bg-[#EBEFF3] px-8 py-10">
              <!-- <h2>Categories</h2> -->
              <ul class="flex flex-col gap-8">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  class="flex gap-4"
                >
                  <img
                    :src="`http://localhost:5173/src/components/icons/${category.icon}.svg`"
                    alt="icon"
                  />
                  {{ category.name }}
                </li>
              </ul>
            </div>
            <div class="w-3/5 bg-[white] px-16 py-10">
              <ul class="flex flex-col gap-5">
                <p class="font-bold">Smartfonlar</p>
                <li
                  v-for="attribute in attributes"
                  :key="attribute.id"
                  class="flex gap-4"
                >
                  {{ attribute.name }}
                </li>
              </ul>
            </div>
            <!-- <button @click="closeModal">Close</button> -->
          </div>
        </div>
        <div class="flex">
          <form action="#">
            <input
              type="text"
              class="border rounded-l-md bg-[#EBEFF3] pr-56 pl-10 pt-3 pb-3 outline-none"
              placeholder="What are you looking for?"
            />
          </form>
          <button
            class="items-center justify-center bg-[#134E9B] w-16 px-6 py-2 rounded-r-md"
          >
            <img src="../../components/icons/u_search.svg" alt="img search" />
          </button>
        </div>
      </div>
      <div class="w-2/6 flex items-center gap-3">
        <div class="flex w-full gap-3">
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg-icon
              type="mdi"
              :path="mdiScaleUnbalanced"
              class="text-black cursor-pointer"
            ></svg-icon>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg-icon
              type="mdi"
              :path="mdiHeartOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg-icon
              type="mdi"
              :path="mdiShoppingOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg-icon
              type="mdi"
              :path="mdiAccountOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex gap-3">
      <ol class="flex gap-9 pl-20">
        <li
          v-for="item in categories"
          :key="item.id"
          class="text-[#545D6A] hover:underline hover:text-black"
        >
          {{ item.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  mdiChevronDown,
  mdiScaleUnbalanced,
  mdiHeartOutline,
  mdiShoppingOutline,
  mdiAccountOutline,
} from "@mdi/js";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";

const value = ref();
const options = [{ value: "smart", label: "smart" }];
const open = ref(false);

const clicked = () => {
  open.value = !open.value;
  console.log(open.value);
};

// const rotate = (e: any) => {
//   open.value = !open.value;
//   if (open.value) {
//     console.log((e.target.style.rotate = "180deg"));
//   } else {
//     console.log((e.target.style.rotate = "0deg"));
//   }
// };

// const logout = () => {
//   console.log("nmadur");
// };

const isModalOpen = ref(false);
const categories = ref([
  {
    id: 1,
    name: "Aksiyalar",
    icon: "u_money-withdrawal",
    bool: false,
  },
  {
    id: 2,
    name: "Smartfonlar",
    icon: "bi_phone",
    bool: false,
  },
  {
    id: 3,
    name: "Kiryuvish mashinalari",
    icon: "Frame_48097311",
    bool: false,
  },
  {
    id: 4,
    name: "Telivizorlar",
    icon: "Frame_48097329",
    bool: false,
  },
  {
    id: 5,
    name: "Kondetsionerlar",
    icon: "iconoir_air-conditioner",
    bool: false,
  },
  {
    id: 6,
    name: "Kompuyert va jihozlari",
    icon: "bi_laptop",
    bool: false,
  },
  {
    id: 7,
    name: "Muzlatgichlar",
    icon: "arcticons_freezer",
    bool: false,
  },
  {
    id: 8,
    name: "Chang yutgichlar",
    icon: "iconoir_washing-machine",
    bool: false,
  },
]);

const attributes = ref([
  { id: 1, name: "Oppo smartfonlar" },
  { id: 1, name: "Vivo smartfonlar" },
  { id: 1, name: "Realmi smartfonlar" },
  { id: 1, name: "Redmi smartfonlar" },
  { id: 1, name: "Xiaomi smartfonlar" },
  { id: 1, name: "Artel smartfonlar" },
  { id: 1, name: "Samasung smartfonlar" },
  { id: 1, name: "Iphone smartfonlar" },
  { id: 1, name: "Nokia smartfonlar" },
]);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.kategoriya {
  background-color: #134e9b;
}

.sub_menu {
  visibility: hidden;
  top: 45px;
  opacity: 0;
}
.open_menu:hover .sub_menu {
  top: 100px;
  opacity: 1;
  visibility: visible;
}

.open-modal {
  border-radius: 50%;
  /* background-color: #ff9900; */
  color: #fff;
}

.categories-list {
  position: absolute;
  top: 100px;
  left: 100px;
  /* width: 100%; */
  /* right: 180px; */

  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
