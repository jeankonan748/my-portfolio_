// src/router.js
import Vue from "vue";
import Router from "vue-router";

// Importation des vues
import Home from "./views/HomeView.vue";
import Projects from "./views/ProjectsView.vue";
import About from "./views/AboutView.vue";
import Contact from "./views/ContactView.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = new Router({
  routes, // court pour `routes: routes`
});

export default router;
