//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        pacient: null,
        reviewStatus: null,
        employee: {
            employeeId: null,
            employeeFullName: null,
            employeeSurname: null,
            employeeFirstName: null,
            employeeSecondName: null,
            employeePhoto: null,
            employeePosition: null,
            employeeDescription: null
        }
    }),
    getters: {
        getEmployee(state){
            return state.employee;
        },
        getReviewStatus(state){
            return state.reviewStatus;
        },
        getPacient(state){
            return state.pacient
        },
        getEmployeeId(state){
            return state.employee.employeeId
        }
    },
    mutations: {
        ['SET_EMPLOYEE'](state, employee){
            state.employee.employeeId = employee.employees_employee_id;
            state.employee.employeeFullName = employee.employees_employee_surname + ' ' + employee.employees_employee_first_name + ' ' +employee.employees_employee_second_name;
            state.employee.employeeSurname = employee.employees_employee_surname;
            state.employee.employeeFirstName = employee.employees_employee_first_name;
            state.employee.employeeSecondName = employee.employees_employee_second_name;
            state.employee.employeePhoto = employee. employees_employee_photo;
            state.employee.employeePosition = employee. employees_employee_position;
            state.employee.employeeDescription = employee.employees_employee_description;
        },
        ['FINISH'](state, data){
            state.pacient = data.pacient
            state.reviewStatus = data.reviewStatus
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getEmployeeAction({state, commit}, employeeId){
            const params = {employeeId: employeeId}
            const response = await axios.get('http://192.168.0.14/app/employee/get?XDEBUG_SESSION_START=PHPSTORM',{params});
            commit('SET_EMPLOYEE', response.data);
        },

        async sendPositiveReviewAction({state, commit}, review) {
            // eslint-disable-next-line no-unused-vars
            //const response = await axios.post(connections.api.production ? connections.api.production + 'app/review/add/positive/' : connections.api.dev + 'app/review/add/positive?XDEBUG_SESSION_START=PHPSTORM', {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('http://192.168.0.14/app/review/add?XDEBUG_SESSION_START=PHPSTORM', {
                reviewId: null,
                reviewEmployeeId: state.employee.employeeId,
                reviewStatus: review.reviewStatus,
                reviewText: review.message,
                reviewDate: null,
                reviewPacient: review.pacient,
                reviewTelephone: review.telephone
            });
            commit('FINISH', {pacient: review.pacient, reviewStatus: review.reviewStatus})
        },

        async sendNegativeReviewAction({state, commit}, review) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('http://192.168.0.14/app/review/add?XDEBUG_SESSION_START=PHPSTORM', {
                reviewId: null,
                reviewEmployeeId: state.employee.employeeId,
                reviewStatus: review.reviewStatus,
                reviewText: review.message,
                reviewDate: null,
                reviewPacient: review.pacient,
                reviewTelephone: review.telephone
            });
            commit('FINISH', {pacient: review.pacient, reviewStatus: review.reviewStatus})
        }
    },
    namespaced: true
}