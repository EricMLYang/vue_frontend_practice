<script setup>
const props = defineProps({
  pTitle: { type: String, required: false },
});
</script>

<template>
  <div class="form-control">
    <slot></slot>
    <label class="label">
      <span class="label-text-alt">{{ pTitle }}</span>
    </label>
  </div>
</template>

<style scoped></style>
