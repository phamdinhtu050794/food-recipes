<template>
  <div class="edit-container">
    <div>
      <h1>Edit Recipe</h1>
    </div>

    <div v-if="recipe != null">
      <div class="input">
        <textarea v-model="recipe.Recipe_Name" placeholder="edit recipe name" />
      </div>
      <div class="input">
        <textarea v-model="recipe.Prepare" placeholder=" edit prepare" />
      </div>
      <div class="input">
        <textarea
          v-model="recipe.Preprocessing"
          placeholder="edit preprocessing"
        />
      </div>
      <div class="input">
        <textarea v-model="recipe.Making" placeholder="edit making" />
      </div>
      <div class="input">
        <textarea v-model="recipe.Know_how" placeholder="edit know how" />
      </div>
      <div class="button">
        <button @click="editRecipe"><h3>Save</h3></button>
        <button class="button-back" @click="back"><h3>Cancel</h3></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditRecipePage",
  data() {
    return {
      recipe: {
        Recipe_Name: "",
        Prepare: "",
        Preprocessing: "",
        Making: "",
        Know_how: "",
        id: "",
      },
    };
  },
  mounted() {
    console.log(
      "recipes" +
        this.$store.getters.getRecipeById(this.$route.params.id).Recipe_Name
    );
    this.recipe = this.$store.getters.getRecipeById(this.$route.params.id);
  },
  methods: {
    editRecipe() {
      console.log("edit Recipes");
      var payload = this.payload;
      payload = {
        Recipe_Name: this.recipe.Recipe_Name,
        Prepare: this.recipe.Prepare,
        Preprocessing: this.recipe.Preprocessing,
        Making: this.recipe.Making,
        Know_how: this.recipe.Know_how,
        id: this.recipe.id,
      };
      this.$store.dispatch("updateRecipe", payload);
      this.back();
    },
    back() {
      this.$router.push({ name: "Home" });
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.edit-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: azure;
}
.input textarea {
  width: 50%;
  height: 50px;
}
.button button {
  width: 100px;
  height: 50px;
  background-color: rgb(0, 153, 255);
}
</style>
