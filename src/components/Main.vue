<template>
    <div class="main-wrapper">
        <Head/>
        <MainGrid>
            <MainGridItem v-for="({id, category, dateBegin, dateEnd, price, title}) in tasks.offers" :key="id" :category="category" :dateBegin="dateBegin"
                          :dateEnd="dateEnd" :price="price" :title="title"/>
        </MainGrid>
    </div>
</template>

<script>
    import Head from "@/components/Head";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Main",
        components: {MainGridItem, MainGrid, Head},
        methods: {
            ...mapActions(['getTasks']),
        },
        computed: {
            ...mapGetters({tasks: 'getTaskItems'}),
        },
        created() {
            this.getTasks();
        },
    }
</script>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>