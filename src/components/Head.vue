<template>
    <div class="head-container">
        <HeadTitle/>
        <OpenModal/>
        <Select :categories="categories"/>
    </div>
</template>

<script>
    import HeadTitle from "@/components/HeadTitle";
    import Select from "@/components/Select";
    import OpenModal from "@/components/OpenModal";

    export default {
        name: "Head",
        props: ['categories'],
        components: {OpenModal, Select, HeadTitle}
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