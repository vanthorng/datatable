import { createRouter, createWebHistory } from "vue-router";
    import DataTableContextMenuDemo from "./DataTableContextMenuDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: DataTableContextMenuDemo }]
});