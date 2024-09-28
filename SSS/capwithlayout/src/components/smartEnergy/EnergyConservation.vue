<template>  
  <el-menu  
    :default-active="activeIndex"  
    class="el-menu-demo"  
    mode="horizontal"  
    @select="handleSelect"  
  >  
    <el-menu-item index="1">能源智能調控</el-menu-item>  
  
  </el-menu>  
  <div class="iframe-container">  
    <iframe v-show="activeIndex === '1'" src="https://sss-auoapi.azurewebsites.net/power_smart_action" frameborder="0" width="100%" height="100%"></iframe>  
  </div>  
</template>  
  
<script setup>  
import { ref } from 'vue'  
  
const activeIndex = ref('1')  
  
const handleSelect = (key, keyPath) => {  
  activeIndex.value = key  
  console.log(key, keyPath)  
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
