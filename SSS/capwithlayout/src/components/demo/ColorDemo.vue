<script setup>
import basePage from "@/components/common/BasePage.vue";
import baseButton from "@/components/common/BaseButton.vue";
import baseButtonDownload from "@/components/common/BaseButtonDownload.vue";
import baseButtonSearch from "@/components/common/BaseButtonSearch.vue";

import axios from "axios";
import { provide, reactive, ref, readonly, onBeforeMount,computed,watch   } from "vue";

const btnn = ref(true);
const btnClick = () => {  
      btnn.value = !btnn.value;  
      console.log(btnn.value)
    };  
const list=[
      { id: '123456789', name: '選項 1' },
      { id: '234567890', name: '選項 2' },
      { id: '345678901', name: '選項 3' },
    ];
    const tt=ref('測試文字');
const tableData = [  
  {  
    "key": "auoBlue",  
    "value": "#005087"  
  },  
  {  
    "key": "smartBlue",  
    "value": "#64dcf0"  
  },  
  {  
    "key": "energeticYellow",  
    "value": "#ffe664"  
  },  
  {  
    "key": "innovativePurple",  
    "value": "#b491d7"  
  },  
  {  
    "key": "sustainableGreen",  
    "value": "#87dc64"  
  },  
  {  
    "key": "darkBlue",  
    "value": "#147891"  
  },  
  {  
    "key": "darkYellow",  
    "value": "#E6A50F"  
  },  
  {  
    "key": "darkPurple",  
    "value": "#643C96"  
  },  
  {  
    "key": "darkGreen",  
    "value": "#328732"  
  },  
  {  
    "key": "darkRed",  
    "value": "#E65F5A"  
  },  
  {  
    "key": "darkBrown",  
    "value": "#785A46"  
  },  
  {  
    "key": "lightBlue",  
    "value": "#BEE6E1"  
  },  
  {  
    "key": "lightYellow",  
    "value": "#FFF0B4"  
  },  
  {  
    "key": "lightPurple",  
    "value": "#D7B4E1"  
  },  
  {  
    "key": "lightGreen",  
    "value": "#D2F09B"  
  },  
  {  
    "key": "lightRed",  
    "value": "#FFC8AA"  
  },  
  {  
    "key": "lightBrown",  
    "value": "#D2B496"  
  },  
  {  
    "key": "gray",  
    "value": {  
      "0": "#414141",  
      "1": "#646464",  
      "2": "#969696",  
      "3": "#c8c8c8",  
      "4": "#e1e1e1",  
      "5": "#f0f0f0",  
      "6": "#f5f5f5"  
    }  
  },  
  {  
    "key": "white",  
    "value": "#ffffff"  
  },  
  {  
    "key": "maskColor",  
    "value": "#003c6599"  
  },  
  {  
    "key": "silver",  
    "value": "#ecebff"  
  },  
  {  
    "key": "bubble-gum",  
    "value": "#ff77e9"  
  },  
  {  
    "key": "bermuda",  
    "value": "#78dcca"  
  }  
]  

</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">tailwind Colors Demo</div>
  <a
    href="https://daisyui.com/docs/colors/"
    target="_blank"
    class="link link-info"
    >tailwind Colors</a
  >
  <pre class="bg-bermuda">
    <code class="">

Color utility classesAll 
daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color. 
For example you can use `primary` color with any of Tailwind CSS color utilities.

bg-primary
to-primary
via-primary
from-primary
text-primary
ring-primary
fill-primary
caret-primary
stroke-primary
border-primary
divide-primary
accent-primary
shadow-primary
outline-primary
decoration-primary
placeholder-primary
ring-offset-primary

<span class="token comment">// You can also change the opacity</span>
bg-primary/<span class="token number">50</span></code><!----></pre>
  <table>  
    <thead>  
      <tr>  
        <th>key</th>  
        <th>value</th>  
        <th>demo</th>  
      </tr>  
    </thead>  
    <tbody>  
      <tr v-for="item in tableData" :key="item.key">  
        <td>{{ item.key }}</td>  
        <td>{{ item.value }}</td>  
        <td style="width: 30%;" :style="{ backgroundColor: item.value, width: '30%' } ">bg-{{ item.key }} </td>  
        
      </tr>  
    </tbody>  
  </table>  


  </template>
