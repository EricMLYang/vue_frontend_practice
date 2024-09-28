<script setup>
import { provide, reactive, ref, readonly, onBeforeMount,computed,watch   } from "vue";
import { useRouter } from "vue-router";
import { apiCAPUserInfo, doCAPLogout } from "@/auth/auoCapAuth";
import AppContent from "@/views/Content.vue";
import AppFooter from "@/views/Footer.vue";
import AppHeader from "@/views/Header.vue";
import AppHeaderPortal from "@/views/HeaderPortal.vue";
import AppFooterPortal from "@/views/FooterPortal.vue";
import { useStore } from 'vuex';  

const store = useStore();  
//使用 ref 儲存 共享的string 資料如:工號，ref()可以存入任何型別的資料
const gEmpNo = ref("");
const gUser = ref({
  RealName: "CAP正在確認您的身分...",
  Email: "",
});
const isLogin = computed(() => store.getters['User/getUserData'].isLogin);  
const showportal = ref(isLogin); 
//const showportal = ref(false); 

const menuToggleName = "ProjectMenuToggle";
let menuToggle = localStorage.getItem(menuToggleName);

provide("CapEmployeeId", readonly(gEmpNo)); // provide 適用 ref 進行設定
provide("CapUser", readonly(gUser));
provide("showMenu", ref(menuToggle === "Y" ? false : true));
provide("showportal", ref(showportal));


//使用 reactive 儲存 User 資料，reactive()內只能放入物件或陣列，如果放入這兩個以外的資料形式(如:工號)則會報錯。
const state = reactive({
  hasLoggedIn: false,
  isLocal: window.location.origin.indexOf("localhost") !== -1,
  capUser: gUser,
});

const setCAPUserAndDI = async () => {
  // 建議作法: npm run dev -- --port 5566 (透過本機服務即可讓CAP對應服務正常運作)
  //     e.g. node服務啟動後可由此網址進入 => http://rexcrwu.corpnet.auo.com:5566/   < CAP服務需匹配網域名( corpnet.auo.com ) 與網站Cookie有關
  let user = {};
  console.log(state.isLocal);

  if (true) {
    user = {
      RealName: "楊士永",
      EmployeeId: "1806011",
      DepartmentId: "ADTED1",
      Email: "Eric.ML.Yang@auo.com",
    };
    
  } else {
    user = await apiCAPUserInfo();
  }
  state.hasLoggedIn = Object.keys(user).length > 0;
  if (state.hasLoggedIn) {
    user.PhotoUrl = `http://auohqitmap01.corpnet.auo.com/AUOPhoneBookPhoto/photo/${user.EmployeeId}.jpg`;
  } else {
    // 登入失敗：導到 CAP 登入頁面
    doCAPLogout();
    return;
  }

  console.log("login-info", state.hasLoggedIn, user);
  gUser.value = user;
  gEmpNo.value = user.EmployeeId;

  checkAuth();


  if (localStorage.hasOwnProperty("permissions")) {  
    
  var userInfo = localStorage.getItem("permissions");  
  
  console.log(JSON.parse(userInfo));  
  store.commit('User/setUser', JSON.parse(userInfo));  
  //console.log(store.getters["User/getUserData"]); 
} else {  
 
}  
};

const permissionUsers =
  import.meta.env.VITE_APP_PERMISSION_USERS.toString().split(",");

const gHasPermission = ref(true);
provide("HasPermission", readonly(gHasPermission));

const gdashboard = ref(false);
provide("dashboard", readonly(gdashboard));

const vRouter = useRouter();
const checkAuth = () => {
  //gHasPermission.value = permissionUsers.includes(gEmpNo.value);
  //gdashboard.value = permissionUsers.includes(gEmpNo.value);
  //gHasPermission.value = store.getters["User/getUserData"].isLogin;  
  gdashboard.value =true;
  vRouter.push({ name: "home" });
  // if (gHasPermission.value) {
  //   vRouter.push({ name: "home" });
  // } else {
  //   vRouter.push({ name: "PermissionError" });
   
  // }
};


console.log(isLogin)
watch(isLogin, (newValue) => {  
      // 當isLogin的狀態改變時，這裡的代碼將會被執行  
      console.log(isLogin)
      console.log(store.getters["User/getUserData"].isLogin)
        console.log('User has logged in/out ');  
        setCAPUserAndDI
    });  
onBeforeMount(async () => {
await setCAPUserAndDI();

});
</script>

<template>
  <div v-if="!showportal">
    <AppHeaderPortal></AppHeaderPortal>    
    <div class="flex flex-col  h-screen">
      <AppContent class="flex-grow" />
      <AppFooterPortal /> 
    </div>
  </div>
  <div v-else>
    <AppHeader></AppHeader>     
    <div class="flex flex-col  h-screen">
      <AppContent class="flex-grow " />
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
  height: 70px;
  margin-right: 10px;
}
</style>
