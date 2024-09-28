<script setup>
import basePage from "@/components/common/BasePage.vue";
import { reactive, onMounted } from "vue";
import baseButton from "@/components/common/BaseButton.vue";
import baseSelect from "@/components/common/BaseSelect.vue";
import accTable from "@/components/common/AccTable.vue";

import api from "@/api/myApi";

const state = reactive({
  opt: {
    orgs: [
      { id: 1, name: "ADTED1" },
      { id: 2, name: "ADTED2" },
    ],
  },
  // 選取
  filter: {
    org: "",
  },
  // 人員資料展示
  userList: {
    datas: [
      { id: "1107308", name: "rex" },
      { id: "ddd234", name: "eric" },
    ],
    columns: [
      { key: "id", title: "編號", width: 400 },
      { key: "name", title: "姓名", width: 300 },
      // { key: 'detail', title: 'Detail', width: '*' ,slot: true} //當需要客製化的時候 透過 slot = true + col-[key] 方式綁定
    ],
  },
});

const changeDept = (event) => {
  state.userList.datas = [];
  api.post("/demo/dept/users", state.filter.org).then((res) => {
    res.data.find(function (row) {
      if (row.org === state.filter.org) {
        state.userList.datas = row.users;
      }
    });
  });
};

onMounted(() => {
  api.get("/demo/dept").then((res) => {
    state.opt.orgs = res.data;
  });
});
</script>

<template>
  <basePage />
  <div class="grid grid-cols-6 gap-4">
    <div class="col-end-7 col-span-3">Demo Api Switch</div>
    <div class="col-start-2 col-span-4">
      <select
        class="select select-bordered select-primary"
        v-model="state.filter.org"
        @change="changeDept"
      >
        <option
          v-for="item in state.opt.orgs"
          :key="item.id"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="col-start-1 col-end-6">
      <div v-if="state.userList.datas.length === 0">
        <!-- loading with fontawsome -->
        <!-- ref=https://fontawesome.com/docs/web/style/animate -->
        <span class="fa-2x">
          <!-- ref=https://fontawesome.com/docs/web/style/animate -->
          <font-awesome-icon
            icon="fa-solid fa-globe"
            class="fa-beat-fade mx-3"
            style="--fa-beat-fade-opacity: 0.1; --fa-beat-fade-scale: 1.25"
          />
          Loading
          <i class="fa-solid fa-triangle-exclamation fa-fade"></i>
        </span>
        <!-- loading with dasiy UI -->
        <!-- ref=https://daisyui.com/components/loading/ -->
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <div v-else>
        <accTable
          :p-datas="state.userList.datas"
          :p-columns="state.userList.columns"
        >
        </accTable>
      </div>
    </div>
  </div>
</template>
