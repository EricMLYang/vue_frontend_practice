<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  total: {
    required: true,
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 50, 100];
    },
  },
  layout: {
    type: String,
    default: "total, sizes, prev, pager, next, jumper",
  },
  background: {
    type: Boolean,
    default: false,
  },
  autoScroll: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["pagination", "update:page", "update:limit"]);

const currentPage = computed({
  get() {
    return props.page;
  },
  set(newValue) {
    emit("update:page", newValue);
  },
});

const pageSize = computed({
  get() {
    return props.limit;
  },
  set(newValue) {
    emit("update:limit", newValue);
  },
});

const handleSizeChange = (val) => {
  emit("pagination", { page: currentPage.value, limit: val });
  if (props.autoScroll) {
    scrollTo(0, 800);
  }
};
const handleCurrentChange = (val) => {
  currentPage.value = val;
  emit("pagination", { page: val, limit: props.limit });
  if (props.autoScroll) {
    scrollTo(0, 800);
  }
};
</script>

<template>
  <div class="float-right">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :background="background"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>
