<script setup>
import { ref, computed } from "vue";
import basePagination from "@/components/common/BasePagination.vue";

// [Property] component props in
const props = defineProps({
  pDatas: {
    type: Object,
    required: true,
    default: () => {
      return {
        totalCount: {
          type: Number,
          default: 0,
        },
        tableLoading: {
          type: Boolean,
          default: false,
        },
        data: [
          { dbColumnA: "columnA", dbColumnB: 1 },
          { dbColumnA: "columnB", dbColumnB: 2 },
        ],
      };
    },
  },
  pColumns: {
    type: [Array],
    required: true,
    default: [
      { key: "dbColumnA", title: "colA", width: 60, slot: true },
      { key: "dbColumnB", title: "colB", width: "*", slot: false },
    ],
  },
  pPager: {
    type: Object,
    required: false,
    default: () => {
      return {
        pageSize: {
          type: Number,
          default: 10,
        },
        pageNo: {
          type: Number,
          default: 1,
        },
      };
    },
  },
});

const tableData = computed(() => {
  return props.pDatas;
});
const pageData = computed(() => {
  return props.pPager;
});

const emit = defineEmits(["update:change-pager", "pagination"]);
const fncEmitChangePager = () => {
  emit("update:change-pager", pageData);
};

const fncChangeSize = (val) => {
  pageData.pageNo = 1;
  pageData.pageSize = val;

  fncEmitChangePager();
};

const fncChangePager = (val) => {
  fncEmitChangePager();
};
// 分页
const pagination = (ev) => {
  const { page, limit } = ev;
  pageData.pageNo = page;
  pageData.pageSize = limit;
  fncEmitChangePager();
  emit("pagination", ev);
};
</script>

<template>
  <el-table
    :data="tableData.data"
    empty-text="no datas"
    v-loading="tableData.tableLoading"
    class="shadow"
  >
    <slot name="elTableColumnLeft"></slot>
    <el-table-column
      v-for="(item, idx) in props.pColumns"
      :key="item.key"
      :width="item.width"
      :prop="item.key"
      :label="item.title"
      :sortable="item.sort"
    ></el-table-column>
    <slot name="elTableColumnRight"></slot>
  </el-table>
  <!-- <el-pagination
        v-model:current-page="pageData.pageNo"
        v-model:page-size="pageData.pageSize"
        @size-change="fncChangeSize"
        @current-change="fncChangePager"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, sizes, prev, pager, next"
        :total="tableData.totalCount"
      ></el-pagination> -->
  <!-- 分页 -->
  <basePagination
    v-if="tableData.totalCount > 0"
    v-model:limit="pageData.pageSize"
    v-model:page="pageData.pageNo"
    :page-sizes="[5, 10, 20, 50]"
    :total="tableData.totalCount"
    @pagination="pagination"
  />
</template>
