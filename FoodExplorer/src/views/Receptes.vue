<script setup>
import { ref } from "vue";

const receptes = ref([
  {
    id: 1,
    titol: "Butter Chicken (Pollastre a la Mantega)",
    img: "https://example.com/images/butter_chicken.jpg",
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
      "Coriandre fresc per decorar"
    ],
    passos: [
      "1. Desfés 100 g de mantega en una paella gran i sofregiu la ceba, l'all i el gingebre fins que estiguin daurats.",
      "2. Afegeix el pollastre i cuina'l fins que s'enrossi per tots els costats.",
      "3. Afegeix les espècies (garam masala, cúrcuma, comí i pebre vermell) i cuina durant 2 minuts.",
      "4. Vessa els tomàquets triturats i cuina a foc lent durant 10 minuts.",
      "5. Afegeix la nata líquida i els 100 g restants de mantega, cuina a foc baix fins que la salsa espesseixi.",
      "6. Serveix amb arròs basmati i coriandre fresc."
    ]
  },
  {
    id: 2,
    titol: "Pastís de Carn",
    img: "https://example.com/images/pastis_de_carn.jpg",
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
      "Oli per fregir"
    ],
    passos: [
      "1. En una paella, escalfa oli i sofregiu la ceba, l'all i la pastanaga fins que estiguin tous.",
      "2. En un bol gran, barreja la carn picada amb l'ou, el pa ratllat, la llet, la salsa de tomàquet, la mostassa, i els ingredients sofregits. Salpebra al gust.",
      "3. Forma una massa compacta i posa-la en un motlle per a forn.",
      "4. Cuina al forn preescalfat a 180°C durant 40-45 minuts.",
      "5. Serveix calent, acompanyat de puré de patates o amanida."
    ]
  },
  {
    id: 3,
    titol: "Spaghetti Carbonara",
    img: "https://example.com/images/spaghetti_carbonara.jpg",
    ingredients: [
      "200 g d'espaguetis",
      "100 g de panceta",
      "2 ous",
      "50 g de formatge parmesà ratllat",
      "50 g de formatge pecorino ratllat",
      "1 gra d'all",
      "Sal i pebre al gust",
      "Oli d'oliva"
    ],
    passos: [
      "1. Cuina els espaguetis en aigua amb sal segons les indicacions del paquet.",
      "2. Mentre es cuinen els espaguetis, fregeix la panceta en una paella amb una mica d'oli d'oliva fins que estigui cruixent.",
      "3. En un bol, bateix els ous i barreja'ls amb els formatges ratllats, sal i pebre.",
      "4. Escorre els espaguetis i, mentre estiguin calents, barreja'ls amb la panceta i la barreja d'ous.",
      "5. Serveix immediatament amb més formatge per sobre."
    ]
  },
  {
    id: 4,
    titol: "Macarrons a la Boloñesa",
    img: "https://example.com/images/macarrons_bolonesa.jpg",
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
      "Formatge parmesà ratllat"
    ],
    passos: [
      "1. Cuina els macarrons en aigua amb sal segons les indicacions del paquet.",
      "2. En una paella gran, sofregeix la ceba, la pastanaga i l'all en oli d'oliva fins que estiguin tous.",
      "3. Afegeix la carn picada i cuina fins que es torni daurada.",
      "4. Vessa el vi negre i deixa que s'evapori l'alcohol.",
      "5. Afegeix els tomàquets triturats, la fulla de llorer, sal i pebre. Cuina a foc lent durant 30 minuts.",
      "6. Serveix els macarrons amb la salsa boloñesa per sobre i espolvorea formatge parmesà."
    ]
  },
  {
    id: 5,
    titol: "Gyozas de Pollastre",
    img: "https://example.com/images/gyozas_pollastre.jpg",
    ingredients: [
      "300 g de pit de pollastre picat",
      "1 ceba tendra picada",
      "2 grans d'all picats",
      "1 cullerada de gingebre fresc ratllat",
      "2 cullerades de salsa de soja",
      "1 cullerada d'oli de sèsam",
      "Pasta per a gyozas",
      "Oli per fregir"
    ],
    passos: [
      "1. En un bol, barreja el pollastre picat amb la ceba, l'all, el gingebre, la salsa de soja i l'oli de sèsam.",
      "2. Col·loca una petita quantitat de la mescla al centre de cada pasta de gyoza.",
      "3. Humiteja els costats de la pasta amb aigua i tanca formant una mitja lluna.",
      "4. Escalfa oli en una paella gran i fregeix les gyozas fins que estiguin daurades per sota.",
      "5. Afegeix una mica d'aigua a la paella, cobreix amb una tapa i deixa que es coguin al vapor durant 5 minuts."
    ]
  },
  {
    id: 6,
    titol: "Mochi de Pasta de Fesols",
    img: "https://example.com/images/mochi_fesols.jpg",
    ingredients: [
      "200 g de pasta de fesols vermells (anko)",
      "200 g de farina d'arròs glutinos",
      "100 ml d'aigua",
      "Sucre al gust",
      "Maicena per espolvorejar"
    ],
    passos: [
      "1. En una paella, cuina la pasta de fesols amb una mica de sucre fins a obtenir una pasta espessa.",
      "2. En un recipient, barreja la farina d'arròs glutinos amb l'aigua i cuina al vapor durant 20 minuts, remenant ocasionalment.",
      "3. Forma petites boles amb la pasta de fesols i col·loca-les al centre de cada bola de mochi.",
      "4. Tanca bé el mochi i espolvoreja amb maicena per evitar que s'enganxi."
    ]
  },
  {
    id: 7,
    titol: "Ramen",
    img: "https://example.com/images/ramen.jpg",
    ingredients: [
      "200 g de fideus de ramen",
      "1 litre de brou de pollastre",
      "1 cullerada de pasta de miso",
      "2 cullerades de salsa de soja",
      "2 ous cuits a baixa temperatura",
      "Cebollí picat",
      "Bok choy o espinacs",
      "Sèsam torrat",
      "Llesques de porc rostit (opcional)"
    ],
    passos: [
      "1. Cuina els fideus de ramen segons les indicacions del paquet.",
      "2. En una cassola, escalfa el brou de pollastre i afegeix la pasta de miso i la salsa de soja.",
       "3. Serveix els fideus en un bol gran i vessa el brou calent per sobre.",
      "4. Afegeix els ous cuits, cebollí, bok choy i sèsam per sobre.",
      "5. Si ho desitges, afegeix llesques de porc rostit per completar el plat."
    ]
  }
]);

</script>

<template>
    <div class="llistat">
        <h1>Receptes</h1>
        <div v-for="recepta in receptes" :key="recepta.id" class="recepta">
            <h2>{{ recepta.titol }}</h2>
            <img :src="recepta.img" :alt="recepta.titol" class="recepta-img"/>
            <h3>Ingredients:</h3>
            <ul>
                <li v-for="ingredient in recepta.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <h3>Passos:</h3>
            <ol>
                <li v-for="pas in recepta.passos" :key="pas">{{ pas }}</li>
            </ol>
        </div>
    </div>
</template>