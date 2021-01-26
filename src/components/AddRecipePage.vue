<template>
  <div class="addrecipe-container">
    <div>
      <h1>Add Recipe Page</h1>
    </div>
    <div class="body">
      <div ><textarea v-model="recipe.Recipe_Name" placeholder="add name recipe" />
      </div>
      <div ><textarea v-model="recipe.Prepare" placeholder="add prepare" />
      </div>
      <div ><textarea v-model="recipe.Preprocessing" placeholder="add preprocessing" />
      </div>
      <div ><textarea v-model="recipe.Making" placeholder="add making" />
      </div>
      <div ><textarea v-model="recipe.Know_how" placeholder="add know_how" />
      </div>
    </div>
    <div class="button">
      <button @click="createRecipe"><h3>Save</h3></button>
      <button @click="back"><h3>Cancel</h3></button>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: "AddRecipePage",
  data(){
      return {
          recipe:{
              Recipe_Name: null,
              Prepare : null,
              Preprocessing : null,
              Making : null,
              Know_how : null,

          }
      }
  },
  methods:{
      createRecipe(){
          console.log("in add recipe page")
          var payload = {
              Recipe_Name : this.recipe.Recipe_Name,
              Prepare : this.recipe.Prepare,
              Preprocessing : this.recipe.Preprocessing,
              Making : this.recipe.Making,
              Know_how : this.recipe.Know_how,
          };
          this.$store.dispatch('createRecipe', payload);
          this.back()  ;
      },
        back(){
             this.$router.push({ name: "Home" });
        }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.addrecipe-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.body{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.body textarea{
    width: 70%;
    height: 100px;
}
.button{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>
