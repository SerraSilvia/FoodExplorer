<script setup></script>

<template>
  <div class="home">
    <div class="container">

      <div class="text-content">
        <h1>Explora receptes <span class="highlight">delicioses</span></h1>
        <p class="subtitle">Fàcils de preparar i perfectes per al teu dia a dia.</p>
      </div>

      <div class="image-wrapper">
        <img 
          src="/images/different_foods.jpg" 
          alt="FoodExplorer Logo" 
          class="hero-img"
        />
      </div>

      <div class="action-area">
        <router-link to="/receptes" class="btn-primary">
          Veure totes les receptes
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

.home {
  background-color: #ffffff; /* Fondo blanco solicitado */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  color: #2c3e50; /* Gris oscuro profesional en lugar de negro puro */
}

/* Contenedor principal que limita el ancho */
.container {
  max-width: 900px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; /* Espacio consistente entre elementos */
}
.text-content{
  padding-top: 50px;
}

/* Tipografía */
h1 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* El toque naranja de la paleta original, usado como acento */
.highlight {
  color: #e67e22;
  position: relative;
  display: inline-block;
}

.subtitle {
  font-size: 1.25rem;
  color: #7f8c8d; /* Gris medio para subtítulos */
  font-weight: 400;
  margin: 0;
  max-width: 600px;
}

/* --- CONTROL DE IMAGEN --- */
.image-wrapper {
  width: 100%;
  max-width: 600px; /* Ancho máximo elegante */
  border-radius: 24px;
  overflow: hidden; /* CLAVE: Esto corta cualquier sobrante */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); /* Sombra difusa y moderna */
  border: 1px solid rgba(0,0,0,0.05);
  line-height: 0; /* Elimina espacios fantasma debajo de la imagen */
  padding: 20px 20px;
}

.hero-img {
  width: 100%;       /* Se adapta al ancho del wrapper */
  height: auto;      /* Mantiene proporción */
  object-fit: cover; /* Cubre el área sin deformarse */
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-wrapper:hover .hero-img {
  transform: scale(1.02); /* Efecto zoom muy sutil y elegante */
}

/* --- BOTÓN PROFESIONAL --- */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #e67e22; /* Naranja original */
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 16px 48px;
  border-radius: 8px; /* Bordes menos redondeados = más profesional */
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(230, 126, 34, 0.2);
}

.btn-primary:hover {
  background-color: #d35400; /* Un tono más oscuro */
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(230, 126, 34, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .container {
    gap: 30px;
  }
}
</style>