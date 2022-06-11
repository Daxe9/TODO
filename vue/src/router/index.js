import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/todo/:id",
        name: "Todo",
        component: () => import("../views/Todo.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        beforeEnter: (to, from, next) => {
            next("/");
        },
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
