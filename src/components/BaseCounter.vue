<script>
export default {
  data: () => ({
    count: 10,
    incrementAmount: 8
  }),
  methods: {
    incrementCount() {
      this.count += this.incrementAmount
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log('newValue: ' + newValue + ' oldValue: ' + oldValue)
    }
  },
  mounted() {
    console.log("mounted()")
  }
}
</script>

<template>
  <div>
    <h1>BaseCounter.vue</h1>
    <p>{{ count }}</p>
    <button class="button" v-on:click="incrementCount">Increment Count</button>
    <p>^^^ this button is scope styled (PostCSS)</p>
    <div>
      <h3>{{ incrementAmount }}</h3>
      <label for="incrementAmount">Increment by:</label>
      <input type="number" v-model="incrementAmount" />
    </div>
  </div>
</template>

<style scoped>
button {
  border: 3px turquoise solid;
}
</style>