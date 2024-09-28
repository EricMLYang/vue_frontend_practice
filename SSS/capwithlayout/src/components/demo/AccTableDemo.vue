<script setup>
import { reactive, onMounted } from "vue";
import basePage from "@/components/common/BasePage.vue";
import accTable from "@/components/common/AccTable.vue";

// data
const state = reactive({
  datas: [
    {
      name: "abc",
      no: 1,
      key: "dtesv3d32k-111",
      email: "dtesv3d32k-111@auo.com",
    },
    {
      name: "efg",
      no: 2,
      key: "d3esv3d2k2-157",
      email: "d3esv3d2k2-157@auo.com",
    },
  ],
  columns: [
    { key: "no", title: "#", width: 400 },
    { key: "name", title: "名", width: 300 },
    { key: "email", title: "Mail", width: 600 },
    { key: "action", title: "Action", width: "*", slot: true }, //當需要客製化的時候 透過 slot = true + col-[key] 方式綁定
  ],
});

// methods
const handleSend = function () {
  state.datas = [];
  // #region todo axios replace
  setTimeout(() => {
    state.datas = [
      {
        name: "abc",
        no: 1,
        key: "dtesv2d32k-111",
        email: "dtesv3d32k-1@auo.com",
      },
      {
        name: "efg",
        no: 2,
        key: "d3esv5d2k2-157",
        email: "d3esv3d2k2-2@auo.com",
      },
      {
        name: "abc",
        no: 3,
        key: "dtesv3d32k-111",
        email: "dtesv3d32k-3@auo.com",
      },
      {
        name: "efg",
        no: 4,
        key: "d3esv1d2k2-157",
        email: "d3esv3d2k2-4@auo.com",
      },
      {
        name: "abc",
        no: 6,
        key: "dtesv7d32k-111",
        email: "dtesv3d32k-5@auo.com",
      },
      {
        name: "efg",
        no: 3,
        key: "d3esv8d2k2-157",
        email: "d3esv3d2k2-7@auo.com",
      },
    ];
  }, 2);
  // #endregion
};

const handleClear = function () {
  // #region todo axios replace
  state.datas = [
    {
      name: "efg",
      no: 4,
      key: "d3esv1d2k2-157",
      email: "d3esv3d2k2-4@auo.com",
    },
    {
      name: "abc",
      no: 6,
      key: "dtesv7d32k-111",
      email: "dtesv3d32k-5@auo.com",
    },
    {
      name: "efg",
      no: 3,
      key: "d3esv8d2k2-157",
      email: "d3esv3d2k2-7@auo.com",
    },
  ];
  // #endregion
};

const handleRowSearch = function (row) {
  console.log("Search", row);
};

const handleRowEdit = function (row) {
  console.log("Edit", row);
};
</script>

<template>
  <basePage />
  <div class="grid grid-cols-3 gap-3 mt-3">
    <div class="col-span-3 text-4xl font-bold">Acc Table Demo</div>
    <div class="col-span-3">
      <button class="btn btn-primary" @click="handleSend">Send</button>
      <button class="btn" @click="handleClear">Clear</button>
    </div>
    <div
      class="text-center justify-center col-span-3 table-pin-cols"
      v-if="state.datas.length > 0"
    >
      <accTable :p-datas="state.datas" :p-columns="state.columns">
        <template #col-action="{ scope }">
          <div class="grid grid-cols-5 gap-1">
            <button
              class="btn btn-neutral btn-xs"
              @click="
                () => {
                  handleRowSearch(scope);
                }
              "
            >
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
            <button
              class="btn btn-neutral btn-xs"
              @click="
                () => {
                  handleRowEdit(scope);
                }
              "
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
          </div>
        </template>
      </accTable>
    </div>
  </div>
</template>
