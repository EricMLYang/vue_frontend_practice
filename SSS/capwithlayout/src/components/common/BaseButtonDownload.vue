<script setup>
const emit = defineEmits(["send"]);

const handleClick = () => {
  emit("send");
};
</script>

<template>
  <button class="btn btn-success" v-on:click="handleClick">
    <slot>
      <font-awesome-icon icon="fa-solid fa-download" />
    </slot>
  </button>
</template>

<style scoped></style>
