//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        doctorID: null,

    }),
    getters: {
        getDoctorId(state){
            return state.doctorID;
        }
    },
    mutations: {
        ['SET_DOCTOR_ID'](state, id){
           state.doctorID = id;
        },

    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getStomIntersections({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/intersections?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_STOM_INTERSECTIONS', response.data);
        },

        async sendGoodReview({state, commit}) {
            const response = await axios.post('http://192.168.0.10/review/good?XDEBUG_SESSION_START=PHPSTORM', {
                doctorID: state.doctorID
            });
            commit('FINISH', response)
        }

    },
    namespaced: true
}