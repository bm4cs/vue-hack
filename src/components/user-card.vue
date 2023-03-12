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
        <h1>User</h1>
        <p>Name:  {{ user.name }}</p>
        <p>Favorite food: {{ user.favoriteFood }}</p>
        <button @click="$emit('change-name')">Change Name</button>
    </div>
</template>
