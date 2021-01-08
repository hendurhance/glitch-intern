import { createApp } from 'vue'
import App from './App.vue'
import PhotoCard from "./components/UI/PhotoCard.vue"
import TheHeader from "./components/layout/TheHeader.vue"
import TheNavigation from "./components/layout/TheNavigation.vue"
import BaseButton from "./components/UI/BaseButton.vue"
import SideNavigation from './components/layout/SideNavigation.vue'



// Created an App const
const app = createApp(App)

//Import Picture component globally
app.component('photo-card', PhotoCard)

//Import TheHeader component globally
app.component('the-header', TheHeader)

//Import TheNavigation component globally
app.component('the-navigation', TheNavigation)

//Import TheNavigation component globally
app.component('base-button', BaseButton)

//Import TheNavigation component globally
app.component('side-nav', SideNavigation)

//Mount App
app.mount('#app')
