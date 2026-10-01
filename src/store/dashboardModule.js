import connections from "@/configs/connections";
import axios from "axios";
import router from "@/router";

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
            try {
                const token = localStorage.getItem('JWT');
                const response = await axios.get(`${connections.baseURL}/dashboard/main/employees?XDEBUG_SESSION_START=PHPSTORM`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                commit('SET_EMPLOYEES_WITH_RATING', response.data);
            }catch (error){
                if (error.response){
                    if (error.response.status === 400) {
                        console.warn('Токен невалиден или не расшифрован:', error.response);
                        localStorage.removeItem('JWT');
                        localStorage.removeItem('Refresh');
                        if (router.currentRoute.value.name !== 'core.authenticate') {
                            router.push({ name: 'core.authenticate' });
                        }
                    }
                    else if(error.response.status === 401) {
                        console.warn('Токен не найден:', error.response);
                    }
                }else if (error.request) {
                    // Запрос ушёл, но ответа нет (сеть, таймаут)
                    console.error('Нет ответа от сервера:', error.request);
                }else {
                    // Ошибка на этапе настройки запроса
                    console.error('Ошибка запроса:', error.message);
                }
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getPositiveReviewsByEmployeeAction({state, commit}, employeeId) {
            const params = {employeeId: employeeId}
            //const response = await axios.get('https://api.pulse.crb500.ru/dashboard/reviews/positive',{params});
            const response = await axios.get(`${connections.baseURL}/dashboard/reviews/positive`,{params});
            commit('SET_POSITIVE_REVIEWS_BY_EMPLOYEE', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getNegativeReviewsByEmployeeAction({state, commit}, employeeId) {
            const params = {employeeId: employeeId}
            const response = await axios.get(`${connections.baseURL}/dashboard/reviews/negative`,{params});
            commit('SET_NEGATIVE_REVIEWS_BY_EMPLOYEE', response.data);
        },
    },
    namespaced: true
}