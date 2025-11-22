<script setup>
import { ref, provide } from "vue";

</script>

<template>
    <div class="llistat">
        <h1>Receptes</h1>
        <div v-for="recepta in receptes" :key="recepta.id" class="recepta-llista">
            <h2>{{ recepta.titol }}</h2>
            <img :src="recepta.img" :alt="recepta.titol" class="recepta-img"/>
            <router-link :to="{ name: 'Recepta', params: { id: recepta.id } }">
              Veure detall
            </router-link>
        </div>
    </div>
</template>