# Vue 3 + Vite + TailwindCss + DaisyUI

- test url: http://auohqcmmtt01.corpnet.auo.com/VueCapDemo
- 本專案用於展示 Cap 認證
- 本專案使用 javascript 抓取 cap User, 檔案: auth/auoCapAuth.js
- Cap User Data 的取得方式是：使用 ref、reactive 來儲存資料。而不同.vue 之間，則運用 Provide / Inject 來 set/get 共用的 User 資料
- Provide / Inject 範例參考 url: https://github.com/vuejs/docs/issues/391 、 https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/vue3-%E7%9A%84%E8%B3%87%E6%96%99%E7%8B%80%E6%85%8B%E7%AE%A1%E7%90%86%EF%BC%8Cprovide-inject%E3%80%81vuex/
- ref、reactive 說明:https://hackmd.io/@SkT7-27LSWWQi5G2DJBLkw/BkN_IadJF/https%3A%2F%2Fhackmd.io%2FcnqTGbM0QVieOaEVzEHp1g%3Fview

# 啟動服務

```cmd
$npm install
$npm run dev
```

# 新增環境參數 .env 檔案

- .env
- .env.prod

# 修改 vite.config.js 檔案

- 加入參數 '@':  
  //for import 時，取得相對路徑，ex:  
  import Home from '@/components/Home.vue';

  resolve: {  
   alias: {  
   "@": path.resolve(\_\_dirname, "./src"),  
   },  
   },

- 加入 build 參數:
  -- for 打包後的檔案路徑，指令: npm run build
  build: {  
   outDir: "./dict",  
   emptyOutDir: true,  
   sourcemap: true,  
   },

# package.json 修改 scripts 參數

- 加入讀取正式區.env.prod 參數:  
   "scripts": {  
   "dev": "vite",  
   "dev.prod": "vite --mode prod",  
   "build": "vite build --base=/VueCapDemo/",  
   "build.prod": "vite build --mode prod --base=/VueCapDemo/",  
   "preview": "vite preview"  
   },

# 安裝套件

- npm i vue-router
- npm i axios
- npm i vue-axios
- npm i eslint

# src 下新增 router/index.js 新增檔案

- 設定路由
- createRouter History，可使用 createWebHistory 或 createWebHashHistory 方式，由於本專案需要掛載如 iis，需要一個 web Name，故使用:createWebHashHistory,設定相對路徑 router

  import { createRouter, createWebHashHistory } from 'vue-router';  
  import Home from '@/components/Home.vue';

  const routes = [
  {
  path: '/',
  name: 'home',
  component: Home,
  }
  ];

  const router = createRouter({  
   history: createWebHashHistory(),  
   routes,  
  });

  export default router;

# src 下新增 auth/auoCapAuth.js 檔案

    - 用於 Cap 認證
    - public function，最前端需要加入 export 變數
    - 使用 axios，取得cap user data

# 專案入口頁面為 index.html

    - 載入 main.js 檔案
    <script type="module" src="/src/main.js"></script>

# src 修改 main.js 檔案

    - 載入 App.vue 檔案
    import { createApp } from 'vue'
    import './style.css'
    import App from './App.vue'
    import router from "@/router/index";
    import axios from 'axios'
    import VueAxios from "vue-axios"

    const app = createApp(App)
    app.use(VueAxios, axios);
    app.use(router);

    app.mount("#app");

# src 修改 App.vue 檔案

    - 載入 views/Layout.vue 檔案
    <script setup>
    import Layout from "@/views/Layout.vue";
    </script>

    <template>
      <Layout></Layout>
    </template>

# src 下新增 views/Layout.vue 檔案

    - 加入路由頁面: <router-view></router-view>，預設載入 components/Home.vue
    - 使用 非同步取得 Cap User Data
    	import { getCAPToken, getCAPUserInfo } from '@/auth/auoCapAuth';
    	const user = await getCAPUserInfo();

    - Cap User Data的取得方式是：使用 ref、reactive 來儲存資料。
    - 而不同.vue之間，則運用 Provide / Inject 來set/get共用的User資料

    	- ref sample:
    	const gCAPToken = ref('');
    	gCAPToken.value = await getCAPToken();

    	- ref + Provide sample:
    	// 使用 ref 儲存 共享的string 資料如:工號，ref()可以存入任何型別的資料
    	const gEmployeeId = ref('');
    	provide("CapEmployeeId", gEmployeeId);
    	...
    	const getUser = async ()=> {

const user = await getCAPUserInfo();  
 gEmployeeId.value = user.EmployeeId;  
 }

    	- ref、reactive + Provide sample:
    	// 使用 reactive 儲存 User 資料，reactive()內只能放入物件或陣列，如果放入這兩個以外的資料形式(如:工號)則會報錯。
    	const state = reactive({

gUser: {},  
 });

    	provide("CapUser", computed(() => state.gUser));

    	const getUser = async ()=> {

const user = await getCAPUserInfo();  
 state.gUser = user;  
 }

# src 下新增 components/Home.vue 檔案

    - 提供登出按鈕
    import { doCAPLogout } from '@/auth/auoCapAuth';

    - 使用 Inject 取得父層的 User Data
    	- ref + Inject sample:
    	const capEmployeeId = inject("CapEmployeeId");
    	const userEmployeeId = ref(capEmployeeId.value);

    	//watch的作用是用來監測資料有沒有變化，有變化則做出動作，使用watch不能改變所監測的資料
    	watch(capEmployeeId, () => {
    		userEmployeeId.value = capEmployeeId.value;
    	});

    	- reactive + Inject sample:
    	const capUser = inject("CapUser");
    	const states = reactive({
    		UserData: computed(()=> capUser?.value),
    		RealName: computed(()=> capUser?.value.RealName),
    		Email: computed(()=> capUser?.value.Email),
    	});

# Vue.js - 使用 ESLint + Prettier 整理程式碼

- 主要用於程式碼格式化排版
- 若舊有的專案需要添加 ESLint 與 Prettier 則須先安裝以下套件  
  $ npm install eslint babel-eslint eslint-plugin-vue --save-dev  
  $ npm install prettier @vue/eslint-config-prettier eslint-plugin-prettier --save-dev

- 新增 .eslintrc.js  
  // .eslintrc.js  
  module.exports = {  
   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],  
   parserOptions: {  
   parser: "babel-eslint"  
   }  
  };
- VSCode 自動排版  
  // settings.json  
  {  
  "files.autoSave": "onWindowChange", // 切換視窗自動存檔  
  "editor.formatOnSave": true, // 存檔時自動 format  
  "vetur.validation.template": false, // 關閉 vetur 驗證  
  "editor.defaultFormatter": "esbenp.prettier-vscode" // 預設 format 使用 prettier  
  }
- 其餘指令請參考網址:  
  https://ithelp.ithome.com.tw/articles/10231505

# 安裝 Icons 套件: fontawesome

- https://fontawesome.com/
- doc url : https://fontawesome.com/docs/web/use-with/vue/add-icons
- 1. Add SVG Core  
     $ npm i --save @fortawesome/fontawesome-svg-core
- 2. Add Icon Packages: Free Icon Packages  
     $ npm i --save @fortawesome/free-solid-svg-icons
- 3. Add the Vue Component  
     $ npm i --save @fortawesome/vue-fontawesome@latest-3
- 4. Set up the library,ex:  
     //單獨載入一個 icon 範例  
     import { library } from '@fortawesome/fontawesome-svg-core'  
     import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";  
     import { faUserSecret } from '@fortawesome/free-solid-svg-icons'  
     library.add(faUserSecret);  
     app.component("font-awesome-icon", FontAwesomeIcon);

     //目前程式採取載入 free-solid-svg-icons 中所有的 icon  
     import { library } from "@fortawesome/fontawesome-svg-core";  
     import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";  
     import { fas } from "@fortawesome/free-solid-svg-icons"; // register all components expect icons  
     library.add(fas);  
     app.component("font-awesome-icon", FontAwesomeIcon);

- 5. adds the fa-user-secret icon into the app UI  
     <font-awesome-icon icon="fa-solid fa-user-secret" />

# Tailwind

- https://tailwindcss.com/docs/installation
- https://juejin.cn/post/7121355067357298696
- 1. Install Tailwind CSS  
     $ npm install -D tailwindcss postcss autoprefixer
- 2. Add Tailwind to your PostCSS configuration : postcss.config.cjs  
     module.exports = {  
     plugins: [require("tailwindcss"), require("autoprefixer")],
     }
- 2. Create your Tailwind config file : tailwind.config.js  
     $ npx tailwindcss init  
     module.exports = {  
     content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],  
     theme: {  
     extend: {},  
     },  
     plugins: [],  
     };

- 3. Add the Tailwind directives to your CSS: src/assets/css/tailwind.css  
     @tailwind base;  
     @tailwind components;  
     @tailwind utilities;

- 4. 在 src/main.js 中引入这个 css  
     import "@/assets/css/tailwind.css";

# 安裝 Tailwind CSS IntelliSense 擴充套件，在輸入 class 時，應該會跳出對應的 CSS 語法，可以透過這方法查詢有哪些可用的 class

- doc: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

# Install daisyUI as a Tailwind CSS plugin

- https://daisyui.com/docs/install/
- daisyUI 是基于 Tailwind CSS 构建的 CSS 组件库
- 1. Install daisyUI:  
     $ npm i -D daisyui
- 2. Then add daisyUI to your tailwind.config.js files:
     修改一下 tailwind.config 配置文件，修改成下面这样的  
     plugins: [require("daisyui")],
- 3. tailwind.config.js 加入主題:
     daisyui: {  
     themes: ["light", "dark", "cupcake"],  
     },
- 4. 切換主題: index.html
     在 HTML 标签里添加 data-theme 属性, ex:  
      < html lang="en" data-theme="black">  
      < html lang="en" data-theme="light">

# Vue 3 Multiselect

- npm install @vueform/multiselect
- doc: https://www.npmjs.com/package/@vueform/multiselect
- demo: https://jsfiddle.net/xajub20o/

# element-plus

- 載入 element-plus 套件，因為 el-table 套件比較好用
- npm install element-plus --save
- element plus 套件，無法直接使用 DaisyUI 主題，因此需要另外新增對應的 tailwind CSS 檔案。
  方法:  
   1.將 \node_modules\element-plus\theme-chalk 中的 el-xxx.css 檔案複製到 src\assets\css 資料夾下，再另存檔名為: tailwind-el-xxx.css

  2.main.js 直中載入 tailwind-el-xxx.css 檔案，註: 該檔案需要放到 @/assets/css/tailwind.css 後面才會生效  
   import "@/assets/css/tailwind.css";  
   ...  
   import "@/assets/css/tailwind-el-table.css";

  ***

  3.tailwind-el-xxx.css 檔案中改用 tailwind 方法:  
   /_ background-color: var(--el-fill-color-light); _/  
   @apply bg-base-200;

# 需要打包上版的話，要更改版號

- package.json
- 格式: "version": "年.月.日",
- ex: "version": "22.09.22",

# 加入PermissionError頁面，當權限不足時，導到此頁面，不允許瀏覽
-1.	.env中有簡易設定可瀏覽網站的工號  
     VITE_APP_PERMISSION_USERS=1806011,1501038,1107308,2106004,2108001,1012077,2207270,2108248  
  
-2.	當無權限登入者，會導到 PermissionError 頁面  
     Layout.vue  
     const permissionUsers = import.meta.env.VITE_APP_PERMISSION_USERS.toString().split(",");  
       
     const gHasPermission = ref(false);  
     provide("HasPermission", readonly(gHasPermission));  
       
     const vRouter = useRouter();  
     const checkAuth = () => {  
     gHasPermission.value = permissionUsers.includes(gEmpNo.value);  
     if (gHasPermission.value) {  
     vRouter.push({ name: "home" });  
     } else {  
     vRouter.push({ name: "PermissionError" });  
     }  
     };  
  
-3.	個別頁面需要加入BasePage.vue，不允許輸入個別vue頁面的網址進入  
     import basePage from "@/components/common/BasePage.vue";  
     < basePage />  

