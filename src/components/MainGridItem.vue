<template>
    <div class="grid-item">
        <TaskTitle :title="title"/>
        <TaskCategory :category="category"/>
        <TaskPrice :price="price"/>
        <template v-if="dateEnd !== null">
            <TaskEnd :dateEnd="dateEnd"/>
        </template>
    </div>
</template>

<script>
    import TaskTitle from "@/components/TaskTitle";
    import TaskPrice from "@/components/TaskPrice";
    import TaskCategory from "@/components/TaskCategory";
    import TaskEnd from "@/components/TaskEnd";

    export default {
        name: "MainGridItem",
        props: ['id', 'category', 'dateBegin', 'dateEnd', 'price', 'title'],
        components: {TaskEnd, TaskCategory, TaskPrice, TaskTitle}
    }
</script>

<style lang="scss">
    .grid-item {
        display: flex;
        flex-direction: column;
        min-width: 200px;
        min-height: 300px;
        border-radius: $borderRadius;
        box-shadow: $boxShadow;
        padding: 20px;
    }
</style>