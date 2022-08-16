<template>
    <div class="head-container">
        <HeadTitle/>
        <Select/>
    </div>
</template>

<script>
    import HeadTitle from "@/components/HeadTitle";
    import Select from "@/components/Select";

    export default {
        name: "Head",
        components: {Select, HeadTitle}
    }
</script>

<style lang="scss">
    .head-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 0 50px 0;
    }
</style>