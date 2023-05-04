<template>
  <div class="main-container">
    <div class="cards-group">
      <div class="card-container">
        <router-link to="/servicos">
          <div class="card-body items-center">
            <div class="card-title text-accent">
              <span class="w-full text-4xl"> Serviços </span>
            </div>
            <figure className="p-4">
              <img :src="serviceImage" alt="Shoes" className="rounded-md" />
            </figure>

            <ul class="rounded-box text-center">
              <li class="font-medium">FORMATAÇÃO DE PC</li>
              <li class="font-medium">MANUTENÇÃO PREVENTIVA</li>
              <li class="font-medium">MANUTENÇÃO CORRETIVA</li>
              <li class="font-medium">REMOÇÃO DE VÍRUS</li>
              <li class="font-medium">TROCA DE PEÇAS</li>
            </ul>
          </div>
        </router-link>
      </div>

      <div class="card-container">
        <router-link to="/produtos">
          <div class="card-body items-center">
            <div class="card-title text-accent">
              <span class="w-full text-4xl"> Produtos </span>
            </div>
            <figure className="p-4">
              <img :src="productImage" alt="Shoes" className="rounded-md" />
            </figure>

            <ul class="w-56 rounded-box text-center">
              <li class="font-medium">MOUSE</li>
              <li class="font-medium">TECLADO</li>
              <li class="font-medium">PROCESSADOR</li>
              <li class="font-medium">MEMORIA RAM</li>
              <li class="font-medium">PLACA DE VIDEO</li>
              <li class="font-medium">E MUITO MAIS...</li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceImage from "../assets/manutencao.jpg";
import ProductImage from "../assets/product.jpg";

export default defineComponent({
  name: "HomeComponent",
  setup() {
    return {
      serviceImage: ServiceImage,
      productImage: ProductImage,
    };
  },
});
</script>

<style>
.card-container {
  @apply card bg-base-200 hover:opacity-95 w-80 sm:max-w-sm hover:duration-300 hover:transition-all hover:scale-y-105 hover:scale-x-105;
}
.cards-group {
  @apply container max-h-screen flex flex-col items-center gap-8 sm:flex-row sm:items-stretch justify-center my-10;
}
</style>
