<template>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
  <Footer />
</template>
<script lang="ts" setup>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
</script>
