<script setup>
import { inject } from "vue";   
const receptes = inject("llistaReceptes");
</script>

<template>
  <div class="llistat-container">
    <!-- Encabezado -->
    <header class="section-header">
      <h1>Les nostres <span class="highlight">Receptes</span></h1>
      <p class="subtitle">Tria el teu pròxim plat preferit</p>
    </header>

    <!-- Grid -->
    <div class="cards-grid">
      <div v-for="recepta in receptes" :key="recepta.id" class="recipe-card">
        
        <!-- Imagen: Ahora el contenedor es más alto y la imagen se ve entera -->
        <div class="card-image-wrapper">
          <img :src="recepta.img" :alt="recepta.titol" class="recepta-img"/>
        </div>

        <div class="card-body">
          <h2>{{ recepta.titol }}</h2>
          
          <router-link :to="{ name: 'Recepta', params: { id: recepta.id } }" class="btn-card">
            Veure detall
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.llistat-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  color: #2c3e50;
}

/* --- HEADER ALINEADO --- */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  /* Reducimos margen inferior para pegarlo al subtítulo */
  margin: 0 0 8px 0; 
  letter-spacing: -0.5px;
}

.highlight {
  color: #e67e22;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;            /* elimina cualquier espacio extra */
  padding-top: 0;       /* asegura que no se desplace */
  display: block;       /* garantiza que quede justo debajo */
}

/* --- GRID SYSTEM --- */
.cards-grid {
  display: grid;
  /* Columnas un poco más anchas para que la imagen luzca más */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 35px;
}

/* --- TARJETA --- */
.recipe-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  /* Hacemos la tarjeta alta para estilo "alargado" */
  min-height: 450px; 
}

.recipe-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(230, 126, 34, 0.15);
  border-color: #fceade;
}

/* --- IMAGEN ENTERA --- */
.card-image-wrapper {
  /* Aumentamos la altura para dar espacio a imágenes verticales o cuadradas */
  height: 280px; 
  width: 100%;
  background-color: #fff; /* Fondo blanco por si la imagen no llena el ancho */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px; /* Un pequeño margen interno para que "respire" */
  box-sizing: border-box;
}

.recepta-img {
  width: 100%;
  height: 100%;
  /* CLAVE: contain muestra la imagen completa sin cortarla */
  object-fit: contain; 
  transition: transform 0.5s ease;
}

.recipe-card:hover .recepta-img {
  transform: scale(1.05);
}

/* --- CUERPO --- */
.card-body {
  padding: 20px 25px 30px 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Título arriba, botón abajo del todo */
  text-align: center;
  border-top: 1px solid #f9f9f9;
}

.card-body h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 20px 0;
}

.btn-card {
  display: inline-block;
  background-color: #e67e22;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 0;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(230, 126, 34, 0.2);
}

.btn-card:hover {
  background-color: #d35400;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(230, 126, 34, 0.3);
}

.btn-card:active {
  transform: translateY(0);
}
</style>