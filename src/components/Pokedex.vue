<script>
export default {
    props: {
        pokemonList: {
            type: Array,
            required: true
        },
        regionName: {
            type: String,
            required: false
        }
    },
    emits: ['change-region']
}
</script>

<template>
    <div>
        <h1>Pokedex</h1>
        <h2>{{ regionName }}</h2>
        <button @click="$emit('change-region')">Change region</button>
        <pre>{{ pokemonList }}</pre>
    </div>
</template>