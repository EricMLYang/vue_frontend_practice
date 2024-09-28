<script setup>
const emit = defineEmits(["send"]);

const handleClick = () => {
  emit("send");
};
</script>

<template>
  <button class="btn" v-on:click="handleClick">
    <slot>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </slot>
  </button>
</template>

<style scoped></style>
