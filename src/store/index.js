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
            state.taskItems.items =  state.taskItems.items.concat(payload.result.offers);
            state.defaultItems =  state.taskItems.items.concat(payload.result.offers);
        },
        setCategory(state, payload) {
            state.categoryItems.items = payload.result;
        },
        sortTasks(state, payload) {
            state.taskItems.items = state.defaultItems;
            state.taskItems.items = state.taskItems.items.filter(({category}) => category === payload);
        },
        updateTasks(state, items) {
            state.taskItems.items = items;
        },
        syncTasks(state) {
            state.taskItems = state.taskItems.map((item) => ({
                taskId: item.id,
            }))
        },
    },
    getters: {
        getTaskItems(state) {
            return state.taskItems.items;
        },
        getCategoryItems(state) {
            return state.categoryItems.items.categories;
        },
    },
    actions: {
        getTasks(context, payload) {
            fetch(`${API_URL.tasks}pagingCount=10&pagingAfter=${payload}`)
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
        addTask(context, task) {
            fetch(`${API_URL.addTask}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(task)
            })
                .then(() => {
                    context.dispatch("getTasks");
                });
        }
    },
});
