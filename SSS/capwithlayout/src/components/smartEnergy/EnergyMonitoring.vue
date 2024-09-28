<template>  
  <el-menu  
    :default-active="activeIndex"  
    class="el-menu-demo"  
    mode="horizontal"  
    @select="handleSelect"  
  >  
    <el-menu-item index="1">能源總覽</el-menu-item>  
    <el-menu-item index="2">能源即時監控</el-menu-item>  
    <!-- <el-menu-item index="3">能源智能調控</el-menu-item>  
    <el-menu-item index="4">充電樁管理</el-menu-item>   -->
  </el-menu>  
  <div class="iframe-container">  
    <iframe v-show="activeIndex === '1'" src="https://sss-auoapi.azurewebsites.net/power_usage_total" frameborder="0" width="100%" height="100%"></iframe>  
    <iframe v-show="activeIndex === '2'" src="https://sss-auoapi.azurewebsites.net/power_usage_hourly" frameborder="0" width="100%" height="100%"></iframe>  
    <!-- <iframe v-show="activeIndex === '3'" src="https://sss-auoapi.azurewebsites.net/power_smart_action" frameborder="0" width="100%" height="100%"></iframe>  
    <iframe v-show="activeIndex === '4'" src="https://sss-auoapi.azurewebsites.net/charge_pile" frameborder="0" width="100%" height="100%"></iframe>   -->
  </div>  
</template>  
  
<script  setup>  
import { ref } from 'vue'  
  
const activeIndex = ref('1')  
  
const handleSelect = (key, keyPath) => {  
  activeIndex.value = key  
  console.log(key)  
}  
</script>  
  
<style>  
.iframe-container {  
  position: relative;  
  width: 100%;  
  height: 100%;  
}  
.iframe-container iframe {  
  position: absolute;  
  top: 0;  
  left: 0;  
}  
</style>  
