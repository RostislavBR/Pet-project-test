<template>
    <div class="main-wrapper">
        <Head/>
        <MainGrid>
            <MainGridItem v-for="items in 6" :key="items.id"/>
        </MainGrid>
    </div>
</template>

<script>
    import Head from "@/components/Head";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";

    export default {
        name: "Main",
        components: {MainGridItem, MainGrid, Head}
    }
</script>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>