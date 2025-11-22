import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/receptes",
    name: "Receptes",
    component: () => import("@/views/Receptes.vue")
  },
  {
    path: "/recepta/:id",
    name: "Recepta",
    component: () => import("@/views/Recepta.vue"),
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
