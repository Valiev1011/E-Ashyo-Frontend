<template>
  <div class="w-full h-10 container mx-auto">
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
    <div class="w-full mb-10 flex gap-14 pl-16">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="la:balance-scale-right">
                <path
                  id="Vector"
                  d="M6.00329 4.05781C5.91185 4.02441 5.80964 4.06169 5.76119 4.14613L4.97192 5.52168L1.02749 12.2457C1.00949 12.2764 1 12.3113 1 12.3469V12.5218C1 14.8974 2.98419 16.8301 5.42308 16.8301C7.86196 16.8301 9.84615 14.8974 9.84615 12.5218V12.3469C9.84615 12.3113 9.83667 12.2764 9.81867 12.2457L6.40338 6.4221C6.30852 6.26035 6.46839 6.06872 6.64452 6.13306L9.80661 7.28807C9.83354 7.29791 9.84615 7.32317 9.84615 7.35184C9.84615 8.42463 10.5248 9.33826 11.4822 9.72808C11.5611 9.76019 11.6154 9.83536 11.6154 9.92052V20.0767C11.6154 20.1871 11.5258 20.2767 11.4154 20.2767H8.27692C8.16647 20.2767 8.07692 20.3662 8.07692 20.4767V21.8C8.07692 21.9105 8.16647 22 8.27692 22H13.1846C13.2951 22 13.3846 21.9105 13.3846 21.8V9.92031C13.3846 9.83525 13.4387 9.76018 13.5174 9.72795C13.858 9.58855 14.1649 9.38121 14.4183 9.11933C14.4765 9.05911 14.5645 9.03628 14.6429 9.06597L18.462 10.5129C18.5778 10.5568 18.6263 10.6943 18.5636 10.8011L15.1813 16.5678C15.1633 16.5985 15.1538 16.6334 15.1538 16.669V16.8438C15.1538 19.2186 17.138 21.1383 19.5769 21.1383C22.0158 21.1383 24 19.2186 24 16.8438V16.669C24 16.6334 23.9905 16.5985 23.9725 16.5678L19.6127 9.13614C19.5896 9.09668 19.5536 9.06635 19.5108 9.05021L15.1988 7.42423C15.1686 7.41282 15.1538 7.38418 15.1538 7.35184C15.1538 5.92666 13.9632 4.76687 12.5 4.76687C12.1145 4.76832 11.7341 4.85208 11.3854 5.01227C11.0794 5.15289 10.8044 5.34939 10.5752 5.59069C10.5176 5.65129 10.4301 5.67499 10.3516 5.64631L6.00329 4.05781ZM12.5 6.49019C12.7278 6.50011 12.9428 6.59523 13.1004 6.75573C13.258 6.91624 13.3459 7.12976 13.3459 7.35184C13.3459 7.57392 13.258 7.78745 13.1004 7.94795C12.9428 8.10846 12.7278 8.20357 12.5 8.2135C12.2722 8.20357 12.0572 8.10846 11.8996 7.94795C11.742 7.78745 11.6541 7.57392 11.6541 7.35184C11.6541 7.12976 11.742 6.91624 11.8996 6.75573C12.0572 6.59523 12.2722 6.50011 12.5 6.49019ZM5.25058 8.52127C5.32786 8.38955 5.51829 8.38955 5.59557 8.52127L7.2606 11.3589C7.33884 11.4922 7.24269 11.6601 7.08811 11.6601H3.75805C3.60346 11.6601 3.50732 11.4922 3.58555 11.3589L5.25058 8.52127ZM19.4044 12.8425C19.4817 12.7108 19.6721 12.7108 19.7494 12.8425L21.4065 15.6672C21.4847 15.8005 21.3886 15.9684 21.234 15.9684H17.9198C17.7652 15.9684 17.6691 15.8005 17.7473 15.6672L19.4044 12.8425ZM3.04679 13.6462C2.98489 13.5218 3.08093 13.3834 3.21988 13.3834H7.62754C7.76614 13.3834 7.86219 13.5211 7.80084 13.6454C7.60747 14.0371 7.31481 14.3763 6.94853 14.6299C6.5028 14.9385 5.96991 15.1051 5.42308 15.1067C4.37476 15.1067 3.47594 14.5086 3.04679 13.6462ZM17.1916 17.9527C17.1312 17.8285 17.2273 17.6917 17.3654 17.6917H21.7884C21.9265 17.6917 22.0226 17.8285 21.9623 17.9527C21.7701 18.3484 21.4769 18.6915 21.1087 18.9479C20.6617 19.2591 20.1264 19.4272 19.5769 19.4288C19.0275 19.4272 18.4921 19.2591 18.0451 18.9479C17.677 18.6915 17.3838 18.3484 17.1916 17.9527Z"
                  fill="#545D6A"
                />
              </g>
            </svg>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="heart">
                <path
                  id="heart_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                  fill="#545D6A"
                />
              </g>
            </svg>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="shopping-bag">
                <path
                  id="shopping-bag_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                  fill="#545D6A"
                />
              </g>
            </svg>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="fi:users">
                <path
                  id="Vector"
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="#545D6A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="#545D6A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { mdiChevronDown } from "@mdi/js";
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
    name: "Smartfonlar va Aksasuerlar",
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
