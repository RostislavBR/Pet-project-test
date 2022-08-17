<template>
    <div class="main-wrapper">
        <Head :category="category"/>
        <MainGrid>
            <MainGridItem v-for="({id, category, dateBegin, dateEnd, price, title}) in tasks.offers" :key="id"
                          :category="category" :dateBegin="dateBegin"
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
            ...mapActions(['getCategory', 'getTasks']),
        },
        computed: {
            ...mapGetters({category: 'getCategoryItems', tasks: 'getTaskItems',}),
        },
        created() {
            this.getCategory();
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