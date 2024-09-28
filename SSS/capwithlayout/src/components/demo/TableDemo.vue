<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import basePage from "@/components/common/BasePage.vue";
import baseTable from "@/components/common/BaseTable.vue";
import { fncGetResult } from "@/api/tableApi";

// data
const state = reactive({
  columns: [
    { key: "no", title: "#", sort: true },
    { key: "name", title: "名", sort: true },
    { key: "email", title: "Mail", width: "*" },
  ],
  datas: {
    totalCount: 0,
    tableLoading: false,
    data: [],
  },
  pager: {
    pageNo: 1,
    pageSize: 5,
  },
});

var allData = ref([]);
const getResult = async () => {
  state.datas.tableLoading = true;
  setTimeout(async () => {
    allData.value = await fncGetResult();
    pageTableData.value = allData.value;

    state.datas.tableLoading = false;
  }, 1000);
};

const pageTableData = computed(() => {
  state.datas.data = allData.value.slice(
    (state.pager.pageNo - 1) * state.pager.pageSize,
    state.pager.pageNo * state.pager.pageSize
  );

  state.datas.totalCount = allData.value.length;

  return state.datas;
});

onMounted(async () => {
  await getResult();
});

const handleRowSearch = (row) => {
  console.log("Search", row);
};

const handleRowEdit = (row) => {
  console.log("Edit", row);
};

const fncChangePager = () => {};
</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">Element Plus Table Demo</div>
  <a
    href="https://element-plus.org/zh-CN/component/table.html"
    target="_blank"
    class="link link-info"
    >Sample Url</a
  >
  <baseTable
    :p-datas="pageTableData"
    :p-columns="state.columns"
    :p-pager="state.pager"
    v-on:update:change-pager="fncChangePager"
  >
    <template v-slot:elTableColumnRight>
      <el-table-column label="Action" width="180">
        <template v-slot="{ scope }">
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
      </el-table-column> </template
  ></baseTable>

  
</template>
