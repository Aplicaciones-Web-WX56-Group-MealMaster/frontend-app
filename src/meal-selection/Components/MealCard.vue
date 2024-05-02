<template>
  <div class="meal-card-container">
    <div v-for="(meal, index) in meals" :key="index" class="meal-card">
      <img :src="meal.image" alt="Meal" class="meal-image" />
      <div class="meal-info">
        <h2>{{ meal.title }}</h2>
        <div class="meal-tags">
          <span v-for="(tag, index) in meal.tags" :key="index" class="meal-tag" :class="getTagColor(tag)">{{ tag }}</span>
        </div>
        <Button class="info-button" @click="seeMoreInfo(meal)" icon="pi pi-info">More info</Button>
        <Button class="add-button" @click="addMeal(meal)" icon="pi pi-plus"></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button'
import image1 from '../../images/ChickenParmesan.png';
import image2 from '../../images/vegetablestirfury.png';
import image3 from '../../images/beeftacos.png';

// Define your meal data
const meals = ref([
  {
    title: 'Chicken Parmesan',
    image: image1,
    tags: ['Dinner', 'Intermediate', 'Above an hour', 'Italian'],
    description: 'A classic Italian dish prepared with chicken and Parmesan cheese.'
  },
  {
    title: 'Vegetable Stir Fry',
    image: image2,
    tags: ['Lunch', 'Easy', '15 minutes', 'Chinese'],
    description: 'A quick and healthy dish full of colorful vegetables.'
  },
  {
    title: 'Beef Tacos',
    image: image3,
    tags: ['Lunch', 'Easy', '15 minutes', 'Mexican'],
    description: 'Delicious tacos filled with seasoned beef and topped with fresh salsa.'
  }
]);

// Methods
const addMeal = (meal) => {
  // Add meal to user's list
};

const seeMoreInfo = (meal) => {
  // Show more info about the meal
};

const getTagColor = (tag) => {
  if (['$$$', 'Hard', 'Above an hour'].includes(tag)) {
    return 'tag-red';
  } else if (['$$', 'Intermediate', '30 minutes'].includes(tag)) {
    return 'tag-orange';
  } else if (['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Peruvian', 'American', 'French', 'Chinese', 'Italian', 'Indian', 'Mexican', 'Thai', 'Japanese'].includes(tag)) {
    return 'tag-gray';
  } else {
    return 'tag-green';
  }
};
</script>

<style scoped>
.meal-card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 75%; /* Takes up the remaining 75% of the screen width */
}

.meal-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1vh; /* No space between cards */
  border: 1px solid #000; /* Add a border to each card */
}

.meal-image {
  width: 30%;
  object-fit: cover;
}

.meal-info {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 50px; /* Adjust the horizontal padding */
  display: flex; /* Add this */
  justify-content: center; /* Add this */
  align-items: center; /* Add this */
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  width: 1vh; /* Set a specific width */
  box-sizing: border-box; /* Ensure padding doesn't affect the final width */
}

.info-button:hover {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
}

.add-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.meal-tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 12px; /* Make the tags oval-shaped */
  color: #fff; /* White text */
  margin-right: 5px;
}

.tag-red {
  background-color: red;
}

.tag-orange {
  background-color: orange;
}

.tag-green {
  background-color: green;
}

.tag-gray {
  background-color: gray;
}

@media (max-width: 768px) {
  .meal-card-container {
    width: 100%;
  }

  .meal-image {
    width: 50%;
  }
}
</style>