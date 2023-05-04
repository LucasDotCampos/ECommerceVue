<template>
  <div class="main-container">
    <h1 class="text-4xl">Produtos</h1>

    <div class="w-1/2 mb-6">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="search-input"
          placeholder="Buscar produtos"
          required
          v-model="searchText"
          @input="filterItems"
        />
      </div>
    </div>

    <div class="products-list">
      <div
        class="card w-72 bg-base-100"
        v-for="product in filteredItems"
        :key="product.id"
      >
        <figure class="px-10 pt-10">
          <img
            :src="imageSource + '/files/' + product.image"
            alt="Product image"
            class="rounded-xl"
          />
        </figure>

        <div class="card-body items-center">
          <h2 class="card-title">
            {{ product.name }}
          </h2>
          <p class="line-through">R${{ product.price * 2 }}</p>
          <h3>R${{ product.price }}</h3>
          <div class="card-actions">
            <button class="btn btn-primary">
              <v-icon icon="mdi-cart-arrow-down" />Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../interfaces/Product";
import { api } from "../services/api";

export default defineComponent({
  name: "Products",
  setup() {
    const imageSource = import.meta.env.VITE_BASEURL;
    return {
      imageSource,
    };
  },
  data() {
    return {
      products: [] as Product[],
      searchText: "",
    };
  },
  computed: {
    filteredItems() {
      if (this.searchText.trim() === "") {
        return this.products;
      } else {
        return this.products.filter((i) =>
          i.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    },
  },

  async mounted() {
    const response = await api.get<Product[]>("/product");
    this.products = response.data;
    console.log(response.data);
  },
  methods: {
    filterItems() {
      this.filteredItems;
    },
  },
});
</script>
<style>
.products-list {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center;
}

.search-input {
  @apply block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>
