<template>
    <h2 class="task-title">{{title}}</h2>
</template>

<script>
    export default {
        name: "TaskTitle",
        props: ['title']
    }
</script>

<style lang="scss">
    .task-title {
        font-size: $middleTitle;
        font-weight: $normalFontWeight;
        line-height: $normalLineHeight;
        margin: 0 0 20px 0;
    }
</style>