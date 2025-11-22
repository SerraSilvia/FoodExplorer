<script setup>
import { inject, computed } from "vue";

// Recibimos el id de la ruta
const props = defineProps({
  id: Number
});

// Obtenemos la lista de recetas desde provide()
const receptes = inject("llistaReceptes");

// Buscamos la receta que coincide con el id
const recepta = computed(() =>
  receptes.value.find(recepta => recepta.id === props.id)
);
</script>

<template>
  <div v-if="recepta">
    <h3>{{ recepta.titol }}</h3>
    <img :src="recepta.img" :alt="recepta.titol" width="300" />

    <h4>Ingredients</h4>
    <ul>
      <li v-for="ing in recepta.ingredients" :key="ing">{{ ing }}</li>
    </ul>

    <h4>Passos</h4>
    <ol>
      <li v-for="pas in recepta.passos" :key="pas">{{ pas }}</li>
    </ol>
  </div>

  <p v-else>
    No s'ha trobat la recepta.
  </p>
</template>
