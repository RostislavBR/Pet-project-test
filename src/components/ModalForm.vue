<template>
    <div class="form-wrapper">
        <button class="close-button" @click="closeModal"></button>
        <form class="form" @submit="submit">
            <ModalTitle/>
            <div class="form-title">
                <label class="label label-title">
                    <p class="form-description">
                        Введите название задачи
                    </p>
                    <input type="text" class="input title-input" placeholder="Введите название задачи" v-model="title">
                    <span class="error" v-if="$v.title.$invalid && submitError">Поле является обязательным</span>
                </label>
            </div>
            <div class="form-price">
                <label class="label label-price">
                    <p class="form-description">
                        Введите оплату за выполнение задачи
                    </p>
                    <the-mask type="text" class="input price-input" placeholder="Введите оплату за выполнение"
                              :mask="['####','# ###','## ###','### ###']" v-model="price"></the-mask>
                    <span class="error" v-if="$v.price.$invalid && submitError">Поле является обязательным</span>
                </label>
            </div>
            <div class="form-date-begin">
                <label class="label date-label">
                    <p class="form-description">
                        Введите дату в которую необходимо начать
                    </p>
                    <DatePicker class="input date-begin-input date" type="date" format="DD-MM-YYYY"
                                placeholder="Выберите дату" v-model="dateBegin"></DatePicker>
                    <span class="error" v-if="$v.dateBegin.$invalid && submitError">Поле является обязательным</span>
                </label>
            </div>
            <div class="form-date-end">
                <label class="label date-label">
                    <p class="form-description">
                        Введите дату в которую необходимо уложиться
                    </p>
                    <DatePicker class="input date-end-input date" type="date" format="DD-MM-YYYY"
                                placeholder="Выберите дату" v-model="dateEnd"></DatePicker>
                    <span class="error" v-if="$v.dateEnd.$invalid && submitError">Поле является обязательным</span>
                </label>
            </div>
            <div class="form-category">
                <label class="label category-label">
                    <p class="form-description">
                        Введите категорию
                    </p>
                    <ModalSelect v-model="category" :categories="categories"/>
                    <span class="error" v-if="$v.category.$invalid && submitError">Поле является обязательным</span>
                </label>
            </div>
            <div class="button-wrapper">
                <button class="form-button" type="submit" :disabled="$v.$invalid" @click="closeModalAfterSubmit">
                    Добавить задачу
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import {required, maxLength, minLength, between} from 'vuelidate/lib/validators';
    import {TheMask} from 'vue-the-mask';
    import gsap from "gsap";
    import ModalSelect from "@/components/ModalSelect";
    import ModalTitle from "@/components/ModalTitle";

    export default {
        name: "ModalForm",
        data() {
            return {
                // id: null,
                dateBegin: '',
                dateEnd: '',
                title: '',
                category: '',
                price: null,
                submitError: false,
            }
        },
        components: {ModalTitle, ModalSelect, TheMask, DatePicker},
        validations: {
            title: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(100),
            },
            category: {
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            dateBegin: {
                maxLength: maxLength(8),
            },
            dateEnd: {
                maxLength: maxLength(8),
            },
            price: {
                required,
                between: between(100, 1000000),
            },
        },
        methods: {
            ...mapActions(['addTask']),
            closeModal() {
                gsap.to('.container', {
                    duration: .5,
                    background: 'transparent',
                    onStart() {
                        gsap.to('.head-container', {
                            duration: .3,
                            opacity: 1,
                        });
                        gsap.to('.open-modal-button', {
                            duration: .3,
                            opacity: 1,
                            pointerEvents: 'all',
                        });
                        gsap.to('.modal-container', {
                            duration: .3,
                            opacity: 0,
                            pointerEvents: 'none',
                        });
                    },
                })
            },
            closeModalAfterSubmit() {
                this.$v.$invalid ? this.submitError = true :
                gsap.to('.container', {
                    duration: .5,
                    background: 'transparent',
                    onStart() {
                        gsap.to('.head-container', {
                            duration: .3,
                            opacity: 1,
                        });
                        gsap.to('.open-modal-button', {
                            duration: .3,
                            opacity: 1,
                            pointerEvents: 'all',
                        });
                        gsap.to('.modal-container', {
                            duration: .3,
                            opacity: 0,
                            pointerEvents: 'none',
                        });
                    },
                })
            },
            submit() {
                this.$v.$invalid ? this.submitError = true : (this.addTask({
                    categoryId: this.$children[3]._data.categoryId,
                    dateBegin: this.dateBegin.toISOString(),
                    dateEnd: this.dateEnd.toISOString(),
                    title: this.title,
                    category: this.category,
                    price: this.price,
                }), this.reset(), console.log(this.$children[3]._data.categoryId))
            },
            reset() {
                this.dateBegin = null;
                this.dateEnd = null;
                this.title = null;
                this.category = null;
                this.price = null;
            },
        },
        computed: {
            ...mapGetters({categories: 'getCategoryItems',}),
        },
    }
</script>

<style lang="scss">
    .form-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;

        .close-button {
            display: block;
            position: absolute;
            top: 5px;
            right: 7px;
            background-image: url("../image/close-second.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-color: transparent;
            padding: 15px;
            border: none;
            cursor: pointer;
            z-index: 1;
        }

        .form {
            position: relative;
            display: flex;
            flex-direction: column;
            box-shadow: $boxShadow;
            border-radius: $borderRadius;
            padding: 20px;
            background: $formBackground;

            .error {
                position: absolute;
                top: 56px;
                font-size: 8px;
                color: $pinkColor;
                letter-spacing: -0.02em;
            }

            .form-date {
                display: flex;
                flex-direction: column;
            }

            .label {
                position: relative;
                display: inline-block;
                max-width: 300px;
                margin: 0 0 10px 0;

                .form-description {
                    font-size: $littleFontSize;
                    font-weight: $normalFontWeight;
                    line-height: $littleLineHeight;
                    letter-spacing: -0.02em;
                    color: $darkColor;
                    margin: 0 0 5px 0;
                }

                .input {
                    min-width: 284px;
                    font-size: $formFontSize;
                    font-weight: $normalFontWeight;
                    color: $greyColor;
                    padding: 10px 0 10px 16px;
                    border: none;
                    border-radius: $borderRadius;
                    box-shadow: $inputShadow;
                    outline: none;
                }

                .date {
                    padding: 0;
                }
            }

            .category-label {
                margin: 0 0 20px 0;
            }

            .button-wrapper {
                display: flex;
                justify-content: center;

                .form-button {
                    display: block;
                    width: 284px;
                    font-size: $formFontSize;
                    font-weight: $bolderFontWeight;
                    color: $whiteColor;
                    background: $greenColor;
                    padding: 10px 0;
                    border: none;
                    border-radius: $buttonRadius;
                    outline: none;
                    cursor: pointer;

                    &:disabled {
                        background: $formButtonBackground;
                        color: $greyColor;
                    }
                }
            }
        }
    }
</style>