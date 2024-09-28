<script setup>
import { reactive, watch } from "vue";
import basePage from "@/components/common/BasePage.vue";
import baseModal from "@/components/common/BaseModal.vue";

const state = reactive({
  showModal: false,
  showModal2: false,
});

const hanelClose = function () {
  state.showModal2 = false;
};

const hanelSend = function () {
  console.log(state.showModal2);
  state.showModal2 = false;
};

watch(
  () => state.showModal2,
  (newv, oldv) => {
    console.log("watch - showModal2", newv, oldv);
  }
);
</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">Modal Demo</div>
  <baseModal
    p-btn-title="Open Modal"
    p-title="Hi !"
    v-model:p-show="state.showModal"
  >
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
    <label class="swap swap-flip text-9xl">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" />

      <div class="swap-on">😈</div>
      <div class="swap-off">😇</div>
    </label>
  </baseModal>

  <baseModal
    p-btn-title="Open 2  components"
    p-title="Modal 2"
    v-model:p-show="state.showModal2"
  >
    <p>model2</p>
    <template #modal-footer>
      <button class="btn" @click="hanelClose">X</button>
      <button class="btn primary" @click="hanelSend">Send</button>
    </template>
  </baseModal>



<!-- The button to open modal -->

<label for="my_modal_6" class="btn">open modal 程式碼</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
 
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="modal-action">
      <label for="my_modal_6" class="btn">Close!</label>
    </div>
  </div>
  <!-- 點外面就可以關閉 -->
  <!-- <label class="modal-backdrop" for="my_modal_6">Close</label>  --> 
   
</div>

<el-button class="ms-2" type="primary" :icon="Edit" @click="centerDialogVisible = true">查詢</el-button>
</template>
