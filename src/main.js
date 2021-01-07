import { createApp } from 'vue'
import App from './App.vue'
import PhotoCard from "./components/UI/PhotoCard.vue";


// Created an App const
const app = createApp(App)

//Import Picture component globally
app.component('photo-card', PhotoCard)

//Mount App
app.mount('#app')
