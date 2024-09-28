<script setup>
import { ref } from "vue";
import basePage from "@/components/common/BasePage.vue";
import baseButton from "@/components/common/BaseButton.vue";
import baseCard from "@/components/common/BaseCard.vue";
import baseFormGroup from "@/components/common/BaseFormGroup.vue";
import baseInput from "@/components/common/BaseInput.vue";
import baseSelect from "@/components/common/BaseSelect.vue";
import baseMultiSelect from "@/components/common/BaseMultiSelect.vue";

const textValue = ref("Hastings");

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
  <div class="text-4xl font-bold">Form Demo</div>
  <baseCard p-card-title="Title">
    <div class="flex w-full">
      <div class="grid flex-grow card">
        <baseInput
          v-model="textValue"
          p-placeholder="Type here"
          p-label="TextBox*"
        ></baseInput>
      </div>
      <div class="grid flex-grow card">
        <baseSelect
          v-model="value1"
          p-placeholder="Type here"
          p-label="Single Select*"
          :options="options1"
        ></baseSelect>
      </div>
      <div class="grid flex-grow card">
        <baseMultiSelect
          v-model="value2"
          p-placeholder="Type here"
          p-label="Multi Select*"
          :options="options2"
        ></baseMultiSelect>
      </div>
    </div>
  </baseCard>
  <div class="text-xl font-bold">Output</div>
  <div class="output ">TextBox: {{ textValue }}</div>
  <div class="output">Single Select: {{ value1 }}</div>
  <div class="output">Multi Select: {{ value2 }}</div>
</template>
