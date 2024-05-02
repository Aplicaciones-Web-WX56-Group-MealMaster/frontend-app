<script setup>
import { ref } from 'vue';

// Define your tags
const foodTypes = ref(['Breakfast', 'Lunch', 'Dinner', 'Snack']);
const difficulties = ref(['Easy', 'Intermediate', 'Hard']);
const cookingtimes = ref(['15 minutes', '30 minutes', 'Above an hour']);
const cuisineTypes = ref(['Peruvian', 'American', 'French', 'Chinese', 'Italian', 'Indian', 'Mexican', 'Thai', 'Japanese']);
const pricing = ref(['$', '$$', '$$$']);

// Track which tags are selected
const selectedFoodType = ref(null);
const selectedDifficulty = ref(null);
const selectedCookingTimes = ref(null);
const selectedCuisineType = ref(null);
const selectedPricing = ref(null);

</script>

<template>
  <div class="meal-selection">
    <div class="tag-filters filter-section">
      <h4>Filter by</h4>
      <h4>Meal Time</h4>
      <div v-for="(tag, index) in foodTypes" :key="index" class="tag">
        <div class="square" :class="{ 'square-selected': selectedFoodType === tag }" @click="selectedFoodType = tag"></div>
        <span>{{ tag }}</span>
      </div>
      <h4>Pricing</h4>
      <div v-for="(tag, index) in pricing" :key="index" class="tag">
        <div class="square" :class="{ 'square-selected': selectedPricing === tag }" @click="selectedPricing = tag"></div>
        <span>{{ tag }}</span>
      </div>
      <h4>Difficulty</h4>
      <div v-for="(tag, index) in difficulties" :key="index" class="tag">
        <div class="square" :class="{ 'square-selected': selectedDifficulty === tag }" @click="selectedDifficulty = tag"></div>
        <span>{{ tag }}</span>
      </div>
      <h4>Cooking Time</h4>
      <div v-for="(tag, index) in cookingtimes" :key="index" class="tag">
        <div class="square" :class="{ 'square-selected': selectedCookingTimes === tag }" @click="selectedCookingTimes = tag"></div>
        <span>{{ tag }}</span>
      </div>
      <h4>Type of Cuisine</h4>
      <div v-for="(tag, index) in cuisineTypes" :key="index" class="tag">
        <div class="square" :class="{ 'square-selected': selectedCuisineType === tag }" @click="selectedCuisineType = tag"></div>
        <span>{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-section {
  background-color: #f0f0f0; /* Light gray background */
  width: 100%; /* Takes up 25% of the screen width */
  height: 100vh; /* Takes up the full height of the screen */
  padding: 20px; /* Some padding */
  box-sizing: border-box; /* So that padding doesn't increase the width */
}

.square {
  width: 20px; /* Width of the square */
  height: 20px; /* Height of the square */
  border: 1px solid #000; /* Black border */
  display: inline-block; /* Align with the text */
  margin-right: 10px; /* Some margin to the right */
}

.square-selected {
  background-color: #4CAF50; /* Green background */
}
</style>