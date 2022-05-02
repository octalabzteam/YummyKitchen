import {createWebHistory, createRouter} from 'vue-router';
import HomeComponent from '../views/HomeComponent.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent, 
    },
    {
        path: '/h',
        name: 'HelloWorld',
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;