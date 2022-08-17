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
        }
    },
    mutations: {
        setTasks(state, payload) {
            state.taskItems.items = payload.result;
        }
    },
    getters: {
        getTaskItems(state) {
            return state.taskItems.items;
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
        }
    },
});
