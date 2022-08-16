<template>
    <span class="task-price">10 000</span>
</template>

<script>
    export default {
        name: "TaskPrice"
    }
</script>

<style lang="scss">
    .task-price {
        font-size: $fontSizePriceTag;
        font-weight: $bolderFontWeight;
        line-height: $priceTagLineHeight;
        flex-grow: 1;
    }
</style>