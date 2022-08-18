<template>
    <div class="modal-select-wrapper">
        <p class="modal-select-default" @click="onClickDefaultFilter">{{defaultSort}}</p>
        <div class="modal-options" @click="onClickFilter">
            <p class="modal-options-items" v-for="({id, title}) in categories" :key="id"
               @click="selectCategory(title, id)">
                {{title}}
            </p>
        </div>
    </div>
</template>

<script>
    import {gsap} from "gsap";

    export default {
        name: "ModalSelect",
        props: ['categories'],
        data() {
            return {
                defaultSort: 'Введите категорию',
                categoryId: null,
            }
        },
        methods: {
            onClickDefaultFilter() {
                gsap.to('.modal-options', {
                    duration: .4,
                    delay: .2,
                    opacity: 1,
                    pointerEvents: 'all',
                })
            },
            onClickFilter() {
                gsap.to('.modal-options', {
                    duration: .2,
                    delay: .2,
                    opacity: 0,
                    pointerEvents: 'none',
                });
            },
            selectCategory(title, id) {
                switch (title) {
                    case "Аренда персонала":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Аренда рабочих мест":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Бухгалтерские услуги":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Мелкие поручения":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Охрана и детективы":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Поиск работы, услуги рекрутера":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    case "Продвижение, оптимизация, SMM":
                        this.defaultSort = title;
                        this.categoryId = id;
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style lang="scss">
    .modal-select-wrapper {
        position: relative;
        max-width: 200px;
        cursor: pointer;

        .modal-select-default {
            font-size: $formFontSize;
            text-align: center;
            background: $whiteColor;
            border-radius: $borderRadius;
            border: none;
            box-shadow: $inputShadow;
            padding: 10px;

            &:after {
                content: '';
                padding: 0 5px;
                margin: 0 0 0 4px;
                background-image: url("../image/arrow.svg");
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        .modal-options {
            position: absolute;
            top: 40px;
            right: 0;
            width: 100%;
            background: $whiteColor;
            border: none;
            border-radius: $borderRadius;
            box-shadow: $inputShadow;
            z-index: 100;
            opacity: 0;
            pointer-events: none;

            .modal-options-items {
                font-size: $formFontSize;
                text-align: center;
                padding: 11px 0;
                border-bottom: 1px solid rgba(180, 180, 180, 0.1);

                &:last-child {
                    border: none;
                }
            }
        }
    }
</style>