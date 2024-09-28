import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/components/Home.vue";
import ButtonDemo from "@/components/demo/ButtonDemo.vue";
import ColorDemo from "@/components/demo/ColorDemo.vue";
import InputDemo from "@/components/demo/InputDemo.vue";
import SelectDemo from "@/components/demo/SelectDemo.vue";
import ModalDemo from "@/components/demo/ModalDemo.vue";
import CardDemo from "@/components/demo/CardDemo.vue";
import FormDemo from "@/components/demo/FormDemo.vue";
import OptionUserDemo from "@/components/demo/OptionUserDemo.vue";
import TableDemo from "@/components/demo/TableDemo.vue";
import UserLogin from "@/components/UserLogin.vue";

import AccessControl from "@/components/personnelManagement/AccessControl.vue";
import VisitorReservation from "@/components/personnelManagement/VisitorReservation.vue";

import ChargingPile from "@/components/smartEnergy/ChargingPile.vue";
import EnergyConservation from "@/components/smartEnergy/EnergyConservation.vue";
import EnergyMonitoring from "@/components/smartEnergy/EnergyMonitoring.vue";
import GreenElectricity from "@/components/smartEnergy/GreenElectricity.vue";

import AbnormalNotification from "@/components/smartSecurity/AbnormalNotification.vue";
import SecurityCopilot from "@/components/smartSecurity/SecurityCopilot.vue";

import MeetingReservation from "@/components/spaceManagement/MeetingReservation.vue";
import SmartBroadcasting from "@/components/spaceManagement/SmartBroadcasting.vue";
import SmartLocker from "@/components/spaceManagement/SmartLocker.vue";
import SmartParking from "@/components/spaceManagement/SmartParking.vue";
import SmartSports from "@/components/spaceManagement/SmartSports.vue";

import PermissionManagement from "@/components/permissions/PermissionManagement.vue";
import RoleManagement from "@/components/permissions/RoleManagement.vue";

import FunctionManagement from "@/components/permissions/FunctionManagement.vue";
import CategoryManagement from "@/components/permissions/CategoryManagement.vue";
import AccountManagement from "@/components/permissions/AccountManagement.vue";
import TenantManagement from "@/components/permissions/TenantManagement.vue";



import Error from "@/components/Error.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/UserLogin",
    name: "UserLogin",
    component: UserLogin,
  },

  {
    path: "/AccessControl",
    name: "AccessControl",
    component: AccessControl,
  },
  {
    path: "/VisitorReservation",
    name: "VisitorReservation",
    component: VisitorReservation,
  },

  {
    path: "/ChargingPile",
    name: "ChargingPile",
    component: ChargingPile,
  },
  {
    path: "/EnergyConservation",
    name: "EnergyConservation",
    component: EnergyConservation,
  },
  {
    path: "/EnergyMonitoring",
    name: "EnergyMonitoring",
    component: EnergyMonitoring,
  },
  {
    path: "/GreenElectricity",
    name: "GreenElectricity",
    component: GreenElectricity,
  },

  {
    path: "/AbnormalNotification",
    name: "AbnormalNotification",
    component: AbnormalNotification,
  },
  {
    path: "/SecurityCopilot",
    name: "SecurityCopilot",
    component: SecurityCopilot,
  },
  
  {
    path: "/MeetingReservation",
    name: "MeetingReservation",
    component: MeetingReservation,
  },
  {
    path: "/SmartBroadcasting",
    name: "SmartBroadcasting",
    component: SmartBroadcasting,
  },
  {
    path: "/SmartLocker",
    name: "SmartLocker",
    component: SmartLocker,
  },
  {
    path: "/SmartParking",
    name: "SmartParking",
    component: SmartParking,
  },
  {
    path: "/SmartSports",
    name: "SmartSports",
    component: SmartSports,
  },

  // #region demo
  {
    path: "/ColorDemo",
    name: "ColorDemo",
    component: ColorDemo,
  },
  {
    path: "/ButtonDemo",
    name: "ButtonDemo",
    component: ButtonDemo,
  },
  {
    path: "/InputDemo",
    name: "InputDemo",
    component: InputDemo,
  },
  {
    path: "/SelectDemo",
    name: "SelectDemo",
    component: SelectDemo,
  },
  {
    path: "/ModalDemo",
    name: "ModalDemo",
    component: ModalDemo,
  },
  {
    path: "/CardDemo",
    name: "CardDemo",
    component: CardDemo,
  },
  {
    path: "/FormDemo",
    name: "FormDemo",
    component: FormDemo,
  },
  {
    path: "/PlotlyDemo",
    name: "PlotlyDemo",
    component: () => import("@/components/demo/PlotlyDemo.vue"),
  },
  {
    path: "/FakeApiDemo",
    name: "FakeApiDemo",
    component:  () => import('@/components/demo/FakeApiDemo.vue'),
  },
  {
    path: "/OptionUserDemo",
    name: "OptionUserDemo",
    component: OptionUserDemo,
  },
  {
    path: "/TailwindDemo",
    name: "TailwindDemo",
    component: () => import('@/components/demo/TailwindDemo.vue'),
  },
  {
    path: "/TableDemo",
    name: "TableDemo",
    component: TableDemo,
  },
  {
    path: "/PermissionError",
    name: "PermissionError",
    component: () => import('@/components/PermissionError.vue'),
  },
  {
    path: "/Error",
    name: "Error",
    component: Error,
  },

  // 權限管理
  {
    path: "/TenantManagement",
    name: "TenantManagement",
    component: TenantManagement,
  },
  {
    path: "/AccountManagement",
    name: "AccountManagement",
    component: AccountManagement,
  },
  {
    path: "/CategoryManagement",
    name: "CategoryManagement",
    component: CategoryManagement,
  },
  {
    path: "/FunctionManagement",
    name: "FunctionManagement",
    component: FunctionManagement,
  },
  {
    path: "/RoleManagement",
    name: "RoleManagement",
    component: RoleManagement,
  },
  {
    path: "/PermissionManagement",
    name: "PermissionManagement",
    component: PermissionManagement,
  },



  //#endregion

  // #region acc demo
  {
    path: "/AccTable",
    name: "acctable",
    component: () => import("@/components/demo/AccTableDemo.vue"),
  },
  // #endregion
];

// createRouter History，可使用 createWebHistory 或 createWebHashHistory方式，由於本專案需要掛載如iis，需要一個web Name，故使用:createWebHashHistory,設定相對路徑router
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
