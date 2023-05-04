<template>
  <nav class="navbar bg-base-100">
    <div class="flex-1">
      <router-link class="btn btn-ghost normal-case text-xl" to="/"
        >ECOMMERCE</router-link
      >
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal rounded">
        <li class="font-medium uppercase">
          <router-link to="/login">login</router-link>
        </li>
        <li class="font-medium uppercase">
          <router-link to="/sobre">sobre</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "navbar",
  components: {
    RouterLink,
  },
});
</script>
