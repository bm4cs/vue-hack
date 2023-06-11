<script>
export default {
    // props = A-
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    emits: ['change-name']
}
</script>

<template>
    <div>
        <h1>UserCard.vue</h1>
        <p>Name: {{ user.name }}</p>
        <p>Favorite food: {{ user.favoriteFood }}</p>
        <button :class="$style.button" @click="$emit('change-name')">Change Name</button>
        <p>^^^ this button is styled with CSS Modules</p>
    </div>
</template>

<style module>
.button {
    border: 3px solid greenyellow !important;
}
</style>