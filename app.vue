<template>

<div>
  <NuxtLayout v-if="!isLoading" :key="layoutKey">
      <div>
        <NuxtLoadingIndicator color="#ffffff" :height="5" />
        <NuxtPage />
      </div>
    </NuxtLayout>
    <div v-if="isLoading" class="loading-screen">
      <!-- Your custom loading HTML or component -->
      <LoadingSpinner />
    </div>
</div>
  </template>
  
  <script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
const isLoading = ref(true);
const layoutKey = ref(0)
const route = useRoute()
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
watch(() => route.path, () => {
  isLoading.value = true;
  layoutKey.value++;
});
  
  </script>