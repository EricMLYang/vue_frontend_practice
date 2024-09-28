<script setup>
import { computed, inject, ref } from "vue";
import "@/assets/css/tailwind.css";
const showMenu = inject("showMenu");

const isMobile = function () {
  const userAgentInfo = navigator.userAgent;
  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  console.log(userAgentInfo);

  for (let i = 0; i < mobileAgents.length; i++) {
    if (userAgentInfo.indexOf(mobileAgents[i]) !== -1) {
      console.log(mobileAgents[i]);
      return true;
    }
  }

  return false;
};

const menuWidth = computed(() => {
  if (isMobile()) {
    console.log(1)
    console.log(isMobile())
    if (showMenu.value) {

      return "hidden";
    } else {
      console.log(isMobile())
      return "w-24";
    }
  }
  else {

    if (showMenu.value) {

      return "w-56";
    } else {

      return "w-24";
    }
  }

});

const hasPermission = inject("HasPermission");
console.log(hasPermission.value)
const dashboard = inject("dashboard");

const sidebarlist = ref([
  {
    name: "會員管理",
    icon: "fa-solid fa-leaf",
    lilist: [
      { url: "RoleUserList", name: "人員列表1", key: "showMenu", icon: "fa-solid fa-leaf" },
      { url: "CreateRoleUser", name: "人員列表2", key: "showMenu", icon: "fa-solid fa-leaf" },
      { url: "AbnormalNotification", name: "人員列表3", key: "showMenu", icon: "fa-solid fa-leaf" }
    ]
  }
]);

// const data = [  
//   {  
//     name: "會員管理",  
//     icon: "fa-solid fa-leaf",  
//     url: "RoleUserList", name2: "人員列表1", key: "showMenu", icon: "fa-solid fa-leaf"   
//   },  
//   {  
//     name: "會員管理",  
//     icon: "fa-solid fa-leaf",  
//     url: "RoleUserList", name2: "人員列表2", key: "showMenu", icon: "fa-solid fa-leaf"   
//   },  
//   {  
//     name: "會員管理",  
//     icon: "fa-solid fa-leaf",  
//     url: "RoleUserList", name2: "人員列表3", key: "showMenu", icon: "fa-solid fa-leaf"   
//   }  
// ];  
  
// const sidebarlist2 = [];  
// const tempObj = {};  
  
// for (const item of data) {  
//   if (!tempObj[item.name]) {  
//       tempObj[item.name] = {  
//       name: item.name,  
//       icon: item.icon,  
//       lilist: []  
//     };  
//     console.log(tempObj)
//     sidebarlist2.push(tempObj[item.name]);  
//   }  
    
//   tempObj[item.name].lilist.push({  
//     url: item.url,  
//     name: item.name2,  
//     key: item.key,  
//     icon: item.icon  
//   });  
// }  
  
// console.log(sidebarlist2);  

</script>

<style scoped>

#Sidebar summaryspan {
  color: #ffffff !important;
}

#Sidebar p,
li {
  color: #ffffff
}


#Sidebar li a {
  color: #bfd3e1 !important;
}

#Sidebar {
  background-color: #005087 !important;
}

#Sidebar a.active {
  color: #ffe664 !important;

}

#Sidebar span:hover {
  color: #ffe664 !important;
}

details.open .menu-dropdown {  
  z-index: 90px;
}  
</style>
<template>

  <!-- sidebar Start -->

  <ul id="Sidebar" class="menu menu-md bg-base-200 " style="z-index:80" :class="menuWidth">
    <li v-if="hasPermission">
      <router-link to="/" exact-active-class="active">
        <font-awesome-icon icon="fa-solid fa-house" />
        <span v-if="showMenu">Home</span>
      </router-link>
    </li>
    <!-- details details open 展開與縮起來 -->
    <li v-if="hasPermission">
      <details>
        <summary>
          <font-awesome-icon icon="fa-solid fa-hippo" /><span v-if="showMenu">DaisyUI Demo</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/ColorDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">ColorDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ButtonDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">ButtonDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/InputDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">InputDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/SelectDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">SelectDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ModalDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">ModalDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/CardDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">CardDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/FormDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">FormDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/TableDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-tag" /><span v-if="showMenu">TableDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AccTable">
              <font-awesome-icon icon="fa-solid fa-table" /><span v-if="showMenu">AccTableDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/FakeApiDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-stroopwafel" /><span v-if="showMenu">FakeApiDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/TailwindDemo" exact-active-class="active">
              <font-awesome-icon icon="fa-solid fa-grip-lines" /><span v-if="showMenu">TailwindDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/OptionUserDemo">
              <font-awesome-icon icon="fa-solid fa-ghost" />
              <span v-if="showMenu">OptionUserDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/PlotlyDemo">
              <font-awesome-icon icon="fa-solid fa-chart-line" />
              <span v-if="showMenu">PlotlyDemo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/UserLogin">
              <font-awesome-icon icon="fa-solid fa-chart-line" />
              <span v-if="showMenu">UserLogin</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Error">
              <font-awesome-icon icon="fa-solid fa-chart-line" />
              <span v-if="showMenu">Error</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li>

    <li v-if="dashboard">
      <details>
        <summary>
          <img src="../assets/images/Icon-Energy.svg" /><span v-if="showMenu">智慧能源</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/EnergyMonitoring" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">智慧能源監控平台</span>
            </router-link>
          </li>
          <li>
            <router-link to="/EnergyConservation" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">節能管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/GreenElectricity" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" />
              <span v-if="showMenu">綠電管理-太陽能</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ChargingPile" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">充電樁管理</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li>

    <li v-if="dashboard">
      <details>
        <summary>
          <img src="../assets/images/Icon-Cloud.svg" /><span v-if="showMenu">智慧會議</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/MeetingReservation" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">XpacePlus</span>
            </router-link>
          </li>
          <li>
            <router-link to="/SmartParking" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">E&E IFPD</span>
            </router-link>
          </li>
          <li>
            <router-link to="/SmartLocker" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">LED Wall大型會議室</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li>

    <li v-if="dashboard">
      <details>
        <summary>
          <img src="../assets/images/Icon-Identification.svg" /><span v-if="showMenu">智慧安控</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/VisitorReservation" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">訪客預約管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AccessControl" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">門禁管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AccessControl" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">保全Copilot</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AccessControl" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'chart-line']" /> <span v-if="showMenu">異常事件通報</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li>

    <li v-if="dashboard">
      <details>
        <summary>
          <img src="../assets/images/Icon-Shield.svg" /><span v-if="showMenu">智慧空間</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/SecurityCopilot" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /> <span v-if="showMenu">智慧停車</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AbnormalNotification" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /> <span v-if="showMenu">充電樁管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AbnormalNotification" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /> <span v-if="showMenu">智慧取物櫃
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/AbnormalNotification" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /><span v-if="showMenu">智慧公播
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/AbnormalNotification" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /><span v-if="showMenu">智慧運動健康方案</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AbnormalNotification" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'angle-right']" /> <span v-if="showMenu">FindARTs友達藝廊</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li>
    <li v-if="dashboard">
      <details>
        <summary>
          <font-awesome-icon :icon="['fas', 'user-gear']" /><span v-if="showMenu">會員管理</span>
        </summary>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/TenantManagement" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span v-if="showMenu">租戶管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/AccountManagement" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span v-if="showMenu">帳號管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/FunctionManagement" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span v-if="showMenu">產品分類&功能管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/RoleManagement" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span v-if="showMenu">角色管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/PermissionManagement" exact-active-class="active">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span v-if="showMenu">權限管理</span>
            </router-link>
          </li>

        </ul>
      </details>
    </li>

  <!-- 動態路由範例包含標題 -->
    <!-- <li v-for="navItem in sidebarlist" :key="navItem.name">
      <details>
        <summary>
          <font-awesome-icon :icon="['fas', 'user-gear']" /><span v-if="showMenu"> {{ navItem.name }} </span>
        </summary>
        <ul class="menu-dropdown">
          <li v-for="li in navItem.lilist" :key="li.name">
            <router-link :to="li.url" exact-active-class="active">
              <font-awesome-icon :icon="li.icon" />
              <span v-if="showMenu"> {{ li.name }}</span>
            </router-link>
          </li>
        </ul>
      </details>
    </li> -->



 

  <!-- 動態路由範例只有li -->

  <!--
    
    <template v-for="navItem in sidebarlist" :key="navItem.name">
    
<li v-for="navItem in sidebarlist" :key="navItem.name">  
<router-link :to="navItem.url" exact-active-class="active">  
<font-awesome-icon :icon="navItem.icon" />  
<span v-if="showMenu"> {{ navItem.name }}</span>  
</router-link>  
</li>       

      
    </template> -->

  </ul>
</template>
