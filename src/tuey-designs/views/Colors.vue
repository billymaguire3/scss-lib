<template>
  <div class="container">
    <div class="page-header mb-5">
      <h1>Colors</h1>
      <p class="lead">A carefully crafted color palette for your designs</p>
    </div>

    <Colors />
  </div>
</template>

<script setup>
import Colors from "../components/colors/Colors.vue";
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 2rem;
}
</style>
