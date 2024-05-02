// Routing Module

import {createRouter, createWebHistory} from "vue-router";
import Home from "../componentsTests/home.component.vue";
import Argentina from "../componentsTests/argentina.component.vue";
import Ecuador from "../componentsTests/ecuador.component.vue";
import MealSelection from "../meal-selection/Components/meal-selection.vue";
import NotFound from "../componentsTests/notfound.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',           component: Home,       alias: '/home'},
        { path: '/home',       component: Home,       alias: '/home'},
        { path: '/mealselection',  component: MealSelection},
        { path: '/ecuador',    component: Ecuador},
    ]
});

export default router;