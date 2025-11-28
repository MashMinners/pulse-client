//import connections from "@/configs/connections";

import axios from "axios";

export const dashboardModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        sideBarVisible: false,
        menuItems: [
            {
                label: 'Начало',
                icon: 'pi pi-fw pi-plus',
                to: "/cp/start"
            },
            {
                label: 'Пользователи',
                icon: 'pi pi-fw pi-trash',
                to: "/cp/users"
            }
        ]

    }),
    getters: {
        getEmployeesWithRating(state){
            return state.employees.withRating;
        },
    },
    mutations: {
        ['SET_EMPLOYEES_WITH_RATING'](state, employees){
            state.employees.withRating = employees
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getEmployeesWithRating({state, commit}) {
            const response = await axios.get('http://192.168.0.14/dashboard/main/employees?XDEBUG_SESSION_START=PHPSTORM');
            commit('SET_EMPLOYEES_WITH_RATING', response.data);
        },
    },
    namespaced: true
}