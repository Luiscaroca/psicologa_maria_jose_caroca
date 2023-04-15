import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

createApp(App)
  .use(router)
  .use(BootstrapIconsPlugin)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
