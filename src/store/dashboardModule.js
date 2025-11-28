//import connections from "@/configs/connections";

//import axios from "axios";

export const dashboardModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        menuItems: [
            {
                label: 'Главная',
                icon: 'pi pi-home',
                route: '/dashboard/main',
                title: 'Главная'
            },
            {
                label: 'Контроль отзывов',
                icon: 'pi pi-book',
                route: '/dashboard/reviews',
                title: 'Контроль отзывов'
            },
        ],
        employees: {
            withRating : []
        }

    }),
    getters: {
        getSectionTitle(state){
            return state.section.title;
        },
        getMenuItems(state){
            return state.menuItems;
        },
        getEmployeesWithRating(state){
            return state.employees.withRating;
        },
    },
    mutations: {
        ['SET_EMPLOYEES_WITH_RATING'](state, employees){
            state.employees.withRating = employees
            console.log(state.employees.withRating)
        },
        ['SET_SECTION_TITLE'](state, title){
            state.section.title = title;
        },
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getEmployeesWithRatingAction({state, commit}) {
            //const response = await axios.get('http://192.168.0.14/dashboard/main/employees?XDEBUG_SESSION_START=PHPSTORM');
            //commit('SET_EMPLOYEES_WITH_RATING', response.data);
            let employees = [
                {
                    employeeFullName : "Alexander Kronos",
                    employeePositiveRating: 3,
                    employeeNegativeRating: 1
                },
                {
                    employeeFullName : "Obivan Kanabis",
                    employeePositiveRating: 5,
                    employeeNegativeRating: 2
                },
                {
                    employeeFullName : "Виктор Ющинка",
                    employeePositiveRating: 2,
                    employeeNegativeRating: 1
                }
            ]
            commit('SET_EMPLOYEES_WITH_RATING', employees)
        },
    },
    namespaced: true
}