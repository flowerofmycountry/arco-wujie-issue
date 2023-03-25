import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import WujieVue from "wujie-vue3";

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

const app = createApp(App);
app.use(WujieVue);
app.use(ArcoVue);
app.mount("#app");
