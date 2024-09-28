<script setup>
import { inject, reactive, onMounted,ref } from "vue";
import axios from "axios";



// data
const state = ref(true); //之後刪除

// methods
const demoClick = () => {
  console.log('任何事件，命名駝峰') //之後刪除
};


// mounted
onMounted(() => {
 console.log('開始') //之後刪除
});
</script>

<template>
  
  <!--  HTML 之後刪除-->
  <button type="button" class="btn btn-auoBlue">探索更多</button>
 
</template>
