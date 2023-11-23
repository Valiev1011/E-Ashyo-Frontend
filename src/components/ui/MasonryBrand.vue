<template>
  <div
    class="w-[1180px] container mx-auto h-[275px] flex gap-[10px] mt-[100px]"
  >
    <div class="base">
      <div class="short" style="background-color: rgba(103, 180, 55, 0.2)">
        <img src="../../assets/artel.png" alt="logo" />
      </div>
      <div class="tall" style="background: rgba(0, 0, 0, 0.1)">
        <img src="../../assets/apple.png" alt="logo" />
      </div>
    </div>
    <div class="base">
      <div class="tall" style="background-color: rgba(3, 78, 162, 0.1)">
        <img src="../../assets/samsung.png" alt="logo" />
      </div>
      <div class="short" style="background-color: rgba(0, 109, 184, 0.2)">
        <img src="../../assets/vivo.png" alt="logo" />
      </div>
    </div>
    <div class="base">
      <div class="short" style="background-color: rgba(0, 67, 156, 0.12)">
        <img src="../../assets/nokia.png" alt="logo" />
      </div>
      <div class="tall" style="background-color: rgba(255, 26, 31, 0.2)">
        <img src="../../assets/huawei.png" alt="logo" />
      </div>
    </div>
    <div class="base">
      <div class="tall last" style="background-color: rgba(255, 103, 0, 0.2)">
        <img src="../../assets/mi.png" alt="logo" />
      </div>
      <button
        class="last2"
        style="background: var(--secondry-background, #ebeff3)"
      >
        Ko'proq
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.short {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 310px;
  height: 98px;
  border-radius: 6px;
}
.tall {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  width: 310px;
  height: 165px;
}
.last {
  width: 200px;
  height: 228px;
}
.last2 {
  width: 200px;
  height: 35px;
  border-radius: 6px;
  color: var(--primary-p-1, #134e9b);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>
