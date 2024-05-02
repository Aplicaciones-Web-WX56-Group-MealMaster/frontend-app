<script setup>
import MealFilter from "./meal-selection/Components/MealFilter.vue";
import MealCard from "./meal-selection/Components/MealCard.vue";
</script>

<template>
  <div class="app-container">
    <MealFilter></MealFilter>
    <MealCard></MealCard>
  </div>
</template>

<style scoped>
.app-container {
  display: flex; /* Align items in a row */
  align-items: flex-start; /* Align items at the start */
}
</style>