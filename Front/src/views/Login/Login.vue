<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="login">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  v-model="user.email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Insira um email valido"
                  required
                />
                <label class="form-label" for="form3Example3">Email</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  v-model="user.password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Insira sua senha"
                  required
                />
                <label class="form-label" for="form3Example4">Senha</label>
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src='./index.js'></script>

<style src='./Style.css'></style>