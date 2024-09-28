<script setup>
import { ref } from "vue";
import basePage from "@/components/common/BasePage.vue";
import baseSelect from "@/components/common/BaseSelect.vue";
import baseMultiSelect from "@/components/common/BaseMultiSelect.vue";

const value1 = ref("");
const options1 = ["Batman", "Robin", "Joker"];

const value2 = ref([]);
const options2 = [
  { value: "batman", label: "Batman" },
  { value: "robin", label: "Robin" },
  { value: "joker", label: "Joker" },
];
</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">Select Demo</div>
  <baseSelect
    v-model="value1"
    p-placeholder="Type here"
    p-label="Age*"
    :options="options1"
  ></baseSelect>
  <div class="output">Output: {{ value1 }}</div>
  <div class="py-8"></div>
  <div class="text-4xl font-bold">MultiSelect Demo</div>
  <baseMultiSelect
    v-model="value2"
    p-placeholder="Type here"
    p-label="Data*"
    :options="options2"
  ></baseMultiSelect>
  <div class="output">Output: {{ value2 }}</div>
</template>
