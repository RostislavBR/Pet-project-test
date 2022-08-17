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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 20px;
        margin: 0 auto;
    }
</style>