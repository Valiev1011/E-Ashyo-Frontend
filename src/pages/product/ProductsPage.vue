<template>
  <br />
  <div class="w-full flex gap-5 items-start container">
    <div class="w-[25%] bg-[#EBEFF3] p-5 rounded-lg flex flex-col gap-5">
      <div class="">
        <h2 class="mb-3 font-medium">Narx [so'm]</h2>
        <div class="flex justify-between gap-2">
          <div class="w-1/2">
            <p>dan</p>
            <input
              type="number"
              class="w-full border-none rounded-lg bg-white text-black outline-none px-2 py-1"
              v-model="value[0]"
            />
          </div>
          <div class="w-1/2">
            <p>gacha</p>
            <input
              type="number"
              class="w-full border-none rounded-lg bg-white text-black outline-none px-2 py-1"
              v-model="value[1]"
            />
          </div>
        </div>
        <div class="slider-demo-block">
          <el-slider
            v-model="value"
            range
            :max="10000000"
            @change="handleSliderStop"
          />
        </div>
      </div>

      <div>
        <h1 class="mb-3 font-medium">Brendi</h1>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(brand, index) in brands" :key="index">
            <div>
              <p
                class="bg-[#fff] px-3 p-2 rounded-full cursor-pointer"
                :class="brandId == brand.id ? 'bg-[blue]' : ''"
                @click="setBrand(brand.id)"
              >
                {{ brand.brand_name }}
              </p>
              <!-- <p
                class="bg-[#fff] px-3 p-2 rounded-full cursor-pointer"
                :class="brandId != null ? 'bg-[blue]' : ''"
                @click="setBrand(brand.id)"
              >
                {{ brand.brand_name }}
              </p> -->
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="mb-3 font-medium">Tezkor xotira RAM</h1>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(ram, index) in rams" :key="index">
            <div>
              <p class="bg-[#fff] px-3 p-2 rounded-full">
                {{ ram.ram_volume }} GB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="mb-3 font-medium">Doimiy hotira ROM</h1>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(rom, index) in roms" :key="index">
            <div>
              <p class="bg-[#fff] px-3 p-2 rounded-full">
                {{ rom.rom_volume }} GB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="mb-3 font-medium">Akkumulyator hajmi</h1>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(mah, index) in mahs" :key="index">
            <div>
              <p class="bg-[#fff] px-3 p-2 rounded-full">
                {{ mah.mah_volume }} mAh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-4/5">
      <div class="flex gap-10 flex-wrap">
        <div
          v-if="productStore.searched.length > 0"
          v-for="(item, index) in productStore.searched"
          :key="index"
        >
          <VCard :item="item"> </VCard>
        </div>
        <div
          v-if="filter.length > 0"
          v-for="(item1, index) in filter"
          :key="Math.random() + index"
        >
          <VCard :item="item1"> </VCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProductCard from "@/components/form/VCard.vue";
  import type { IProduct } from "@/types/productTypes";
  import { ref, watch, toRefs, reactive, onMounted, computed } from "vue";
  const currentPage = ref(1);
  const value = ref([0, 10000000]);
  import { useAdminProductStore } from "../../store/products";
  import { useRoute } from "vue-router";
  const productStore = useAdminProductStore();
  const route = useRoute();

  import VCard from "../../components/form/VCard.vue";

  const data = reactive({ value: 0 });
  const max = ref(10000);
  const min = ref(0);
  // const value = ref([0, 1000000]);
  const filter = ref([] as IProduct[]);
  // watch(value, async (val) => {
  //   filter.value = await productStore.productFilter({
  //     price: { from: val[0], to: val[1] },
  //   });
  // });
  const brands = ref(null);
  onMounted(async () => {
    brands.value = await productStore.getBrands();
  });
  const brandId = ref();
  const setBrand = (id: number) => {
    brandId.value = id;
    handleSliderStop();
  };

  async function handleSliderStop() {
    // This method will be called after the user stops sliding
    // You can send your request to the backend here
    filter.value = await productStore.productFilter({
      price: { from: value.value[0], to: value.value[1] },
      brand_id: brandId.value,
    });
    console.log(filter.value);
  }

  // const brands = ref([
  //   {
  //     brand_name: "Vivo",
  //   },
  //   {
  //     brand_name: "Samsung",
  //   },
  //   {
  //     brand_name: "Apple",
  //   },
  //   {
  //     brand_name: "Tecno",
  //   },
  //   {
  //     brand_name: "Nokia",
  //   },
  //   {
  //     brand_name: "Oppo",
  //   },
  //   {
  //     brand_name: "Xiaomi",
  //   },
  //   {
  //     brand_name: "Realmi",
  //   },
  //   {
  //     brand_name: "Huawei",
  //   },
  // ]);

  const rams = ref([
    {
      ram_volume: 2,
    },
    {
      ram_volume: 3,
    },
    {
      ram_volume: 4,
    },
    {
      ram_volume: 6,
    },
    {
      ram_volume: 8,
    },
    {
      ram_volume: 12,
    },
    {
      ram_volume: 16,
    },
  ]);

  const roms = ref([
    {
      rom_volume: 32,
    },
    {
      rom_volume: 64,
    },
    {
      rom_volume: 128,
    },
    {
      rom_volume: 256,
    },
    {
      rom_volume: 512,
    },
  ]);

  const mahs = ref([
    {
      mah_volume: 3000,
    },
    {
      mah_volume: 3200,
    },
    {
      mah_volume: 3600,
    },
    {
      mah_volume: 4000,
    },
    {
      mah_volume: 4500,
    },
    {
      mah_volume: 5000,
    },
    {
      mah_volume: 6000,
    },
    {
      mah_volume: 7000,
    },
  ]);

  const items = ref([
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
    {
      id: 1,
      name: "airpods 2",
      price: 500000,
      sale_price: 100000,
      average_rating: 4.8,
      productMedia: [{ url: "http://localhost:5173/src/assets/airpods.png" }],
    },
  ]);
</script>

<style scoped>
  .slider-demo-block {
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
    z-index: 0;
  }
</style>
