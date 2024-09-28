<script setup>
import basePage from "@/components/common/BasePage.vue";
import baseButton from "@/components/common/BaseButton.vue";
import baseButtonDownload from "@/components/common/BaseButtonDownload.vue";
import baseButtonSearch from "@/components/common/BaseButtonSearch.vue";

import axios from "axios";


const btnClick = (event) => {
  alert("button click");

  axios
    .get(
      "http://auohqcmmtt01.corpnet.auo.com/MicroLEDApi/api/EmpDataApi/GetEmpLike?empKey=1107308"
    )
    .then((res) => {
      console.log(res);
    });
};
const btnDownload = (event) => {
  alert("Download");
};
const btnSearch = (event) => {
  alert("Search");
};
</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">Button Demo</div>
  <div>
    <baseButton @send="btnClick"></baseButton>
    <div class="btn-group">
      <baseButton @send="btnClick"></baseButton>
      <baseButton class="btn-primary" @send="btnClick">按钮</baseButton>
    </div>
    <p></p>
    <div class="btn-group">
      <baseButtonDownload
        class="btn-outline"
        @send="btnDownload"
      ></baseButtonDownload>
      <baseButtonDownload @send="btnDownload">下載</baseButtonDownload>
    </div>
    <p></p>
    <div class="btn-group">
      <baseButtonSearch @send="btnSearch"></baseButtonSearch>
    </div>
    <p></p>
    <p></p>
    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-accent">accent</button>
    <button class="btn btn-ghost">ghost</button>
    <button class="btn btn-link">link</button>
    <br />
    <br />
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-error">Error</button>
    <button class="btn btn-warning">Warning</button>   
    <button type="button" class="btn btn-auo btn-primary">探索更多</button>
   

    
  </div>

  </template>
