<script>
import axios from "axios";
import basePage from "@/components/common/BasePage.vue";

export default {
  components: { basePage },
  // [Property] component props in
  props: {
    pVal: {
      type: [String, Number],
      required: true,
      default: "ABC",
    },
  },
  // [Property] compoent event out
  emit: ["mysend"],
  // inject (readonly)-CapUser
  inject: ["CapUser", "CapEmployeeId"],
  // data
  data() {
    return {
      inputVal: "",
    };
  },
  // mounted
  mounted() {
    const vm = this;
    vm.inputVal = vm.pVal;
  },
  // methods
  methods: {
    hanleClick() {
      const vm = this;
      vm.inputVal = "";
    },
    hanleSend() {
      const vm = this;
      console.log("send", vm.inputVal);
      vm.$emit("mysend", vm.inputVal);
      // todo
      /*
    axios.post(url, state.inputVal)
      .then((response) => {

      })
    */
    },
  },
};
</script>

<template>
  <basePage />
  <div class="temp-comp-vue">
    <input v-model="inputVal" />
    <button @click="hanleClick">Clear</button>
    <button @click="hanleSend">Send</button>
  </div>
</template>
