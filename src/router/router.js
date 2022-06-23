import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Produto from "../views/Produto.vue";
// import Login from "../views/Login.vue";
// import Usuario from "../views/usuario/Usuario.vue";
// import UsuarioProdutos from "../views/usuario/Usuario.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      // component: Home,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: () => import("../views/Produto.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/usuario",
      // name: "usuario",
      component: () => import("../views/usuario/Usuario.vue"),
      children: [
        {
          path: "",
          name: "usuario",
          component: () => import("../views/usuario/UsuarioProdutos.vue"),
        },
        {
          path: "compras",
          name: "compras",
          component: () => import("../views/usuario/UsuarioCompras.vue"),
        },
        {
          path: "vendas",
          name: "vendas",
          component: () => import("../views/usuario/UsuarioVendas.vue"),
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: () => import("../views/usuario/UsuarioEditar.vue"),
        },
      ],
    },
  ],
  scrollBeahavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});
