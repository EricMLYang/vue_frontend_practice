<script setup>
const props = defineProps({
  modelValue: { type: [String, Number], required: true },
  pLabel: { type: String, required: false },
  pPlaceholder: { type: String, required: false },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
const clearValue = () => { 
  emit("update:modelValue", "");
};
</script>

<template>
  <div class="form-control">
    <div class="input-group">
      <input
        type="text"
        :value="props.modelValue"
        :placeholder="pPlaceholder"
        class="input input-bordered input-sm w-full"
        v-on:input="updateValue($event.target.value)"
      />
      <button class="btn btn-sm" @click="clearValue">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" />
      </button>
    </div>
  </div>
  <label class="label">
    <slot
      ><span class="label-text-alt">{{ pLabel }}</span></slot
    >
  </label>
</template>

<style scoped></style>
