<script setup></script>
<template>
  <div>
    <h1>Explora receptes delicioses i fàcils de preparar</h1>
    <img src="../../public/images/different_foods.jpg" alt="FoodExplorer Logo">
    <router-link to="/receptes" class="btn">Veure totes les receptes</router-link>
  </div>
</template>
<style>
.home {
  padding: 50px 20px;
  text-align: center;
  background: #fff3e0; /* fondo naranja muy suave */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Comic Sans MS', 'Chalkboard', cursive; /* tipografía kawaii */
}

/* Título */
h1 {
  color: #e67e22; /* naranja original */
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(230,126,34,0.3);
  margin-bottom: 20px;
}

/* Subtítulo */
.subtitle {
  color: #f39c12; /* naranja más claro */
  font-size: 1.5rem;
  margin-bottom: 30px;
}

/* Imagen con bordes redondeados y sombra */
.home-img {
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(230,126,34,0.2);
  margin-bottom: 30px;
  transition: transform 0.3s;
}
.home-img:hover {
  transform: scale(1.05);
}

/* Botón kawaii (manteniendo colores naranjas) */
.btn {
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 12px 30px;
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

/* Texto centrado y agradable */
p {
  line-height: 1.6;
}
</style>