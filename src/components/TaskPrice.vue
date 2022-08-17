<template>
    <span class="task-price">{{ price | numberFormat }} &#8381;</span>
</template>

<script>
    import numberFormat from "@/helpers/numberFormat";

    export default {
        name: "TaskPrice",
        props: ['price'],
        filters: {
            numberFormat
        }
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