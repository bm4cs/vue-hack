<script setup>
import Counter from "../components/BaseCounter.vue"
import UserCard from "../components/UserCard.vue"
import BaseButton from "../components/BaseButton.vue"
import Pokedex from "../components/Pokedex.vue"

import { computed, reactive, ref, onBeforeUnmount } from "vue";

// data
// ref is reactive data  
// reactive is an alternative to ref() - convenient in that you dont have to .value unpack
const regionName = ref('kanto'); 
const customState = reactive({
  currentPage: "Home",
  colorPreference: 'papayawhip',
  elementType: 'fire',
  userData: {
    name: "Ben Mac",
    preferredFramework: "vue",
    favoriteFood: "Poke bowl",
    favoriteNumbers: [7, 21, 32]
  },
  characters: [
    {
      name: "Joe McMillan",
      id: "6a887cd2-f0bf-4321-b192-92016f82a883",
      list: [1, 2, 3],
    },
    {
      name: "Gordon Clark",
      id: "8d14d90b-2d47-473e-8293-d5c324111d0d",
      list: [1, 2, 3],
    },
    {
      name: "Donna Clark",
      id: "cd806d65-2309-4625-9104-dcd636cd79b5",
      list: [1, 2, 3],
    },
    {
      name: "Cameron Howe",
      id: "00c939cd-fbf4-46d0-8e61-0bc2ce8a5332",
      list: [1, 2, 3],
    },
  ]
});

// computed
const regionNameAllCaps = computed(
  () => {
    return regionName.value.toUpperCase();
  }
)
const elementTypeAllLower = computed(
  () => {
    return customState.elementType.toLowerCase();
  }
)

// methods
const changeName = () => {
  this.userData.name = "Rob Pike"
}
const changeRegion = () => {
  this.regionName = "Hoenn";
}
const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=128&offset=0")
    .then((response) => response.json())
    .then((data) => data.results)

// return {
//   elementTypeAllLower,
//   pokedex,
//   regionName,
//   regionNameAllCaps
// };

onBeforeUnmount(() => {
  console.log('HomePage.vue onBeforeUnmount')
})
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <p>
      Pick a color: <input type="color" v-model="customState.colorPreference" /> <b>{{ customState.colorPreference }}</b>
    </p>
    <p>^^^ this color is CSS v-bind(), tracking the reactive data to the background-color</p>

    <div class="wrapper">
      <BaseButton>Hoot hoot 🦉</BaseButton>
      <UserCard :user="customState.userData" @change-name="changeName()" />
      <Counter />
      <Pokedex :pokemonList="pokedex" :regionName="regionName" @change-region="changeRegion()" />
    </div>
  </main>
  <footer>
    <p>{{ regionNameAllCaps }} | {{ elementTypeAllLower }}</p>
  </footer>
</template>

<style>
main {
  background-color: v-bind(colorPreference);
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
