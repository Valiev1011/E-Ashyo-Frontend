<template>
  <div class="w-full container mx-auto">
    <div class="w-full flex justify-between bg-[#EBEFF3] px-20">
      <div
        class="w-full flex gap-5 text-[#545D6A] font-sans text-[14px] font-normal border"
      >
        <div class="flex gap-2">
          <span>
            <router-link to="#"
              ><img
                src="../../components/icons/akar-icons_location.svg"
                alt="location"
            /></router-link>
          </span>
          <span>
            <router-link to="#">Tashkent</router-link>
          </span>
        </div>
        <span>
          <router-link to="/ashyo">About us</router-link>
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
          @click="gotohome"
        >
          Ashyo
        </h1>
      </div>
      <div class="w-3/6 flex items-center gap-3 mr-6">
        <div class="items-center justify-center">
          <button
            @click="toggleModal"
            :class="{ 'open-modal': isModalOpen }"
            class="flex text-white cursor-pointer bg-[#134E9B] px-3 py-3 rounded-md"
            id=""
          >
            <span v-if="isModalOpen" class="flex" id="">Kategoriya </span>

            <span v-else class="flex" id="">Kategoriya </span>

            <div :class="{ 'rotate-180': isModalOpen }" id="">
              <svg-icon
                type="mdi"
                :path="mdiChevronDown"
                class="text-white cursor-pointer"
                id=""
              ></svg-icon>
            </div>
          </button>

          <div
            v-if="isModalOpen"
            class="categories-list w-5/6 mx-auto flex"
            id=""
          >
            <div
              class="w-2/5 px-8 py-10 bg-[#EBEFF3] flex flex-col gap-2"
              id=""
            >
              <!-- <h2>Categories</h2> -->
              <div
                v-for="category in value"
                :key="category?.id"
                class="flex flex-col cursor-pointer"
                id=""
              >
                <p
                  v-if="category?.parent_category_id === null"
                  class="flex gap-4 py-3 hover:bg-[#fff]"
                  @mouseover="setHoveredCategory(category)"
                  id=""
                >
                  <img
                    :src="`http://localhost:5173/src/components/icons/${category?.icon}.svg`"
                    alt="icon"
                    id=""
                  />
                  {{ category?.category_name }}
                </p>
              </div>
            </div>
            <div class="w-3/5 bg-[white] px-16 py-10 flex flex-col gap-2" id="">
              <p class="font-bold" id="">Smartfonlar</p>
              <ul
                class="flex flex-col cursor-pointer"
                v-for="attribute in value"
                :key="attribute.id"
                id=""
              >
                <li
                  v-if="hoveredCategory === attribute?.parent_category_id"
                  class="flex gap-4 px-3 py-3 hover:bg-[#EBEFF3]"
                  id=""
                >
                  {{ attribute?.category_name }}
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
              @click="gotoScaleUnbalanced"
            ></svg-icon>
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md relative" @click="toLikePage">
            <svg-icon
              type="mdi"
              :path="mdiHeartOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
            <span
              class="bg-[red] w-6 h-6 rounded-full flex justify-center items-center text-white absolute text-sm -top-3 -right-3"
              v-if="productStore.liked.length"
              >{{ productStore.liked.length }}</span
            >
          </div>
          <div class="bg-[#EBEFF3] p-3 rounded-md relative" @click="toCartPage">
            <svg-icon
              type="mdi"
              :path="mdiShoppingOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
            <span
              class="bg-[red] w-6 h-6 rounded-full flex justify-center items-center text-white absolute text-sm -top-3 -right-3"
              v-if="cart_store.items.length"
              >{{ cart_store.items.length }}</span
            >
          </div>
          <div
            class="bg-[#EBEFF3] rounded-md p-3 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-100 stroke-gray text-gray hover:text-blue-primary hover:stroke-dark flex-col !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative !text-dark"
            @click="openModal"
          >
            <svg-icon
              type="mdi"
              :path="mdiAccountOutline"
              class="text-black cursor-pointer"
            ></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex pl-20 gap-5">
      <ol class="flex" v-for="item in value" :key="item.id">
        <li
          v-if="item.parent_category_id === null"
          class="text-[#545D6A] hover:underline hover:text-black"
        >
          {{ item.category_name }}
        </li>
      </ol>
    </div>
  </div>
  <template v-if="productStore.press">
    <template v-if="productStore.press">
        <div
          class="fixed left-0 right-0 top-0 bottom-0 flex justify-center tablet:items-start bg-black-glass z-[200] backdrop-blur overflow-y-auto max-h-[100dvh] min-h-[100dvh] tablet:!py-[50px] pt-[100px] tablet:!items-center"
        >
          <div
            class="bg-blue-50 p-[24px] rounded-[24px] tablet:rounded-[24px] h-max min-w-[408px] max-w-[408px] min-h-[300px] sticky bottom-0 custom_modal-animation max-h-screen overflow-y-auto"
          >
            <div class=" flex items-center justify-between h-5">
              <span class=" text-[14px] font-[600] text-dark"></span>
              <button
                class="w-8 font-bold bg-white text-[#134E9B]"
                aria-label="exit-button"
                @click="openModal"
              >
                Х
              </button>
            </div>
            <div class=" mt-[24px]">
              <div class="flex flex-col gap-[24px]">
                <p class="text-center text-dark text-[24px] font-[700]">
                  Login or register
                </p>
                <div class="flex flex-col gap-[10px]">
                  <label for="tel" class="flex items-center gap-[2px]"
                    >Type your phone number
                    <span class="text-[14px] font-[600] text-[red]">*</span>
                  </label>
                  <vee-form
                    :validation-schema="schema"
                    @submit="save"
                    class="flex flex-col gap-2"
                  >
                    <VInput
                      type="text"
                      name="phone"
                      label="Phone"
                      placeholder="(+998)-90-123-45-67"
                      :mask="'(+998)-##-###-##-##'"
                    ></VInput>
                    <VButton
                      btn_type="primary"
                      :isLoading="authStore.loading"
                      type="submit"
                      class="mt-5 text-[18px] px-8"
                    > Get the code</VButton>
                  </vee-form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </template>
    <template v-if="secondModal">
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center tablet:items-start bg-black-glass z-[200] backdrop-blur overflow-y-auto max-h-[100dvh] min-h-[100dvh] tablet:!py-[50px] pt-[100px] tablet:!items-center">
      <div class="bg-blue-50 p-[24px] rounded-[24px] tablet:rounded-[24px] h-max min-w-[408px] max-w-[408px] min-h-[300px] sticky bottom-0 custom_modal-animation max-h-screen overflow-y-auto">
      <div class="flex items-center justify-between">
      <span class="text-[14px] font-[600] text-dark">
      </span>
      <button
                class="w-8 font-bold bg-white text-[#134E9B]"
                aria-label="exit-button"
                @click="openModal"
              >
                Х
              </button>
      </div>
      <div class="mt-[22px]">
      <div class="flex flex-col gap-[15px]">
      <div class="flex flex-col gap-[9px]">
      <p class="text-center text-[24px] font-[700]">
      Confirmation</p>
      <p class="max-w-[294px] mx-auto text-center text-[16px] font-[400] leading-[150%]">
      <span>We sent a code to the number</span>
      <div class="flex items-center gap-[5px] justify-center">
      <span class="text-dark font-[600]">
      {{forConfirm}}</span>
      </div>
      </p>
      </div>
      <div class="flex flex-col gap-[7px]">
      <label class="text-[14px] text-dark font-[600] cursor-pointer" for="otpCode">
      confirmation code <span class="text-[14px] font-[600] text-[red]">
      *</span>
      </label>
      <vee-form :validation-schema="schema1" @submit="save1" class="flex flex-col gap-2">
          <VInput type="number"
              name="number"
              label=""
              placeholder="1234">
          </VInput>
          <VButton
            btn_type="primary"
            :isLoading="authStore.loading"
            type="submit"
            class="text-[18px] px-8"
          >Confirm
        </VButton>
      </vee-form>
      </div>
      </div>
      </div>
      </div>
    </div>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from "vue";
// @ts-ignore
import {
  mdiAccountOutline,
  mdiShoppingOutline,
  mdiHeartOutline,
  mdiScaleUnbalanced,
  mdiChevronDown,
} from "@mdi/js";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../store/category";
import { useAdminProductStore } from "../../store/products";
import {useAuthStore} from "../../store/auth"
import { cartStore } from "../../store/cart";

//@ts-ignore
import VButton from "../form/VButton.vue"
//@ts-ignore
import {danger,warning,success} from "../../plugins/Notification.ts"
//@ts-ignore
import VInput from "../form/VInput.vue";

 
const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const productStore = useAdminProductStore();
const authStore = useAuthStore()
const cart_store = cartStore()
const secondModal = ref(false)

const value = ref();
const options = [{ value: "smart", label: "smart" }];
const open = ref(false);
const modal = ref(false);
const forConfirm = ref()

const schema = computed(() => {
  return {
    phone: "required|phone:19",
  };
});
const schema1 = computed(() => {
  return {
    number: "required|min:4|max:4",
  };
});

const save = async (values: any) => {
  console.log(values);
  forConfirm.value = values.phone
  await authStore.sendOtp({
    phone_number: values.phone
      .split("")
      .filter((char:any) => char === "+" || !isNaN(+char))
      .join("")
  });
  if (authStore.error) {
    secondModal.value = false
    danger(authStore.error);
    authStore.error = null;
  } else {
    secondModal.value = true
    success("Otp sent");
  }
  // console.log(authStore.user);
  // loading.value = false;
};
const save1 = async (values: any) => {
  console.log(values);
  await authStore.verify({
    phone_number:forConfirm.value.split("")
      .filter((char:any) => char === "+" || !isNaN(+char))
      .join(""),
    verification_key:authStore?.user?.details,
    otp:values?.number.toString()
  })
  
  if (authStore.error) {
    danger(authStore.error);
    authStore.error = null;
  } else {
    productStore.press = false
    success("Login Success");
  }
  // console.log(authStore.user);
  // loading.value = false;
};

const clicked = () => {
  open.value = !open.value;
  console.log(open.value);
};

onMounted(async () => {
  value.value = await categoryStore.getCategories();
  await cart_store.getCart();

  localStorage.setItem("products",JSON.stringify(cart_store.items))
});

const hoveredCategory = ref();

const setHoveredCategory = (category: any) => {
  hoveredCategory.value = category.id;
};

const gotoScaleUnbalanced = () => {
  router.push("/comparison");
};
const gotohome = () => {
  router.push("/");
};

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

window.addEventListener("click", (e: any) => {
  if (!e.target.attributes["id"]) {
    closeModal();
  }
});
const toLikePage = () => {
  router.push({ path: "/like_page" });
};

const toCartPage = () => {
  router.push({ path: "/cart" });
};

const openModal = async () => {
  console.log("bosilidku");
  productStore.press = !productStore.press;
  console.log(productStore.press);
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
  /* border-radius: 50%; */
  /* background-color: #ff9900; */
  color: #fff;
}

.categories-list {
  position: absolute;
  top: 120px;
  left: 100px;
  /* width: 100%; */
  /* right: 180px; */

  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.inputStyle{
  -moz-appearance:unset; /* Firefox */
  appearance: none; /* Remove default appearance for other browsers */
  margin: 0; 
  -webkit-appearance: none;
}
input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        display: none;
      }
</style>
