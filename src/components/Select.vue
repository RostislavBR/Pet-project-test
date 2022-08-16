<template>
    <div class="select-wrapper">
        <p class="select-default">text</p>
        <options class="options">
            <p class="options-items" v-for="items in 6" :key="items.id">
                text
            </p>
        </options>
    </div>
</template>

<script>
    export default {
        name: "Select"
    }
</script>

<style lang="scss">
    .select-wrapper {
        position: relative;
        width: 120px;
        background: $formBackground;

        .select-default,
        options {
            font-size: $formFontSize;
            font-weight: $normalFontWeight;
            text-align: center;
            color: $greyColor;
            border-radius: $borderRadius;
            border: none;
            box-shadow: $inputShadow;
        }

        .select-default {
            padding: 10px 0;
        }

        .options {
            position: absolute;
            top: 40px;
            right: 0;
            width: 100%;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            .options-items {
                padding: 10px 0;
            }
        }
    }
</style>