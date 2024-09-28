import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import axios from "axios";
import VueAxios from "vue-axios";

import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
// import "@/assets/css/tailwindVueFormMultiselect.css";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
// import "@/assets/css/tailwind-el-loading.css";
// import "@/assets/css/tailwind-el-pagination.css";
// import "@/assets/css/tailwind-el-table.css";
// import "@/assets/css/tailwind-el-input.css";
// import "@/assets/css/tailwind-el-select.css";
import '@/assets/css/style.min.css'
import '@/assets/css/animate.css'

import '@/assets/vendor/slick/slick.css'
import '@/assets/vendor/slick/slick-theme.css'
import '@/assets/vendor/aos/aos.css'




import store from './store';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons"; // register all components expect icons

import i18n from './config/i18n' 

/* add icons to the library */
library.add(fas);

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Multiselect", Multiselect);

app.use(i18n);
app.use(store); //vuex
 
app.use(ElementPlus);
app.mount("#app"); 
