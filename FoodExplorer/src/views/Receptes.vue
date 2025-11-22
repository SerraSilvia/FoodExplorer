<script setup>
import { inject } from "vue";   
const receptes = inject("llistaReceptes");
</script>

<template>
  <div class="llistat">
    <h1>Receptes</h1>
    <div class="cards-container">
      <div v-for="recepta in receptes" :key="recepta.id" class="recepta-card">
        <h2>{{ recepta.titol }}</h2>
        <img :src="recepta.img" :alt="recepta.titol" class="recepta-img"/>
        <router-link :to="{ name: 'Recepta', params: { id: recepta.id } }" class="btn">
          Veure detall
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.llistat {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #e67e22;
  margin-bottom: 30px;
}

/* Contenedor de las cards usando grid para 3 columnas */
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 50px;
  justify-items: center; /* centra las cards en cada columna */
}

/* Cada card */
.recepta-card {
  background: #fff3e0; /* fondo naranja muy suave */
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(230,126,34,0.2);
  width: 100%;
  max-width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.recepta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(230,126,34,0.3);
}

.recepta-card h2 {
  font-size: 1.2rem;
  color: #e67e22;
  margin-bottom: 15px;
  height: 50px;
}

img{
  max-height: 250px;
}
/* Imagen dentro de la card */
.recepta-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  object-fit: cover;
}

/* Botón estilo kawaii-naranja */
.btn {
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px rgba(230,126,34,0.4);
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(230,126,34,0.5);
  background: linear-gradient(135deg, #d35400, #e67e22);
}

</style>
