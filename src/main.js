import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import PaginaCarregando from "@/components/PaginaCarregando.vue";

Vue.config.productionTip = false;

Vue.component("PaginaCarregando", PaginaCarregando);

Vue.filter("numeroPreco", (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
  console.log(valor);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
