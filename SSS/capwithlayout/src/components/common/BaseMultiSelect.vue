<script setup>
const props = defineProps({
  modelValue: { type: Array, required: true, default: []},
  options: {
    type: Array,
    required: true,
  },
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
    mode="tags"
    :close-on-select="false"
    :searchable="true"
    :create-option="false"
    v-on:input="updateValue($event)"
  />
  <label class="label">
    <slot
      ><span class="label-text-alt">{{ pLabel }}</span></slot
    >
  </label>
</template>

<style scoped></style>
