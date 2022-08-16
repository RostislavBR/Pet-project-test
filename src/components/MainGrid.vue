<template>
    <div class="grid">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "MainGrid"
    }
</script>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        margin: 0 auto;
    }
</style>