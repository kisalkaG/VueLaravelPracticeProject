import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";
import InputBindings from "./components/InputBindings";
import CheckBox from "./components/CheckBox";
import ClassAndStyleBinding from "./components/ClassAndStyleBinding";
import TerneryOperation from "./components/TerneryOperation";
import InlineEdit from "./components/InlineEdit";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },

    {
        path: "/",
        name: "logInOrDashboard",
        component: Dashboard
    },

    {
        path: "/input-bindings",
        name: "InputBindings",
        component: InputBindings
    },

    {
        path: "/checkbox",
        name: "CheckBox",
        component: CheckBox
    },

    {
        path: "/class-and-style-binding",
        name: "ClassAndStyleBinding",
        component: ClassAndStyleBinding
    },

    {
        path: "/ternery-operation",
        name: "TerneryOperation",
        component: TerneryOperation
    },

    {
        path: "/inline-edit",
        name: "InlineEdit",
        component: InlineEdit
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;  