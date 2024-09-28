<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: { type: String, required: true, default: '' }, 
  pLabel: { type: String, required: false },
  pPlaceholder: { type: String, required: false },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <Multiselect
    v-model="props.modelValue"
    :placeholder="pPlaceholder"
    :options="options"
    v-on:input="updateValue($event)"
  />
  <label class="label">
    <slot
      ><span class="label-text-alt">{{ pLabel }}</span></slot
    >
  </label>
</template>

<style scoped></style>
