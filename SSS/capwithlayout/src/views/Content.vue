<script setup>
import { inject, computed } from "vue";
import Sidebar from "@/views/Sidebar.vue";
const showMenu = inject("showMenu"); 
const showportal = inject("showportal"); 
const contentWidth = computed(()=> {
  if (showMenu.value) {
    return "w-56";
  } else {
    return "w-24";
  }
}) 
</script>
<template> 
  <div class="flex mb-auto min-h-fit" v-if="showportal"> 
    <Sidebar  />
    <div class="flex-grow p-2" style="overflow-x: hidden;" :class="contentWidth">
      <router-view></router-view>
    </div>    
  </div>
  <div class="flex mb-auto  min-h-fit" v-else>     
    <div class="flex-grow " :class="contentWidth">
      <router-view></router-view>
    </div>    
  </div>
</template>

