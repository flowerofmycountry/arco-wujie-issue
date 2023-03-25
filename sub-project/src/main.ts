import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";

// const app = createApp(App);
// app.use(ArcoVue);
// app.mount("#app");

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App);
    instance.use(ArcoVue);
    instance.mount("#sub");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
} else {
  createApp(App).use(ArcoVue).mount("#sub");
}
