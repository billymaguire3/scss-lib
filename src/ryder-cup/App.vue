<script setup>
import RyderCupNavBar from "./components/RyderCupNavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="ryder-cup-app">
    <RyderCupNavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.ryder-cup-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
