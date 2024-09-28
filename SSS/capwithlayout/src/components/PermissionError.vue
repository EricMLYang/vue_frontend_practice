<script setup>
import { doCAPLogout } from "@/auth/auoCapAuth";
const dologout = () => {
  doCAPLogout();
};
</script>

<template>
  <div class="card card-side bg-base-300 shadow-xl">
    <figure class="">
      <img
        src="../assets/images/bg8.jpg"
        class="mask mask-squircle"
        alt="AUO"
      />
    </figure>
    <div class="card-body bg-base-100">
      <h2 class="card-title text-orange-700">
        <font-awesome-icon
          icon="fa-solid fa-triangle-exclamation"
          class="fa-fade text-red-600"
        ></font-awesome-icon
        >非系統使用者
      </h2>
      <h2 class="text-xl text-orange-600">Oops! Not SystemUser.</h2>
      <p>
        We could not show the page you were looking for. Meanwhile, you may call
        IT or try refreshing the page.
      </p>
      <div class="card-actions justify-end">
        <span class="text-gray-500">嘗試其他身分登入</span>
        <button class="btn btn-active">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          <a href="#" @click="dologout" title="登出"> 登出 </a>
        </button>
      </div>
    </div>
  </div>
</template>
