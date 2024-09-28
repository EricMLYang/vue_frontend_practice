<script setup>
import { provide, inject, reactive, onMounted, watch, ref } from "vue";

import { name, version } from "../../package";
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
const isLangsHidden = ref(true);
const menuToggleName = "ProjectMenuToggle";

const appTitle = ref(`${import.meta.env.VITE_APP_TITLE} (${version})`);
const showMenu = inject("showMenu"); 

const emit = defineEmits(["linkClick"]);
const state = reactive({
    themeName: `${name}_Theme`,
    currentTheme: "auotheme", // 預設套版
});

const changeLanguage = (lang) => {
    locale.value = lang;
    isLangsHidden.value = true;
}

function toggleMenu() {
    console.log(showMenu.value)
    showMenu.value = !showMenu.value;
    const element = document.getElementById("menu");
    console.log(element)
    console.log(showMenu.value)
    // if (showMenu.value) {
    //     element.classList.remove("hidden");
    //     element.classList.add("flex");
    // } else {
    //     element.classList.remove("flex");
    //     element.classList.add("hidden");
    // }
}

const themeOptions = [
{
    name:'繁體中文',
    languagefamily:'zh-TW'
},
{
    name:'English',
    languagefamily:'en-US'
}
  ]

  
</script>
<style scoped>

</style>
<template>
    <div>
  <!-- LINE facebook thumbnail -->
  <div class="cover">
        <img src="images/covert_thumbnail.jpg" alt="" />
    </div>
   
    <div class="wrapper">        
        <!-- sidebar Start -->
        <div class="sidebar">
            <!-- menu Start -->
            <nav>
                <ul>
                    <li>
                        <a href="#.htm"> <span>解決方案</span></a>
                        <ul class="submenu">
                            <li>
                                <a href="#">智慧會議</a>
                                <a href="#">智慧能源</a>
                                <a href="#">智慧安控</a>
                                <a href="#">智慧空間</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=" #.htm"> <span>空間管理</span></a>
                    </li>
                    <li>
                        <a href="#.htm"> <span>精選案例</span></a>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
        <!-- header Start-->
        <header class="header">
            <div class="container">
                <!-- h1 Logo -->
                <h1>
                    <a href="#">
                        <span style=" font-weight:bold">Smart Space Solution </span> </a>
                       
                </h1>
                
                <!-- menu Start -->
                <nav>
                    <ul>
                        <li>
                            <a href="#.htm"> <span>解決方案</span></a>
                            <ul class="submenu">
                                <li>
                                    <a href="#">智慧會議</a>
                                    <a href="#">智慧能源</a>
                                    <a href="#">智慧安控</a>
                                    <a href="#">智慧空間</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=" #.htm"> <span>空間管理</span></a>
                        </li>
                        <li>
                            <a href="#.htm"> <span>精選案例</span></a>
                        </li>
                    </ul>
                </nav>
                <!-- language Start -->
                <div class="language_button">
                    <a href="#">
                        <img src="../assets/images/icon_lang.svg" alt="">
                    </a>
                    <ul class="submenu">
                        <li>
                            <a href="#">English</a>
                            <a href="#">繁體中文</a>
                            <a href="#">簡体中文</a>
                            <a href="#">日本語</a>
                        </li>
                    </ul>
                </div>
                <!-- search Start -->
                <div class="search_button">
                    <a href="#">
                        <img src="../assets/images/icon_search.svg" alt="">
                    </a>
                </div>
                <!-- login Start -->
                <div class="login_button"> 
                    <a>
                        <router-link to="/UserLogin"> <img src="../assets/images/icon_login.svg" alt=""></router-link>                       
                    </a>
                </div>
                <!-- mobile_menu Start 手機測選單-->
                <div class="mobile_button">
                    <a href="#" class="btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        </header>
    </div>
    <!-- <div class="bg-gray-200 md:fixed z-50 ">
        <header
            class="bg-white flex flex-wrap flex-row items-center justify-between  w-full shadow-lg z-10 sm:fixed text-white full-heigh px-10 py-3">
           <a  href="#" >
            <div class=" text-2xl flex-grow flex items-center justify-start">
               
                <span  class="font-bold text-auoBlue">Smart Space Solution</span>
            </div>

        </a>
            <div>
                <button type="button" @click="toggleMenu"
                    class="block flex-grow text-gray-900 lg:hidden hover:text-gray-800 focus:text-gray-900 focus:outline-none">
                    <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
            <div class="break lg:hidden"></div>
            <div id="menu"
                class=" hidden lg:flex flex-grow flex-col items-center py-3 lg:py-0 lg:flex-row lg:justify-between text-lg ">

                <div class="w-full flex flex-col items-center lg:flex-row lg:justify-end">
                    <a class="mx-1 mr-5 font-bold min-w-full lg:min-w-0 text-center text-auoBlue px-2 py-1  rounded-lg my-2 text-xl hover:bg-gray-300"
                        href="#">Solutions</a>
                    <a class="mx-1 mr-5 font-bold min-w-full lg:min-w-0 text-center text-auoBlue px-2 py-1 rounded-lg my-2 text-xl hover:bg-gray-300"
                        href="#">Forum </a>
                    <a class="mx-1 mr-5 font-bold min-w-full lg:min-w-0 text-center text-auoBlue px-2 py-1  rounded-lg my-2 text-xl hover:bg-gray-300"
                        href="#">Services</a>
                    <a class="mx-1 mr-5 font-bold min-w-full lg:min-w-0 text-center text-auoBlue px-2 py-1  rounded-lg my-2 text-xl hover:bg-gray-300"
                        href="#">Support</a>

                    <a class="mr-5"><button><img src="/auo-search.svg" id="auosearchhover"></button></a>
                    <a class="mr-5"><button><img src="/auo-app.svg" id="auoapphover"></button></a>
                    <div title="Change Theme" class="dropdown dropdown-end">
             
          
            <a class="mr-5"  tabindex="0"> <button><img src="/auo-language.svg" id="auolanguagehover"
                ></button></a>
        
          <div
            class="dropdown-content bg-base-100 text-base-content rounded-box top-px h-[20vh] max-h-56 w-28 overflow-y-auto shadow mt-16"
          >
            <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
                <template v-for="index in themeOptions" :key="index">
                <button
                  class="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
                  :data-set-theme="index.name"
                  data-act-class="[&amp;_svg]:visible"
                  @click="
                    () => {
                        changeLanguage(index.name);
                    }
                  "
                >
                  <div
                    :data-theme="index.name"
                    class="bg-base-100 text-base-content w-full cursor-pointer font-sans hover:bg-gray-300"
                  >
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div
                        class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                      >                         
                        <div class="flex-grow text-sm">{{ index.name }}</div>                        
                      </div>
                    </div>
                  </div>
                </button>
              </template>
            </div>
          </div>
        </div>
                   
                    <router-link to="/UserLogin"><a class="mr-5" href="UserLogin"> <button><img src="/auo-user.svg"
                                    id="auouserhover"></button></a></router-link>

                

                </div>
            </div> 


        </header>
    </div>   
    -->
</template>
