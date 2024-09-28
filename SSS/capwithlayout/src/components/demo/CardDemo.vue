<script setup>
import basePage from "@/components/common/BasePage.vue";
import baseCard from "@/components/common/BaseCard.vue";
</script>

<template>
  <basePage />
  <div class="text-4xl font-bold">Card Demo</div>
  <div class="p-3">
    <baseCard p-card-title="Title">content</baseCard>
  </div>
  <div class="p-3">
    <baseCard p-card-title="Icon Title" p-title-icon="fa-solid fa-circle-info"
      >content</baseCard
    >
  </div>
  <div class="p-3">
    <baseCard> <p>no title</p></baseCard>
  </div>
  <div class="p-3">
    <baseCard
      class="card-side"
      p-card-title="Title"
      p-title-class="rounded-l-lg"
    >
      content
    </baseCard>
  </div>
</template>
