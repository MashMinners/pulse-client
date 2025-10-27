import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        doctorID: null,
        pacient: null,
        reviewStatus: null
    }),
    getters: {
        getDoctorId(state){
            return state.doctorID;
        },
        getReviewStatus(state){
            return state.reviewStatus;
        },
        getPacient(state){
            return state.pacient
        }
    },
    mutations: {
        ['SET_DOCTOR_ID'](state, id){
           state.doctorID = id;
        },
        // eslint-disable-next-line no-unused-vars
        ['FINISH'](state, data){
            state.pacient = data.pacient
            state.reviewStatus = data.reviewStatus
        }

    },
    actions: {
        async sendGoodReview({state, commit}, data) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(connections.api.production.good ? connections.api.production.good : connections.api.dev.good, {
                doctorID: state.doctorID,
                pacient: data.pacient,
                telephone: data.telephone,
                message: data.message

            });
            commit('FINISH', {pacient: data.pacient, reviewStatus: 'good'})
        },

        async sendBadReview({state, commit}, data) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('http://192.168.0.10/review/bad?XDEBUG_SESSION_START=PHPSTORM', {
                doctorID: state.doctorID,
                pacient: data.pacient,
                telephone: data.telephone,
                message: data.message

            });
            commit('FINISH', {pacient: data.pacient, reviewStatus: 'bad'})
        }

    },
    namespaced: true
}