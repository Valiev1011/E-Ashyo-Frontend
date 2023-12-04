<template>
    <div>
        <div class="bg-light p-[24px] rounded-tl-[24px] rounded-tr-[24px] tablet:rounded-[24px]  h-max min-w-[408px] max-w-[408px] min-h-[300px] sticky bottom-0 custom_modal-animation max-h-screen overflow-y-auto">
            <div class="flex items-center justify-between">
                <span class="text-[14px] font-[600] text-dark">
                </span>
                <button class="svg-dark" aria-label="exit-button">
                    <svg class="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <use xlink:href="/svg/sprite.svg#exit" width="100%" height="100%">
                        </use>
                    </svg>
                </button>
            </div>
            <div class="mt-[24px]">
                 <div class="flex flex-col gap-[24px]">
                    <div class="flex flex-col gap-[12px]">
                        <p class="text-center text-[24px] font-[700]">
                        Подтверждение</p>
                        <p class="max-w-[294px] mx-auto text-center text-[16px] font-[400] leading-[150%]">
                        <span>Мы отправили код на номер</span>
                            <div class="flex items-center gap-[8px]">
  <span class="text-dark font-[600]">
  +998 (90) 641 37 11</span>
  <button type="button" aria-label="Изменить" class=" flex items-center justify-center rounded-[10px] cursor-pointer transition-all ease-in-out duration-100 stroke-gray bg-[transparent] text-gray !p-0 hover:text-blue-primary hover:stroke-dark text-red-primary text-[14px] font-[400] leading-[150%]">
  Изменить</button>
  </div>
  </p>
  </div>
  <div class="flex flex-col gap-[10px]">
  <label class="text-[14px] text-dark font-[600] cursor-pointer" for="otpCode">
  Код подтверждения <span class="text-[14px] font-[600] text-red-primary">
  *</span>
  </label>
  <input type="text" name="otpCode" required class="w-full py-[13px] px-[20px] border border-solid !border-gray rounded-[10px] !cursor-pointer" id="otpCode" value="">
  </div>
  <button type="button" aria-label="Принимаю условия" disabled class="p-[14px] flex items-center justify-center cursor-pointer transition-all ease-in-out duration-100  text-light bg-red-primary stroke-light hover:bg-hover-red !py-[14px] rounded-[12px] text-[14px] font-[600] disabled:cursor-not-allowed stroke-light">
  Подтверждение</button>
  </div>
  </div>
  </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>