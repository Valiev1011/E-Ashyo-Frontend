<!-- <template>
  <div class="container">
    <div
      class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-end tablet:items-start bg-black-glass z-[200] backdrop-blur overflow-y-auto max-h-[100dvh] min-h-[100dvh] tablet:!py-[50px] pt-[100px] tablet:!items-center"
      v-if="bool"
    >
      <div
        class="bg-light p-[24px] rounded-tl-[24px] rounded-tr-[24px] tablet:rounded-[24px] h-max min-w-[408px] max-w-[408px] min-h-[300px] sticky bottom-0 custom_modal-animation max-h-screen overflow-y-auto"
      >
        <div class="flex items-center justify-between">
          <span class="text-[14px] font-[600] text-dark"></span>
          <button class="svg-dark text-black bg-black" aria-label="exit-button">
            <svg
              class="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <use
                xlink:href="/svg/sprite.svg#exit"
                width="100%"
                height="100%"
              ></use>
            </svg>
          </button>
        </div>
        <div class="mt-[24px]">
          <div class="flex flex-col gap-[24px]">
            <p class="text-center text-dark text-[24px] font-[700]">
              Вход или регистрация
            </p>
            <div class="flex flex-col gap-[10px]">
              <label for="tel" class="flex items-center gap-[2px]"
                >Введите номер телефона
                <span class="text-[14px] font-[600] text-red-primary">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="+998 (__) ___ __ __"
                class="rounded-[10px] border border-solid border-gray py-[13px] px-[20px]"
                id="tel"
                value=""
              />
            </div>
            <button
              type="button"
              aria-label="Принимаю условия"
              disabled
              class="p-[14px] flex items-center justify-center cursor-pointer transition-all ease-in-out duration-100 text-light bg-red-primary stroke-light hover:bg-hover-red !py-[14px] rounded-[12px] text-[14px] font-[600] disabled:cursor-not-allowe stroke-light"
            >
              Получить код
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAdminProductStore } from "../../store/products";

const store = useAdminProductStore();
const bool = ref();

onMounted(async () => {
  bool.value = store.press;
  console.log(bool.value);
});
</script>

<style scoped></style>
