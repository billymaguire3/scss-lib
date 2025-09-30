<template>
  <div class="container">
    <div class="page-header mb-5">
      <h1>Grid System</h1>
      <p class="lead">Responsive grid system for perfect layouts</p>
    </div>

    <GridSystem />
  </div>
</template>

<script setup>
import GridSystem from "../components/grid/GridSystem.vue";
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 2rem;
}
</style>
