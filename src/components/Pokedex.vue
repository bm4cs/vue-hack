<script>
export default {
    props: {
        pokemonList: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div>
        <h1>Pokedex</h1>
        <pre>{{ pokemonList }}</pre>
    </div>
</template>