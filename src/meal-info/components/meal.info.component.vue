<script>
import { ref } from 'vue'
export default {
  name: 'NutritionalInformation',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      name: "receta de fosita raton",
      nutrition: {
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
      },
      features :{
        cookingTime: 0,
        difficulty: '',
        servingSize: 0,
      },
      videoUrl :'',
      imageUrl: '/images.jpeg',
    }
  },
  methods:{
    updateRecipeData(data){
      this.name = data.name;
      this.nutrition = data.nutrition;
      this.features = data.features;
      this.imageUrl = data.imageUrl;
      this.videoUrl = data.videoUrl;
    }
  },
  created() {
    this.updateRecipeData(this.recipe)
  },
  watch: {
    recipe: {
      handler(newRecipe) {
        // Actualiza los datos del componente cuando la prop recipe cambie
        this.updateRecipeData(newRecipe);
      },
      deep: true // Observa cambios profundos en la prop recipe
    }
  },
}
</script>

<template>
  <div class="main-div">
    <div class="container">
      <Card>
        <template #header>
          <img :src="imageUrl" alt="Meal image" class="main-image"/>
        </template>
        <template #title>{{name}}</template>
        <template #content>
          <div class="content">
            <card>
              <template #subtitle>
                Nutritional Information
              </template>
              <template #content>
                <div class="line">
                  <div class="line-start">
                    Calories:
                  </div>
                  <div class="line-end">
                    {{ nutrition.calories }}
                  </div>
                </div>
                <div class="line">
                  <div class="line-start">
                    Proteins:
                  </div>
                  <div class="line-end">
                    {{ nutrition.proteins }}
                  </div>
                </div>
                <div class="line">
                  <div class="line-start">
                    Fats:
                  </div>
                  <div class="line-end">
                    {{ nutrition.fats }}
                  </div>
                </div>
                <div class="line">
                  <div class="line-start">
                    Carbohydrates:
                  </div>
                  <div class="line-end">
                    {{ nutrition.carbs }}
                  </div>
                </div>
              </template>
            </card>
            <card>
              <template #subtitle>
                Recipe Features
              </template>
              <template #content>
                <div class="line">
                  <div class="line-start">
                    Cooking Time:
                  </div>
                  <div class="line-end">
                    {{ features.cookingTime }}
                  </div>
                </div>
                <div class="line">
                  <div class="line-start">
                    Difficulty Level:
                  </div>
                  <div class="line-end">
                    {{ features.difficulty }}
                  </div>
                </div>
                <div class="line">
                  <div class="line-start">
                    Serving Size:
                  </div>
                  <div class="line-end">
                    {{ features.servingSize }}
                  </div>
                </div>
              </template>
            </card>
          </div>
        </template>
        <template #footer>
          <!--
          <iframe width="100%"
                  height="315"
                  :src="videoUrl" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
          </iframe>
          -->
          <div>
            <center>
              Video:
              <a :href="videoUrl">
                {{ name }}
              </a>
            </center>

          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<style>
div {
  color: #263D42;
}
a{
  color: #7CE577;
}
.main-div{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
.line{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (max-width: 449px) {
  .main-image{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  .container{
    width: 92%;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 450px) {
  .main-image{
    width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  .container{
    width: 400px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>