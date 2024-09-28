<script setup>
// reference https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments
import { reactive, computed } from 'vue'

const props = defineProps({
  pShow: { type:Boolean, required: true },
  pBtnTitle: { type: String, required: false },
  pTitle: { type: String, required: false },  
});

const emit = defineEmits(['update:pShow'])
</script>

<template>
  <!-- You can open the modal using ID.showModal() method -->
  <button class="btn" @click="$emit('update:pShow', true)">{{ pBtnTitle }}</button>
  <dialog class="modal"
          :open="props.pShow">
    <form method="dialog" class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        @click="$emit('update:pShow', false)">
        ✕
      </button>
      <h3 class="font-bold text-lg">{{ pTitle }}</h3>
      <slot></slot>
      <div class="modal-action">
        <slot name="modal-footer">
          <button @click="$emit('update:pShow', false)">close</button>
        </slot>
      </div>
    </form> 
  </dialog>
</template>

<style scoped></style>
