import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueEditor } from 'vue2-editor';


import './index.css';

createApp(App)
    .use(router)
    .use(VueEditor)
    .use(store)
    .mount('#app')
