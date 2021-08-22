require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import router from './router.js';

import Vue from 'vue'

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import '../sass/index.css'


const app = new Vue({
    el: '#app',
    components: {
        App
    },

    router
    
});

