<script setup>
const props = defineProps({
  pCardTitle: { type: String, required: false },
  pTitleIcon: { type: String, required: false },
  pTitleClass: { type: String, required: false, default: "rounded-t-lg" },
});
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div
      class="card-title bg-base-200 p-2"
      v-if="pCardTitle"
      :class="pTitleClass"
    >
      <h2>
        <font-awesome-icon :icon="pTitleIcon" v-if="pTitleIcon" />
        {{ pCardTitle }}
      </h2>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
