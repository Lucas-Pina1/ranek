import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true,
    },
  ],
  scrollBeahavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});