<script setup>
import { inject, computed, watchEffect } from "vue";

const props = defineProps({
  id: [Number, String]
});

const receptes = inject("llistaReceptes");

const recepta = computed(() =>
  receptes.value.find(recepta => recepta.id == props.id)
);

watchEffect(() => {
  console.log("Recepta carregada:", recepta.value);
});

</script>

<template>
  <div class="recipe-view">
    
    <!-- Contenedor Principal (Tarjeta) -->
    <div v-if="recepta" class="card-container">
      
      <!-- Cabecera: Título a la izquierda, Botón a la derecha -->
      <header class="header-row">
        <h1>{{ recepta.titol }}</h1>
        <router-link to="/receptes" class="btn-close">
          ✕ Tornar al llistat
        </router-link>
      </header>

      <!-- Grid de contenido: 2 Columnas -->
      <div class="content-grid">
        
        <!-- Columna Izquierda: Imagen + Ingredientes -->
        <aside class="left-col">
          <div class="img-wrapper">
            <img :src="recepta.img" :alt="recepta.titol" class="recipe-mini-img" />
          </div>
          
          <div class="ingredients-box">
            <h3>Ingredients</h3>
            <ul>
              <li v-for="ing in recepta.ingredients" :key="ing">
                {{ ing }}
              </li>
            </ul>
          </div>
        </aside>

        <!-- Columna Derecha: Pasos (Ocupa el resto del espacio) -->
        <main class="right-col">
          <h3>Passos a seguir</h3>
          <div class="steps-container">
            <!-- Renderizado simple, sin números automáticos -->
            <div v-for="pas in recepta.passos" :key="pas" class="step-item">
              <p>{{ pas }}</p>
            </div>
          </div>
        </main>

      </div>
    </div>

    <div v-else class="not-found">
      <p>Recepta no trobada</p>
      <router-link to="/receptes">Tornar</router-link>
    </div>
  </div>
</template>

<style scoped>
/* Vista completa centrada vertical y horizontalmente */
.recipe-view {
  background-color: #f4f6f8; /* Gris muy claro de fondo de pantalla */
  height: 90vh; /* Ocupa toda la altura de la ventana */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  overflow: hidden; /* Evita scroll en el body */
}

/* Tarjeta Blanca Central */
.card-container {
  background: white;
  width: 90%;
  max-width: 1100px;
  height: 85vh; /* Dejamos un margen arriba y abajo */
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column; /* Header arriba, contenido abajo */
  padding: 30px;
  box-sizing: border-box;
}

/* --- CABECERA (Título + Botón Derecha) --- */
.header-row {
  display: flex;
  justify-content: space-between; /* Separa los elementos a los extremos */
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  flex-shrink: 0; /* Evita que la cabecera se encoja */
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.btn-close {
  text-decoration: none;
  color: #7f8c8d;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  transition: all 0.2s;
}

.btn-close:hover {
  background-color: #e67e22; /* Naranja marca */
  color: white;
  border-color: #e67e22;
}

/* --- LAYOUT GRID (Izquierda / Derecha) --- */
.content-grid {
  display: flex;
  gap: 30px;
  flex: 1; /* Ocupa todo el espacio vertical restante */
  overflow: hidden; /* Importante para que el scroll sea interno si hace falta */
}

/* COLUMNA IZQUIERDA (Imagen + Ingredientes) */
.left-col {
  width: 28%; /* Ancho fijo */
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto; /* Si hay muchos ingredientes, scroll aquí */
  padding-right: 10px; /* Espacio para el scrollbar */
}

/* Imagen pequeña y controlada */
.img-wrapper {
  width: 100%;
  height: 220px; /* Altura fija pequeña */
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.recipe-mini-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ingredients-box h3 {
  font-size: 1.1rem;
  color: #e67e22;
  margin-bottom: 10px;
  font-weight: 600;
}

.ingredients-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredients-box li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
  color: #555;
}

/* COLUMNA DERECHA (Pasos) */
.right-col {
  flex: 1; /* Ocupa el resto del ancho */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Scroll solo aquí si el texto es muy largo */
  padding-right: 10px;
}

.right-col h3 {
  font-size: 1.1rem;
  color: #e67e22;
  margin-bottom: 15px;
  font-weight: 600;
  position: sticky;
  top: 0;
  background: white; /* Para que el título no se tape al scrollear */
}

.step-item {
  margin-bottom: 15px;
  padding: 15px;
  background-color: #fdfdfd;
  border-radius: 8px;
  border-left: 4px solid #e67e22; /* Línea decorativa naranja */
}

.step-item p {
  margin: 0;
  line-height: 1.5;
  color: #444;
}

/* Scrollbar bonito (opcional, funciona en Chrome/Safari) */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #ccc; 
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #e67e22; 
}

/* Responsive para móviles (Aquí sí tiene que haber scroll porque no cabe) */
@media (max-width: 768px) {
  .card-container {
    height: auto;
    min-height: 100vh;
    width: 100%;
    border-radius: 0;
  }
  .content-grid {
    flex-direction: column;
    overflow: visible;
  }
  .left-col, .right-col {
    width: 100%;
    overflow: visible;
  }
  .recipe-view {
    height: auto;
    align-items: flex-start;
  }
}
</style>