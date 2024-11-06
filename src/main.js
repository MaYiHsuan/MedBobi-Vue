import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./App.vue") },
  { path: "/service", component: () => import("./Service.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
