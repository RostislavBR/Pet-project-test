<template>
    <div class="modal-container">
        <ModalForm/>
    </div>
</template>

<script>
    import ModalForm from "@/components/ModalForm";

    export default {
        name: "Modal",
        components: {ModalForm},
    }
</script>

<style lang="scss">
    .modal-container {
        position: absolute;
        top: 25%;
        right: 30%;
        width: 720px;
        min-height: 320px;
        display: flex;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
    }
</style>