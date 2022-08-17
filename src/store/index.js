import Vue from "vue";
import Vuex from "vuex";
import {API_URL} from "@/constants/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        taskItems: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        },
        categoryItems: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        },
        defaultItems: [],
    },
    mutations: {
        setTasks(state, payload) {
            state.taskItems.items = payload.result.offers;
            state.defaultItems = payload.result.offers;
        },
        setCategory(state, payload) {
            state.categoryItems.items = payload.result;
        },
        sortTasks(state, payload) {
            state.taskItems.items = state.defaultItems;
            state.taskItems.items = state.taskItems.items.filter(({category}) => category === payload);
        },
    },
    getters: {
        getTaskItems(state) {
            return state.taskItems.items;
        },
        getCategoryItems(state) {
            return state.categoryItems.items.categories;
        }
    },
    actions: {
        getTasks(context) {
            fetch(`${API_URL.tasks}/test/tasks/search?pagingCount=5&pagingAfter=0
`)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    context.commit("setTasks", response);
                });
        },
        getCategory(context) {
            fetch(`${API_URL.category}`)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                   context.commit("setCategory", response)
                });
        },
    },
});
