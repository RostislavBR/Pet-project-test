<template>
    <div class="select-wrapper">
        <p class="select-default" @click="onClickDefaultFilter">{{defaultSort}}</p>
        <div class="options" @click="onClickFilter">
            <p class="options-items" v-for="({id, title}) in categories" :key="id" @click="selectOption(title)">
                {{title}}
            </p>
        </div>
    </div>
</template>

<script>
    import {gsap} from "gsap";
    import {mapMutations} from "vuex";

    export default {
        name: "Select",
        props: ['categories'],
        data() {
            return {
                defaultSort: 'По умолчанию'
            }
        },
        methods: {
            ...mapMutations(['sortTasks']),
            onClickDefaultFilter() {
                gsap.to('.options', {
                    duration: .4,
                    delay: .2,
                    opacity: 1,
                    pointerEvents: 'all',
                })
            },
            onClickFilter() {
                gsap.to('.options', {
                    duration: .2,
                    delay: .2,
                    opacity: 0,
                    pointerEvents: 'none',
                });
            },
            selectOption(title) {
                switch (title) {
                    case "Аренда персонала":
                        this.defaultSort = title;
                        break;
                    case "Аренда рабочих мест":
                        this.defaultSort = title;
                        break;
                    case "Бухгалтерские услуги":
                        this.defaultSort = title;
                        break;
                    case "Мелкие поручения":
                        this.defaultSort = title;
                        break;
                    case "Охрана и детективы":
                        this.defaultSort = title;
                        break;
                    case "Поиск работы, услуги рекрутера":
                        this.defaultSort = title;
                        break;
                    case "Продвижение, оптимизация, SMM":
                        this.defaultSort = title;
                        break;
                    default:
                        console.log('default')
                        break;
                }
                this.sortTasks(title);
            },
        },
    }
</script>

<style lang="scss">
    .select-wrapper {
        position: relative;
        width: 121.49px;
        background: $formBackground;
        cursor: pointer;

        .select-default {
            font-size: $formFontSize;
            text-align: center;
            color: $greyColor;
            border-radius: $borderRadius;
            border: none;
            box-shadow: $inputShadow;
            padding: 10px 0;

            &:after {
                content: '';
                padding: 0 5px;
                margin: 0 0 0 4px;
                background-image: url("../image/arrow.svg");
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        .options {
            position: absolute;
            top: 40px;
            right: 0;
            width: 100%;
            background: $formBackground;
            border: none;
            border-radius: $borderRadius;
            box-shadow: $inputShadow;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
        }

        .options-items {
            font-size: $formFontSize;
            text-align: center;
            color: $greyColor;
            padding: 11px 0;
            border-bottom: 1px solid rgba(180, 180, 180, 0.1);

            &:last-child {
                border: none;
            }
        }
    }
</style>