<template>
  <div class="container">
    <div class="page-header mb-5">
      <h1>Buttons</h1>
      <p class="lead">Various button styles and states</p>
    </div>

    <Buttons />
  </div>
</template>

<script setup>
import Buttons from "../components/buttons/Buttons.vue";
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 2rem;
}
</style>
