<script>
import axios from "axios";
import basePage from "@/components/common/BasePage.vue";
import baseCard from "@/components/common/BaseCard.vue";
import baseLoading from "@/components/common/BaseLoading.vue";
import accTable from "@/components/common/AccTable.vue";

export default {
  components: { basePage, baseCard, baseLoading, accTable },
  // inject (readonly)-CapUser
  inject: ["CapUser", "CapEmployeeId"],
  // data
  data() {
    return {
      inputVal: "",
      copyIcon: ["fas", "copy"],
      demoLoading: {
        show: false,
        tables: [
          { name: "AAA", tel: "#3333", addr: "HC-3f", age: 30 },
          { name: "DDD", tel: "#3333", addr: "HC-3f", age: 30 },
          { name: "EEE", tel: "#3333", addr: "HC-3f", age: 30 },
          { name: "FFF", tel: "#3333", addr: "HC-3f", age: 30 },
        ],
        columns: [
          { key: "name", title: "姓名", width: "*" },
          { key: "tel", title: "電話", width: 200 },
          { key: "age", title: "年齡", width: 200 },
        ],
      },
    };
  },
  // mounted
  mounted() {
    const vm = this;
    console.log("tailwind-demo mounted", vm.CapUser);
  },
  // methods
  methods: {
    hanleClick() {
      const vm = this;
      vm.inputVal = "";
    },
    handleCopy: function () {
      const vm = this;
      vm.copyIcon = ["fas", "paste"];
      setTimeout(() => {
        vm.copyIcon = ["fas", "copy"];
      }, 1000);
    },
    hanldeSend() {
      console.log("keyup send");
    },
    handleLoading() {
      const vm = this;
      vm.demoLoading.show = true;
      setTimeout(() => {
        vm.demoLoading.show = false;
      }, 3000);
      console.log("Loading");
    },
  },
};
</script>

<template>
  <basePage />
  <div class="tailwind-demo">
    <div class="flex space-x-4 ...">
      <div class="flex-1 ... bg-green-200">1</div>
      <div class="flex-1 ... bg-green-400">2</div>

    </div>
    <baseCard p-card-title="Tailwind 切版 - Columns" class="mb-3">
      <div class="columns-4 gap-9">
        <div class="bg-green-200">A</div>
        <div class="bg-green-400">B</div>
        <div class="bg-green-600">C</div>
        <div class="bg-green-800">D</div>
      </div>
    </baseCard>
    <baseCard p-card-title="Tailwind 切版 - grid (基本)" class="mb-3">
      <div class="grid grid-rows-4 grid-flow-col gap-2">
        <div class="bg-green-200">A</div>
        <div class="bg-green-200">B</div>
        <div class="bg-green-200">C</div>
        <div class="bg-green-200">D</div>
        <div class="bg-green-200">A1</div>
        <div class="bg-green-200">B1</div>
        <div class="bg-green-200">C1</div>
        <div class="bg-green-200">D1</div>
        <div class="bg-green-200">A2</div>
        <div class="bg-green-200">B2</div>
        <div class="bg-green-200">C2</div>
        <div class="bg-green-200">D2</div>
      </div>
    </baseCard>
    <baseCard p-card-title="Tailwind 切版 - grid (特殊)" class="mb-3">
      <div class="grid grid-cols-4 gap-2">
        <div class="bg-green-200 col-start-2 col-span-3">A</div>
        <div class="bg-green-200 col-start-2 col-end-4">B</div>
        <div class="bg-green-200 col-start-2 col-span-1">C</div>
        <div class="bg-green-200 col-span-4">D</div>
      </div>
    </baseCard>
    <baseCard p-card-title="Tailwind 切版 - Columns " class="mb-3">
      <div class="grid grid-cols-4 gap-4">
  <div class="bg-green-200">01</div>
  <div class="bg-green-200">02</div>
  <div class="bg-green-200">03</div>
  <div class="bg-green-200">04</div>
  <div class="bg-green-200">05</div>
  <div class="bg-green-200">06</div>
  <div class="bg-green-200">07</div>
  <div class="bg-green-200">08</div>
  <div class="bg-green-200">09</div>
</div>
    </baseCard>
    <baseCard p-card-title="Tailwind 切版 - Rows " class="mb-3">
      <div class="grid grid-rows-4 grid-flow-col gap-4">
  <div class="bg-green-200">01</div>
  <div class="bg-green-200">02</div>
  <div class="bg-green-200">03</div>
  <div class="bg-green-200">04</div>
  <div class="bg-green-200">05</div>
  <div class="bg-green-200">06</div>
  <div class="bg-green-200">07</div>
  <div class="bg-green-200">08</div>
  <div class="bg-green-200">09</div>
</div>
    </baseCard>
    <baseCard p-card-title="Tailwind 完成切版後放入 輸入框或按鈕" class="mb-3">
      <div class="grid grid-cols-4 gap-2">
        <div class="col-start-1 text-right">
          <label>姓名:</label>
        </div>
        <div class="col-start-2 col-span-2">
          <input type="text" placeholder="Key In User Name"
            class="input input-bordered input-base input-primary focus:input-info w-1/2 hover:w-full" />
        </div>
        <div class="col-start-1 text-right">
          <label>電話:</label>
        </div>
        <div class="col-start-2 col-span-2">
          <input type="text" placeholder="Your Tel"
            class="input input-bordered input-base focus:input-primary w-1/2 focus:w-full" @keyup.enter="hanldeSend" />
        </div>
        <div class="col-start-2 col-span-1">
          <button class="btn btn-primary w-full hover:btn-accent" @click="hanldeSend">
            查詢
          </button>
        </div>
      </div>
    </baseCard>
    <baseCard p-card-title="Font awesome">
      <div class="grid grid-cols-3 fa-3x">
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="fa-fade"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-poo-bolt" class="fa-beat-fade"
          style="--fa-beat-fade-opacity: 0.1; --fa-beat-fade-scale: 1.25"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-stopwatch" class="fa-shake"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-cog" class="fa-spin"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-palette" class="hover:text-green-600" />
        <button @click="handleCopy" class="mask hover:mask-heart bg-blue-400 hover:bg-pink-300">
          <font-awesome-icon :icon="copyIcon" />
        </button>
      </div>
    </baseCard>
    <baseCard p-card-title="demo Loading">
      <div class="min-h-screen">
        <button class="btn btn-primary w-1/4 mb-8" @click="handleLoading">
          <font-awesome-icon icon="fa-solid fa-paper-plane" />
        </button>
        <baseLoading :p-loading="demoLoading.show" p-text="please wait">
          <accTable :p-datas="demoLoading.tables" :p-columns="demoLoading.columns">
          </accTable>
        </baseLoading>
      </div>
    </baseCard>
  </div>
</template>
