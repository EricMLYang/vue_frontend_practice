<script>
import basePage from "@/components/common/BasePage.vue";
import baseCard from "@/components/common/BaseCard.vue";

export default {
  components: { basePage, baseCard },
  data() {
    return {};
  },
  computed: {
    gUser() {
      return this.CapUser;
    },
  },
  inject: ["CapUser"],
};
</script>

<template>
  <basePage />
  
  <div class="text-4xl font-bold">使用「選項式」取得Cap User資料</div>

  
  <a
    href="https://cn.vuejs.org/api/options-composition.html"
    target="_blank"
    class="link link-info"
    >Sample Url</a
  >
  <div class="p-3">
    <baseCard p-card-title="User Data">
      <div class="form-control">
        <label class="input-group p-1">
          <span class="w-20 ">姓名</span>
          <input
            type="text"
            v-model="gUser.RealName"
            placeholder="Show RealName"
            class="input input-bordered w-full"
            readonly="readonly"
          />
        </label>
        <label class="input-group p-1">
          <span class="w-20">部門</span>
          <input
            type="text"
            v-model="gUser.DepartmentId"
            placeholder="Show DepartmentId"
            class="input input-bordered w-full"
            readonly="readonly"
          />
        </label>
        <label class="input-group p-1">
          <span class="w-20">工號</span>
          <input
            type="text"
            v-model="gUser.EmployeeId"
            placeholder="Show EmployeeId"
            class="input input-bordered w-full"
            readonly="readonly"
          />
        </label>
        <label class="input-group p-1">
          <span class="w-20">Email</span>
          <input
            type="text"
            v-model="gUser.Email"
            placeholder="Show Email"
            class="input input-bordered w-full"
            readonly="readonly"
          />
        </label>
      </div>
    </baseCard>

  
    <a
    href="https://daisyui.com/components/steps/"
    target="_blank"
    class="link link-info"
    >參考</a
  >
    <ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step step-accent">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
  </div>

  
</template>
