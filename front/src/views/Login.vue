<template>
  <div class="main-container">
    <div class="card w-96 bg-base-100 my-10">
      <div class="card-body items-center">
        <div class="card-title">
          <span class="w-full text-accent text-4xl mb-10">Login</span>
        </div>
        <div class="form-control gap-5">
          <label class="input-group">
            <span class="w-24">Email</span>
            <input
              v-model="email"
              type="text"
              placeholder="johndoe@doe.com"
              class="input-style"
            />
          </label>
          <label class="input-group">
            <span class="w-24">Password</span>
            <input
              v-model="password"
              type="password"
              placeholder="123Senha!#$"
              class="input-style"
            />
          </label>
        </div>

        <div class="card-actions">
          <button type="submit" class="btn btn-primary mt-10" @click="login">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "../services/api";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await api.post("/client/login", payload);
        console.log(response.data);
        this.$router.push("/produtos");
      } catch (e: any) {}
    },
  },
});
</script>

<style>
.input-style {
  @apply input input-bordered focus:outline-none placeholder-neutral-500;
}
</style>
