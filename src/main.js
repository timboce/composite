// Import Vue
import { createApp } from 'vue'

// Import the main App component
import App from './App.vue'

// Import Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Import the components for the pages
import ToDo from './components/ToDo.vue'
import Kepgaleria from './components/Kepgaleria.vue'
import Image from './components/Image.vue'

// Define the routes for the pages
const routes = [
    { path: '/', component: ToDo }, // Default route for the ToDo page
    { path: '/kepgaleria', component: Kepgaleria }, // Route for the Kepgaleria page
    { path: '/kepgaleria/:id', component: Image } // Route for the Image page with a dynamic parameter for the image id
]

// Create the router instance
const router = createRouter({ history: createWebHistory(), routes })

// Create the app instance and mount it to the #app element
createApp(App).use(router).mount('#app')
