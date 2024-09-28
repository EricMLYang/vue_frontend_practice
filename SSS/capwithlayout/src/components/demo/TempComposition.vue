<script setup>
import { inject, reactive, onMounted } from "vue";
import axios from "axios";
import basePage from "@/components/common/BasePage.vue";

// [Property] component props in
const props = defineProps({
  pVal: { type: [String, Number], required: true, default: "ABC" },
});
// [Property] compoent event out
const emit = defineEmits(["name"]);

// inject (readonly)-CapUser
const capUser = inject("CapUser");
const empNo = inject("CapEmployeeId");

// data
const state = reactive({
  inputVal: "",
});

// methods
const hanleClick = () => {
  state.inputVal = "";
};
const hanleSend = () => {
  console.log("send", state.inputVal);
  // todo
  /*
    axios.post(url, state.inputVal)
      .then((response) => {
        
      })
    */
};

// mounted
onMounted(() => {
  state.inputVal = props.pVal;
});
</script>

<template>
  <basePage />
  <div class="temp-comp-vue">
    <input v-model="state.inputVal" />
    <button @click="hanleClick">Clear</button>
    <button @click="hanleSend">Send</button>
  </div>
</template>
