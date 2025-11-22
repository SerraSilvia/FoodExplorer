import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // importa tu router

createApp(App)
  .use(router)    // registra Vue Router
  .mount('#app'); // monta la app en div#app
