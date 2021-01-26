<template>
  <div class="home">
    <div class="title">
      <h1>Food Recipe</h1>
    </div>
    <div class="body">
      <div class="table-header">
        <div class="cell">
          <h3>The Name Of Food</h3>
        </div>
        <div class="cell">
          <h3>Prepare</h3>
        </div>
        <div class="cell">
          <h3>Preprocessing</h3>
        </div>
        <div class="cell">
          <h3>Making</h3>
        </div>
        <div class="cell">
          <h3>Know-how</h3>
        </div>
         <div class="cell">
          <h3>Edit </h3>
        </div>
         <div class="cell">
          <h3>Delete</h3>
        </div>
      </div>
      <div v-for="item in recipes" :key="item.id" class="table table-header">
        <div style="white-space: pre-line;" class="cell">{{ item.Recipe_Name }}</div>
        <div style="white-space: pre-line;" class="cell">{{ item.Prepare }}</div>
        <div style="white-space: pre-line;" class="cell">{{ item.Preprocessing }}</div>
        <div style="white-space: pre-line;" class="cell">{{ item.Making }}</div>
        <div style="white-space: pre-line;" class="cell">{{ item.Know_how }}</div>

        <div class="cell">
          <router-link :to="{ name: 'EditRecipePage', params:{id: item.id} }">
            <button><h2>Edit</h2></button></router-link
          >
        </div>
        <div class="cell">
          <button @click="deleteRecipes(item.id)"><h3>Delete</h3></button>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>
        <router-link :to="{ name: 'AddRecipePage', params: {} }">
          <button>
            <h2>Add Recipe</h2>
          </button></router-link
        >
      </div>
      <div>
        <button @click="deleteAllRecipes"><h2>Delete All Recipe</h2></button>
      </div>
    </div>
  </div>
</template>

<script>
import AddRecipePage from "@/components/AddRecipePage.vue";
import EditRecipePage from "@/components/EditRecipePage.vue";

import store from '../store/index'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    AddRecipePage,
    EditRecipePage,
  },
  data() {
    return {
      Recipes: {},
      showAddRecipe: false,
    };
  },
  computed: {
    recipes() {
      console.log("getting recipes... computed homedecipe");
      return this.$store.getters.Recipes;
    },
    createRecipe(){
      console.log('in recipes header')
      var payload = {
        Recipe_Name:'',
        Prepare: '',
        Preprocessing: '',
        Making:'',
        Know_how:'',
      };
      this.$store.dispatch('createRecipe', payload);
    },
   
  },
  methods: {
     deleteRecipes(id){
      console.log('delete recipes' + id);
      this.$store.dispatch("deleteByRecipeId", id)
    },
    deleteAllRecipes(){
      console.log('delete all recipes');
      this.$store.dispatch('deleteAllRecipes')
    },
    goto_addrecipe() {
      this.$router.push({
        name: "AddRecipePage",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // text-align: center;
}
.title {
  font-size: 50px;
  color: red;
}
// .body {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   padding: 10%;
//   padding-top: 0%;
//   padding-bottom: 0%;
// }
.table-header{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cell{
  text-align: center;
  width: 20%;
  height: 50px;
}
.body div {
  border: 0.1px solid black;
}

.footer-body {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 150px;
}
.table{
  display: flex;
  flex-direction: row;
  border: 0.5px solid gray;
}
</style>
