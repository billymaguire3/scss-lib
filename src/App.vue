<script setup>
import Typography from "./components/typography/Typography.vue";
import Buttons from "./components/buttons/Buttons.vue";
import Cards from "./components/cards/Cards.vue";
import Colors from "./components/colors/Colors.vue";
import GridSystem from "./components/grid/GridSystem.vue";
import NavBar from "./components/navbar/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="container">
    <Typography />
    <hr class="mt-4 mb-4" />
    <Cards />
    <hr class="mt-4 mb-4" />
    <Colors />
    <hr class="mt-4 mb-4" />
    <Buttons />
    <hr class="mt-4 mb-4" />
    <GridSystem />
  </div>
</template>

<style scoped></style>
