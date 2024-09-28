<script setup>
import { ref } from "vue";
import basePage from "@/components/common/BasePage.vue";
import baseInput from "@/components/common/BaseInput.vue";

const firstName = ref("Hastings");
</script>

<template>
  <basePage />
  <div class="text-4xl  font-bold ">Input Demo</div>
  <baseInput
    v-model="firstName"
    p-placeholder="Type here"
    p-label="First name*"
  ></baseInput>

  <div class="output">Output: {{ firstName }}</div>
</template>
