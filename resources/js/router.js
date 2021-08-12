import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },

    {
        path: "/",
        name: "/",
        component: Dashboard
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;