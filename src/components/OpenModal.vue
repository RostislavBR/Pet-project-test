<template>
    <button class="open-modal-button" @click="openModal" ref="open">Добавить задачу</button>
</template>

<script>
    import gsap from "gsap";

    export default {
        name: "OpenModal",
        methods: {
            openModal() {
                gsap.to('.container', {
                    duration: .5,
                    background: '#000000c2',
                    pointerEvents: 'none',
                    onStart() {
                      gsap.to('.head-container', {
                          duration: .3,
                          opacity: 0,
                      })
                      gsap.to('.open-modal-button', {
                          duration: .3,
                          opacity: 0,
                          pointerEvents: 'none',
                      });
                      gsap.to('.modal-container', {
                         duration: .3,
                         opacity: 1,
                         pointerEvents: 'all',
                      });
                    },
                })
            }
        }
    }
</script>

<style lang="scss">
    .open-modal-button {
        font-size: 20px;
        border: none;
        color: $greenColor;
        background: none;
        cursor: pointer;
        outline: none;
        &:after {
            content: '';
            background-image: url("../image/premium-icon-plus-4315609.png");
            background-repeat: no-repeat;
            background-position: 0 7px;
            padding: 0 8px;
            margin: 0 0 0 5px;
        }
    }
</style>