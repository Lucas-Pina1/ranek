<template>
  <p>Produto {{ id }}</p>
</template>

<script>
import { api } from "../services/services.js";

export default {
  name: "ProdutoView",
  props: ["id"],
  data() {
    return {
      produto: null,
    };
  },
  methods: {
    getProduto() {
      api
        .get(`/produto/${this.id}`)
        .then((response) => (this.produto = response.data));
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style></style>
