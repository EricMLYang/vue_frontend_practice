<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const vRouter = useRouter();

const gHasPermission = inject("HasPermission");
if (!gHasPermission.value) {
  vRouter.push({ name: "PermissionError" });
}
</script>

<template></template>
