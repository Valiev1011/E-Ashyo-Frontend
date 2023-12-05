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
        <button
          v-if="similar(props?.item?.id)"
          @click="store.removeFromLikedProducts(props?.item?.id)"
        >
          <SvgIcon type="mdi" :path="mdiCardsHeart" class="text-[red]" />
        </button>
        <button v-else @click="store.addToLikedProducts(props?.item?.id)">
          <SvgIcon type="mdi" :path="mdiHeartOutline" />
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
        @click="toSinglePage(props?.item?.id)"
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
        v-if="findOut(props?.item?.id)"
        @click="toCartPage"
        class="w-[42px] h-[34px] rounded bg-[#134E9B] text-center flex items-center justify-center"
      >
        <SvgIcon type="mdi" :size="20" :path="mdiCheck" class="text-[white]" />
      </button>
      <button
        v-else
        class="w-[42px] h-[34px] rounded bg-[#134E9B] text-center flex items-center justify-center"
        @click="addToCart(props?.item?.id)"
      >
        <shop_bag />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { defineProps, onMounted, ref } from "vue";
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
      brand: {
        brand_name: string;
      };
    };
  }
  import { mdiHeartOutline, mdiCardsHeart, mdiCheck } from "@mdi/js";
  import { useAdminProductStore } from "../../store/products";
  //@ts-ignore
  import { danger, warning, success } from "../../plugins/Notification.ts";

  import { cartStore } from "../../store/cart";
  //@ts-ignore
  import SvgIcon from "@jamescoyle/vue-icon";

  const like = ref(false);
  const router = useRouter();
  const props = defineProps<IProps>();

  console.log(props.item);
  const store = useAdminProductStore();
  const cart_store = cartStore();
  // console.log(props.item.productMedia.url);

  const similar = (id: number) => {
    //@ts-ignore
    const answer = store?.liked?.filter((prod) => prod?.id == id);
    if (answer?.length) {
      return true;
    }
    return false;
  };

  const findOut = (id: number) => {
    const answer = cart_store?.items?.filter((prod) => prod.product_id == id);
    if (answer?.length) {
      return true;
    }
    return false;
  };
  const user_id = ref();
  onMounted(() => {
    const storedLikedProducts = localStorage.getItem("likedProducts");
    user_id.value = localStorage.getItem("user_id");
    if (storedLikedProducts) {
      store.liked = JSON.parse(storedLikedProducts);
    }
    localStorage.setItem("products", JSON.stringify(cart_store.items));
  });

  const added = ref(false);
  const ID = ref();

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
  const toCartPage = () => {
    router.push({ path: "/cart" });
  };

  const toSinglePage = (id: number) => {
    router.push({ name: "singleProduct", query: { id } });
  };
</script>
<style scoped></style>
