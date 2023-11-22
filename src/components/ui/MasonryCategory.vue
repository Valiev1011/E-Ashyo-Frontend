<template>
  <div
    class="w-[1180px] h-[511px] mx-auto mt-[110px] flex flex-wrap gap-[10px]"
  >
    <div class="container">
      <div class="wide" style="background: #5c4f8c">
        <div
          class="mt-[14px] rounded-[30px] border px-5 inline-flex justify-center items-center h-fit text-white"
        >
          <h2
            class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
          >
            Noutbooklar
          </h2>
        </div>
        <img class="mt-3" src="../../assets/notebook.png" alt="img" />
      </div>
      <div class="short" style="background: #797c7d">
        <div
          class="mt-[14px] rounded-[30px] border ml-5 px-5 h-fit inline-flex justify-center items-center w-[118px] text-white"
        >
          <h2
            class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
          >
            Konditsiyoner
          </h2>
        </div>
        <img class="ml-[18px] mt-[10px]" src="../../assets/ac.png" alt="img" />
      </div>
    </div>
    <div class="short overflow-hidden" style="background: #676d86">
      <div
        class="mt-[14px] rounded-[30px] border inline-flex justify-center items-center px-5 w-[118px] ml-5 h-fit text-white"
      >
        <h2
          class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
        >
          Smartfonlar
        </h2>
      </div>
      <img class="rounded-br-[7px]" src="../../assets/phone.png" alt="img" />
    </div>
    <div>
      <button class="last"><p>Ko'proq</p></button>
      <div class="last2" style="background: #888380">
        <img
          class="mt-[64px] ml-[40px] rounded-br-[7px]"
          src="../../assets/fridge24.png"
          alt="img"
        />
      </div>
    </div>
    <div class="container">
      <div class="short overflow-hidden" style="background: #a09188">
        <div
          class="mt-[12px] rounded-[30px] border inline-flex justify-center items-center px-5 w-[186px] ml-5 h-fit text-white"
        >
          <h2
            class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
          >
            Kiryuvish mashinasi
          </h2>
        </div>
        <img
          class="ml-[62px] rounded-br-[7px]"
          src="../../assets/wash.png"
          alt="img"
        />
      </div>
      <div class="wide" style="background: #ceaf75">
        <div
          class="mt-[12px] rounded-[30px] border ml-5 inline-flex justify-center items-center px-3 w-[186px] h-fit text-white"
        >
          <h2
            class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
          >
            Televizorlar
          </h2>
        </div>
        <img class="w-[320px]" src="../../assets/tv.png" alt="img" />
      </div>
    </div>
    <div class="container">
      <div class="short short-and" style="background: #888380">
        <div
          class="mt-[12px] rounded-[30px] border ml-5 inline-flex justify-center items-center px-3 w-[118px] h-fit text-white"
        >
          <h2
            class="font-poppins cursor-pointer not-italic leading-normal text-[14px] font-normal"
          >
            Muzlatgichlar
          </h2>
        </div>
        <img
          class="relative ml-[180px] bottom-[7px]"
          src="../../assets/fridge1.png"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wide {
  display: flex;
  justify-content: flex-end;
  width: 444px;
  height: 248px;
  border-radius: 7px;
}
.short {
  width: 220px;
  height: 248px;
  border-radius: 7px;
}
.short-and {
  width: 250px;
}
.container {
  width: auto;
  height: fit-content;
  display: flex;
  gap: 10px;
}
.last {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 250px;
  height: 58px;
  background: var(--primary-p-1, #134e9b);
  border-radius: 7px;
}
.last p {
  width: 56px;
  height: 20px;
  color: var(--secondry-white, #fff);
  /* Roboto/reguler16px */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}
.last2 {
  position: absolute;
  height: 440px;
  width: 250px;
  border-radius: 7px;
  margin-top: 10px;
}
</style>
