import "./assets/main.css";

import { createApp } from "vue";
import VueCookies from "vue-cookies";
//@ts-ignore
import veeValidatePlugins from "@/plugins/vee-validate.js";

//@ts-ignore
import VueMask from "vue-the-mask";

import Vue3Toasity, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeValidatePlugins);
app.use(VueMask);
app.use(Vue3Toasity, {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  theme: "colored",
});
app.use(VueCookies);
app.use(ElementPlus);

app.mount("#app");
