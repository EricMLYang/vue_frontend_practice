<script setup>
import { provide, inject, reactive, onMounted, watch, ref } from "vue";
import { doCAPLogout } from "@/auth/auoCapAuth";
import { name, version } from "../../package";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const menuToggleName = "ProjectMenuToggle";
const themeOptions = [
  "auotheme",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
const appTitle = ref(`${import.meta.env.VITE_APP_TITLE} (${version})`);
const capUser = inject("CapUser", { RealName: "", Email: "", PhotoUrl: "" });
const showMenu = inject("showMenu");

const state = reactive({
  themeName: `${name}_Theme`,
  currentTheme: "auotheme", // 預設套版
});

const dologout = () => {
  //doCAPLogout();

  localStorage.removeItem("permissions");
  store.commit('User/clearUser');
  router.push('/UserLogin');
};

const handleSwitchTheme = () => {
  if (state.currentTheme === "dark") {
    handleChangeTheme2("light");
  } else {
    handleChangeTheme2("dark");
  }
};

const handleChangeTheme2 = (theme) => {
  state.currentTheme = theme;
  setCurrentHtmlTheme(state.currentTheme);
};

const setCurrentHtmlTheme = (theme) => {
  document.getElementsByTagName("html")[0].dataset.theme = theme;
  localStorage.setItem(state.themeName, theme);
};

onMounted(async () => {
  const theme = localStorage.getItem(state.themeName);
  if (theme !== null) {
    state.currentTheme = theme;
  }
  setCurrentHtmlTheme(state.currentTheme);

  const btnMenuToggle = document.querySelector("#menu-toggle");
  btnMenuToggle.addEventListener("click", function () {
    let menuToggle = localStorage.getItem(menuToggleName);
    if (menuToggle === null) {
      menuToggle = showMenu.value ? "Y" : "N";
    } else {
      if (menuToggle === "Y") {
        menuToggle = "N";
      } else {
        menuToggle = "Y";
      }
    }
    if (showMenu.value) {
      showMenu.value = false;
    } else {
      showMenu.value = true;
    }

    localStorage.setItem(menuToggleName, menuToggle);
  });
});

</script>
<style scoped></style>
<template>
  <div>
    <!-- LINE facebook thumbnail -->
    <div class="cover">
      <img src="images/covert_thumbnail.jpg" alt="" />
    </div>

    <div class="wrapper dashboard_wrapper" style="padding-top: 80px;">
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
    <header class="header" style="height: 80px;">
      <div class="container" style="height: 80px;">
        <!-- h1 Logo -->
        <h1>
          <a href="#">
            <span style=" font-weight:bold">Smart Space Solution </span> </a>
          <a>
            <button @click="toggleMenu" class="btn btn-square btn-ghost" id="menu-toggle"><svg
                class="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path class="" fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z">
                </path>
              </svg></button> </a>
        </h1>

        <!-- menu Start -->
        <nav>
          <ul>  
            <li>
              <a href="#.htm"> <span>下載中心</span></a>
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
       
        <!-- mobile_menu Start -->
        
    
        <div class="search_button">
          <a href="#" @click="dologout">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          </a>
        </div>
        <!-- 手機測選單 -->
        <!-- <div class="mobile_button">
                  <a href="/" class="btn">
                      <span></span>
                      <span></span>
                      <span></span>
                  </a>
              </div> -->
      </div>
    </header>
  </div>
  <!-- <div id="header" class="bg-base-100 w-full shadow-lg z-10 sm:fixed">
    <div class="flex items-center justify-between p-4">
      <div id="banner" class="">
        <a href="#" class="flex items-center">
          <img src="../assets/images/logo.svg" alt="網站 Logo" class="h-10" />
          <span
            class="self-center text-base font-bold whitespace-nowrap ml-6 pl-6 border-l-2"
            >Smart Space Solution
</span
          >
        </a>
      </div>
      <div class="flex-1">
        <button class="btn btn-square btn-ghost" id="menu-toggle">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
      <div id="nav" class="flex items-center space-x-1 font-semibold">
        <span class="w-6"
          ><font-awesome-icon icon="fa-solid fa-user-tie"
        /></span>
        {{ capUser.RealName }}
        <div
          class="btn btn-ghost"
          @click.prevent="
            () => {
              handleSwitchTheme();
            }
          "
        >
          <label class="swap swap-rotate">
           
            <font-awesome-icon
              v-if="state.currentTheme === 'dark'"
              icon="fa-solid fa-sun"
            />
            <font-awesome-icon v-else icon="fa-solid fa-moon" />
          </label>
        </div>
        <div title="Change Theme" class="dropdown dropdown-end">
          <div tabindex="0" class="btn normal-case btn-ghost">
            <font-awesome-icon icon="fa-solid fa-palette" />
            <span class="hidden font-normal md:inline">主題</span> 
            <font-awesome-icon icon="fa-solid fa-angle-down"
              class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" /> 
          </div>
          <div
            class="dropdown-content bg-base-100 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto shadow mt-16"
          >
            <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
              <template v-for="name in themeOptions" :key="name">
                <button
                  class="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
                  :data-set-theme="name"
                  data-act-class="[&amp;_svg]:visible"
                  @click="
                    () => {
                      handleChangeTheme2(name);
                    }
                  "
                >
                  <div
                    :data-theme="name"
                    class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                  >
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div
                        class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                      > 
                        <font-awesome-icon icon="fa-solid fa-check" v-if="name === state.currentTheme" />
                        <i class="invisible h-3 w-3 shrink-0" v-else ></i>
                        <div class="flex-grow text-sm">{{ name }}</div>
                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                          <div class="bg-primary w-2 rounded"></div>
                          <div class="bg-secondary w-2 rounded"></div>
                          <div class="bg-accent w-2 rounded"></div>
                          <div class="bg-neutral w-2 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </template>
</div>
</div>
</div>
<button class="btn btn-ghost" @click="dologout">
  <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
  <span title="登出"> 登出 </span>
</button>
</div>
</div>
</div> -->
</template>
