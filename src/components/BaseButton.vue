<script>
export default {
    props: {
        text: String,
        icon: String
    }
}
</script>

<template>
    <button><slot /></button>
</template>

<style scoped>
button {
    margin-top: 10px;
}
</style>