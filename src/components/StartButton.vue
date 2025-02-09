<template>
  <button class="start-button">고르기</button>
</template>
<script setup lang="ts"></script>
<style scoped>
.start-button {
  @apply w-full h-[50px] rounded-md;
  @apply bg-PRIMARY active:bg-PRIMARY_ACTIVE;
  @apply text-lg font-medium text-WHITE;
  @apply transition-200;
}

@media screen and (min-width: 768px) {
  .start-button {
    @apply hover:bg-PRIMARY_HOVER active:bg-PRIMARY_ACTIVE;
  }
}
</style>