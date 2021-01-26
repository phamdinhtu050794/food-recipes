import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Recipes:{},
              // Recipe_Name : this.recipe.Recipe_Name,
              // Prepare : this.recipe.Prepare,
              // Preprocessing : this.recipe.Preprocessing,
              // Making : this.recipe.Making,
              // Know_how : this.recipe.Know_how,
  },
  mutations: {
    createRecipe(state, payload){
      console.log('in vue mutation createRecipe')
      var id = Object.keys(state.Recipes).length;
      payload.id = id;
      Vue.set(state.Recipes,id, payload)
    },
    updateRecipe(state, payload){
      console.log('in vue mutation edit recipes')
      Vue.set(state.Recipes, payload.id, payload)
    },
    deleteByRecipeId(state, id){
      console.log('in vue mutation delete recipes')
      Vue.delete(state.Recipes, id)

    },
    deleteAllRecipes(state){
      console.log('in vue mutation delete all recipes')
      state.Recipes = {};
    }
  },
  actions: {
    createRecipe(context, payload){
      console.log('in vue action crate recipe')
      context.commit('createRecipe', payload)
    },
    updateRecipe(context, payload){
      console.log('in vue action edit Recipes')
      context.commit('updateRecipe', payload)
    }, 
    deleteByRecipeId(context, id){
      console.log('action delete recipe');
      context.commit('deleteByRecipeId', id)
    },
    deleteAllRecipes(context){
      console.log('action delete all recipes');
      context.commit('deleteAllRecipes')
    }
  },
  modules: {
  },
  getters:{
    Recipes: state =>{
      return state.Recipes;
    },
    getRecipeById: (state) => (id) =>{
      if (id in state.Recipes){
        console.log('has id');
        return state.Recipes[id];
      }
      console.log('dose not have id')
    }
  }
})
