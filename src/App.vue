<script>
import mealInfoComponent from "./meal-info/components/meal.info.component.vue";
import {getMealsList} from "./meal-info/services/mealInfo.service.js";
export default {
  components: {mealInfoComponent},
  data() {
    return{
      recipes: [],
      recipeId: -1,
      error: false,
      errorText: "",
      selectedRecipe: null
    }
  },
  methods:{
    updateMealsList(){
      getMealsList().then(response => {
        this.recipes = response;
      }).catch(error => {
        this.errorText = error.toString();
        this.error = true;
      })
    },
    mealSelected(newId){
      this.recipeId = newId.value;
      this.selectedRecipe = this.recipes.find(recipe => recipe.id === this.recipeId)
    }
  },
  created() {
    this.updateMealsList();
  },
}
</script>
<template>
  <div class="body">
    <div v-if="!error" class="center">
      <div class="cutter">
        <Dropdown v-model="recipeId" :options="recipes" optionLabel="name" option-value="id" placeholder="Elige una receta" class="w-full md:w-14rem" :disabled="recipes.length < 1" @change="mealSelected"/>
      </div>
      <meal-info-component :recipe="selectedRecipe" v-if="selectedRecipe !== undefined && recipeId > -1"/>
    </div>
    <div v-else>
      <card>
        <template #title>
          Lo sentimos, ocurrio un error al obtener los datos de la comida:
        </template>
        <template #subtitle>
          {{errorText}}
        </template>
      </card>
    </div>
  </div>
</template>
<style scoped>
.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.body{
  display: flex;
  flex-direction: column;
  background-color: #F6F8FF;
  padding: 1.5rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>