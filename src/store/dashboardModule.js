//import connections from "@/configs/connections";
import axios from "axios";

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
        },
        reviews:{
            positiveByEmployee : [],
            negativeByEmployee : [],
            newByAll : []
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
        //REVIEWS
        getPositiveReviewsByEmployee(state){
            return state.reviews.positiveByEmployee
        },
        getNegativeReviewsByEmployee(state){
            return state.reviews.negativeByEmployee
        }
    },
    mutations: {
        ['SET_EMPLOYEES_WITH_RATING'](state, employees){
            state.employees.withRating = employees
            //console.log(state.employees.withRating)
            console.log(employees)
        },
        ['SET_SECTION_TITLE'](state, title){
            state.section.title = title;
        },
        //REVIEWS
        ['SET_POSITIVE_REVIEWS_BY_EMPLOYEE'](state, reviews){
            state.reviews.positiveByEmployee = reviews
            console.log(reviews)
        },
        ['SET_NEGATIVE_REVIEWS_BY_EMPLOYEE'](state, reviews){
            state.reviews.negativeByEmployee = reviews
            console.log(reviews)
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getEmployeesWithRatingAction({state, commit}) {
            const response = await axios.get('https://api.pulse.crb500.ru/dashboard/main/employees');
            commit('SET_EMPLOYEES_WITH_RATING', response.data);
            /*let employees = [
                {
                    employeeFullName : "Alexander Kronos",
                    employeePhoto: "Shilova.png",
                    employeePositiveRatingCount: 3,
                    employeeNegativeRatingCount: 1
                },
                {
                    employeeFullName : "Obivan Kanabis",
                    employeePhoto: "Kulagina.png",
                    employeePositiveRatingCount: 5,
                    employeeNegativeRatingCount: 2
                },
                {
                    employeeFullName : "Виктор Ющинка",
                    employeePhoto: "Kulagina.png",
                    employeePositiveRatingCount: 2,
                    employeeNegativeRatingCount: 1
                }
            ]
            commit('SET_EMPLOYEES_WITH_RATING', employees)*/
        },

        // eslint-disable-next-line no-unused-vars
        async getPositiveReviewsByEmployeeAction({state, commit}, employeeId) {
            const params = {employeeId: employeeId}
            const response = await axios.get('https://api.pulse.crb500.ru/dashboard/reviews/positive',{params});
            commit('SET_POSITIVE_REVIEWS_BY_EMPLOYEE', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getNegativeReviewsByEmployeeAction({state, commit}, employeeId) {
            const params = {employeeId: employeeId}
            const response = await axios.get('https://api.pulse.crb500.ru/dashboard/reviews/negative',{params});
            commit('SET_NEGATIVE_REVIEWS_BY_EMPLOYEE', response.data);
        },
    },
    namespaced: true
}