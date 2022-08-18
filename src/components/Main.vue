<template>
    <div class="main-wrapper">
        <Head :categories="categories"/>

        <div class="scroll-wrapper">
            <div v-infinite-scroll="fetchData" class="scroll-task" infinite-scroll-immediate-check="false">
                <MainGrid>
                    <MainGridItem v-for="({id, category, dateBegin, dateEnd, price, title}) in tasks" :key="id"
                                  :category="category" :dateBegin="dateBegin"
                                  :dateEnd="dateEnd" :price="price" :title="title"/>
                </MainGrid>
            </div>
        </div>
        <Modal/>
    </div>
</template>

<script>
    import Vue from "vue";
    import Head from "@/components/Head";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";
    import {mapActions, mapGetters} from "vuex";
    import Modal from "@/components/Modal";
    import infiniteScroll from 'vue-infinite-scroll';

    Vue.use(infiniteScroll)

    export default {
        name: "Main",
        data() {
            return {
                pagingAfter: 0,
                pagingCount: 10,
            }
        },
        components: {Modal, MainGridItem, MainGrid, Head},
        directives: {infiniteScroll},
        methods: {
            ...mapActions(['getCategory', 'getTasks']),
            fetchData() {
                console.log('fetchData')
                this.getTasks(this.pagingAfter += 10);
            }
        },
        computed: {
            ...mapGetters({categories: 'getCategoryItems', tasks: 'getTaskItems',}),
        },
        created() {
            this.getCategory();
            this.getTasks(0);
        },
    }
</script>

<style lang="scss">
    .main-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .scroll-wrapper {
        overflow-y: scroll;
        height: 800px;
    }
</style>