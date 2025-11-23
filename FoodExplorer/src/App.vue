<script setup>
import { ref, provide } from "vue";

const receptes = ref([
  {
    id: 1,
    titol: "Butter Chicken",
    // CORRECCIÓN: Rutas absolutas desde public (mejor práctica)
    img: "/images/butterChicken.webp",
    ingredients: [
      "1 kg de pollastre, tallat a trossos",
      "200 g de mantega",
      "1 ceba picada",
      "3 grans d'all picats",
      "1 tros de gingebre fresc ratllat",
      "400 g de tomàquets triturats",
      "200 ml de nata líquida",
      "2 culleradetes de garam masala",
      "1 culleradeta de cúrcuma",
      "1 culleradeta de comí mòlt",
      "1 culleradeta de pebre vermell",
      "Sal al gust",
      "Coriandre fresc per decorar",
    ],
    passos: [
      "Desfés 100 g de mantega en una paella gran i sofregiu la ceba, l'all i el gingebre fins que estiguin daurats.",
      "Afegeix el pollastre i cuina'l fins que s'enrossi per tots els costats.",
      "Afegeix les espècies (garam masala, cúrcuma, comí i pebre vermell) i cuina durant 2 minuts.",
      "Vessa els tomàquets triturats i cuina a foc lent durant 10 minuts.",
      "Afegeix la nata líquida i els 100 g restants de mantega, cuina a foc baix fins que la salsa espesseixi.",
      "Serveix amb arròs basmati i coriandre fresc.",
    ],
  },
  {
    id: 2,
    titol: "Pastís de Carn",
    img: "/images/pastelCarne.webp",
    ingredients: [
      "500 g de carn picada de vedella",
      "1 ceba picada",
      "2 grans d'all picats",
      "1 pastanaga ratllada",
      "1 ou",
      "100 g de pa ratllat",
      "100 ml de llet",
      "Sal i pebre al gust",
      "2 cullerades de salsa de tomàquet",
      "1 cullerada de mostassa",
      "Oli per fregir",
    ],
    passos: [
      "En una paella, escalfa oli i sofregiu la ceba, l'all i la pastanaga fins que estiguin tous.",
      "En un bol gran, barreja la carn picada amb l'ou, el pa ratllat, la llet, la salsa de tomàquet, la mostassa, i els ingredients sofregits. Salpebra al gust.",
      "Forma una massa compacta i posa-la en un motlle per a forn.",
      "Cuina al forn preescalfat a 180°C durant 40-45 minuts.",
      "Serveix calent, acompanyat de puré de patates o amanida.",
    ],
  },
  {
    id: 3,
    titol: "Spaghetti Carbonara",
    img: "/images/spaguetti.jpg",
    ingredients: [
      "200 g d'espaguetis",
      "100 g de panceta",
      "2 ous",
      "50 g de formatge parmesà ratllat",
      "50 g de formatge pecorino ratllat",
      "1 gra d'all",
      "Sal i pebre al gust",
      "Oli d'oliva",
    ],
    passos: [
      "Cuina els espaguetis en aigua amb sal segons les indicacions del paquet.",
      "Mentre es cuinen els espaguetis, fregeix la panceta en una paella amb una mica d'oli d'oliva fins que estigui cruixent.",
      "En un bol, bateix els ous i barreja'ls amb els formatges ratllats, sal i pebre.",
      "Escorre els espaguetis i, mentre estiguin calents, barreja'ls amb la panceta i la barreja d'ous.",
      "Serveix immediatament amb més formatge per sobre.",
    ],
  },
  {
    id: 4,
    titol: "Macarrons a la Boloñesa",
    img: "/images/macarrones.webp",
    ingredients: [
      "200 g de macarrons",
      "300 g de carn picada de vedella",
      "1 ceba picada",
      "1 pastanaga picada",
      "2 grans d'all picats",
      "400 g de tomàquets triturats",
      "1 got de vi negre",
      "Oli d'oliva",
      "Sal i pebre",
      "Fulla de llorer",
      "Formatge parmesà ratllat",
    ],
    passos: [
      "Cuina els macarrons en aigua amb sal segons les indicacions del paquet.",
      "En una paella gran, sofregeix la ceba, la pastanaga i l'all en oli d'oliva fins que estiguin tous.",
      "Afegeix la carn picada i cuina fins que es torni daurada.",
      "Vessa el vi negre i deixa que s'evapori l'alcohol.",
      "Afegeix els tomàquets triturats, la fulla de llorer, sal i pebre. Cuina a foc lent durant 30 minuts.",
      "Serveix els macarrons amb la salsa boloñesa per sobre i espolvorea formatge parmesà.",
    ],
  },
  {
    id: 5,
    titol: "Gyozas de Pollastre",
    img: "/images/gyoza.jpg",
    ingredients: [
      "300 g de pit de pollastre picat",
      "1 ceba tendra picada",
      "2 grans d'all picats",
      "1 cullerada de gingebre fresc ratllat",
      "2 cullerades de salsa de soja",
      "1 cullerada d'oli de sèsam",
      "Pasta per a gyozas",
      "Oli per fregir",
    ],
    passos: [
      "En un bol, barreja el pollastre picat amb la ceba, l'all, el gingebre, la salsa de soja i l'oli de sèsam.",
      "Col·loca una petita quantitat de la mescla al centre de cada pasta de gyoza.",
      "Humiteja els costats de la pasta amb aigua i tanca formant una mitja lluna.",
      "Escalfa oli en una paella gran i fregeix les gyozas fins que estiguin daurades per sota.",
      "Afegeix una mica d'aigua a la paella, cobreix amb una tapa i deixa que es coguin al vapor durant 5 minuts.",
    ],
  },
  {
    id: 6,
    titol: "Mochi de Pasta de Fesols",
    img: "/images/mochi.jpg",
    ingredients: [
      "200 g de pasta de fesols vermells (anko)",
      "200 g de farina d'arròs glutinos",
      "100 ml d'aigua",
      "Sucre al gust",
      "Maicena per espolvorejar",
    ],
    passos: [
      "En una paella, cuina la pasta de fesols amb una mica de sucre fins a obtenir una pasta espessa.",
      "En un recipient, barreja la farina d'arròs glutinos amb l'aigua i cuina al vapor durant 20 minuts, remenant ocasionalment.",
      "Forma petites boles amb la pasta de fesols i col·loca-les al centre de cada bola de mochi.",
      "Tanca bé el mochi i espolvoreja amb maicena per evitar que s'enganxi.",
    ],
  },
  {
    id: 7,
    titol: "Ramen",
    img: "/images/ramen.jpg",
    ingredients: [
      "200 g de fideus de ramen",
      "1 litre de brou de pollastre",
      "1 cullerada de pasta de miso",
      "2 cullerades de salsa de soja",
      "2 ous cuits a baixa temperatura",
      "Cebollí picat",
      "Bok choy o espinacs",
      "Sèsam torrat",
      "Llesques de porc rostit (opcional)",
    ],
    passos: [
      "Cuina els fideus de ramen segons les indicacions del paquet.",
      "En una cassola, escalfa el brou de pollastre i afegeix la pasta de miso i la salsa de soja.",
      "Serveix els fideus en un bol gran i vessa el brou calent per sobre.",
      "Afegeix els ous cuits, cebollí, bok choy i sèsam per sobre.",
      "Si ho desitges, afegeix llesques de porc rostit per completar el plat.",
    ],
  },
]);

provide("llistaReceptes", receptes);
</script>

<template>
  <div class="app-layout">
    <nav class="navbar">
      <div class="brand">
        <img src="/images/logo.png" alt="FoodExplorer Logo" class="logo" />
        <h2 class="brand-text">FoodExplorer</h2>
      </div>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/receptes">Receptes</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="basic-footer">
        <!-- Copyright -->
        <div class="copyright">
          <p>&copy; 2025 FoodExplorer. Tots els drets reservats.</p>
        </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.copyright p {
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: #95a5a6;
}
.basic-footer {
  background-color: #2c3e50; /* Fondo oscuro elegante */
  color: white;
  padding: 20px 40px;
  margin-top: auto; /* Empuja el footer al final */
}
/* Navbar Moderna */
.navbar {
  display: flex; /* Flexbox es clave para alinear izq/der */
  justify-content: space-between; /* Separa Brand a la izq y Links a la der */
  align-items: center; /* Centra verticalmente */
  padding: 15px 40px; /* Espaciado generoso */
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03); /* Sombra muy sutil */
  position: sticky; /* Opcional: hace que el menú se quede fijo arriba */
  top: 0;
  z-index: 100;
}

/* Parte Izquierda: Marca */
.brand {
  display: flex;
  align-items: center;
  gap: 12px; /* Espacio entre logo y texto */
  text-decoration: none;
}

.logo {
  height: 45px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(-10deg);
}

.brand-text {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  /* COLOR VERDE SOLICITADO */
  color: #27ae60; /* Un verde esmeralda fresco y saludable */
  letter-spacing: -0.5px;
}

/* Parte Derecha: Enlaces */
.nav-links {
  display: flex;
  gap: 30px; /* Espacio entre enlaces */
}

.nav-links a {
  text-decoration: none;
  color: #7f8c8d; /* Gris suave por defecto */
  font-weight: 600;
  font-size: 1.05rem;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

/* Efecto Hover y Activo */
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #e67e22; /* Naranja de la marca al estar activo */
}

/* Línea animada debajo del link activo */
.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #e67e22;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}
</style>
