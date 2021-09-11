<template>
  <div class="container container-fluid border">
    <form @submit.prevent="insertPost">
      <div class="form-floating mt-1 mb-1">
        <label for="floatingTextarea2">Valor:</label>
        <textarea
          class="form-control"
          v-model="post.valor"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        <label for="floatingTextarea2">Nome:</label>
        <textarea
          class="form-control"
          v-model="post.nome"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        <label for="floatingTextarea2">Descrição:</label>
        <textarea
          class="form-control"
          v-model="post.descricao"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        
      <div class="text-center text-lg-start pt-2">
        <button
          type="submit"
          class="btn btn-primary"
          style="padding-left: 2.5rem; padding-right: 2.5rem"
        >
          Postar
        </button>
      </div>
      </div>
    </form>
  </div>
</template>
<script src="./index.js"></script>
