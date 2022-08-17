<template>
    <p class="task-end">{{ new Date(dateEnd).toLocaleDateString() }}</p>
</template>

<script>

    export default {
        name: "TaskEnd",
        props: ['dateEnd'],
    }
</script>

<style lang="scss">

</style>