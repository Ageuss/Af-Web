<template>
  <div class="home">
    <br /><br />
    <div class="col-lg-6 offset-lg-3">
      <h3>Loja virtual</h3>
      <p>Usuários:</p>
      <button><router-link to="/ListarUser">Listar todos usuários</router-link></button>

      <p>Produto:</p>
      <button class="mr-2"><router-link to="/AdicionarProduto">Adicionar produto</router-link></button>
      <button class="mr-2">Buscar produto por nome</button>
      <button class="mr-2">Listar todos os produtos</button>
      <button class="mr-2">Atualizar produto</button>
      <button class="mr-2">Deletar produto</button><br /><br />

      <p>Compras:</p>
      <button class="mr-2">Comprar</button>
      <button class="mr-2">Ver compras</button>
    </div>
  </div>
</template>
<script>

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from "../components/Header.vue";
import ListarUser from "../views/ListarUser/ListarUser.vue";
import AdicionarProduto from "../views/AdicionarProduto/AdicionarProduto.vue";
export default {
  name: "Home",
  components: {
    Header,
    ListarUser,
    AdicionarProduto
  },
  methods: {
     listarUser() {
      api.post('/users/login', this.user).then((Response) => {
        console.log(Response.data)
        this.$router.push({
            path: '/ListarUser'
          })
      })
    }
  },
};
</script>

<style>
</style>