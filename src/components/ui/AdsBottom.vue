<template>
  <div class="container mt-[120px]">
    <div class="items-center justify-center mt-[50px] pb-[80px]">
      <div class="main flex flex-row justify-evenly relative">
        <img class="ear" src="../../assets/img/ear.png" alt="EarPhone" />
        <div class="flex flex-col justify-center">
          <p>
            Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
          </p>
          <button>Batafsil</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .main {
    width: 100%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #282828;
  }
  p {
    width: 438px;
    color: var(--secondry-white, #fff);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px; /* 118.75% */
  }
  button {
    display: inline-flex;
    padding: 18px 16px;
    align-items: flex-start;
    border-radius: 6px;
    background: #fff;
    margin-top: 30px;
    width: 180px;
    justify-content: center;
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 2px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  button:hover {
    background: rgb(112, 112, 112);
    color: white;
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
  .ear {
    width: 518px;
    height: 493px;
    flex-shrink: 0;
  }
</style>
