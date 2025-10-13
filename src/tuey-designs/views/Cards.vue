<template>
  <div class="container">
    <div class="page-header mb-5">
      <h1>Cards</h1>
      <p class="lead">Flexible card components for content organization</p>
    </div>

    <Cards />
  </div>
</template>

<script setup>
import Cards from "../components/cards/Cards.vue";
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 2rem;
}
</style>
