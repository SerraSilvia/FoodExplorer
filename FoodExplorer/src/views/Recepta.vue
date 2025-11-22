<script setup>
import { inject, computed } from "vue";

// Recibimos el id de la ruta (definido en router como props: true)
const props = defineProps({
  id: [Number, String] // Router pasa params como string a veces, mejor prevenir
});

// Obtenemos la lista de recetas desde provide() en App.vue
const receptes = inject("llistaReceptes");

// Buscamos la receta que coincide con el id
const recepta = computed(() =>
  receptes.value.find(recepta => recepta.id == props.id)
);
</script>

<template>
  <div v-if="recepta" class="detall-container">
    <h3>{{ recepta.titol }}</h3>
    <img :src="recepta.img" :alt="recepta.titol" class="img-detall" />

    <div class="info">
      <h4>Ingredients</h4>
      <ul>
        <li v-for="ing in recepta.ingredients" :key="ing">{{ ing }}</li>
      </ul>

      <h4>Passos</h4>
      <ol>
        <li v-for="pas in recepta.passos" :key="pas">{{ pas }}</li>
      </ol>
    </div>
    
    <router-link to="/receptes" class="tornar">← Tornar al llistat</router-link>
  </div>

  <p v-else>
    No s'ha trobat la recepta.
  </p>
</template>