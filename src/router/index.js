import {createWebHistory, createRouter} from 'vue-router';
import HomeComponent from '../views/HomeComponent.vue'
import HelloWorld from '../components/HelloWorld.vue'
import PageNotFound from '../components/PageNotFound.vue'
import DishView from '../views/DishView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminView from '../views/AdminView.vue'
import CreatePost from '../views/CreatePost.vue'


const routes = [
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
        meta: {
            title: 'PageNot Found'
        } 
    },
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        meta: {
            title: 'Home'
        } 
    },
    {
        path: '/items',
        name: 'DishView',
        component: DishView,
        meta: {
            title: 'Menu'
        } 
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView,
        meta: {
            title: 'Login'
        } 
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView,
        meta: {
            title: 'Register'
        } 
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            title: 'Forgot Password'
        } 
    },
    {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView,
        meta: {
            title: 'Profile'
        } 
    },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminView,
        meta: {
            title: 'Admin'
        } 
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: CreatePost,
        meta: {
            title: 'Admin'
        } 
    },
    {
        path: '/h',
        name: 'HelloWorld',
        component: HelloWorld
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    document.title = `${to.meta.title} | YummyKitchen`;
    next();
});

export default router;