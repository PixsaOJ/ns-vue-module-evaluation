import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import { backend } from './backend/backend';
import { createPinia } from 'pinia';

globalThis.backend = backend;

const pinia = createPinia();
const app = createApp(Home);
app.use(pinia);
app.config.globalProperties.$backend = backend;
app.start();
