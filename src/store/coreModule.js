import axios from "axios";

export const coreModule = {
    state:() => ({

    }),
    getters: {

    },
    mutations: {

    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async doLogin({state, commit}, data){
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('http://192.168.0.14/review/bad?XDEBUG_SESSION_START=PHPSTORM', {})
            //commit('FINISH', {pacient: data.pacient, reviewStatus: 'bad'})
        }
    },
    namespaced: true
}