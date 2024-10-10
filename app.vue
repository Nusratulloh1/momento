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
const layoutKey = ref(0); // To force layout re-render on navigation
const route = useRoute()
// Show loading screen for a certain duration (e.g., 3 seconds)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // 3000 milliseconds = 3 seconds
});

// Watch for route changes to reset the loading screen
watch(() => route.path, () => {
  isLoading.value = true;
  layoutKey.value++; // Update key to force re-render
  // Optionally reset timeout if needed
});
  
  </script>