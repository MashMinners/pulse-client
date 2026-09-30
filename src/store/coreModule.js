import connections from "@/configs/connections";
import axios from "axios";

export const coreModule = {
    state:() => ({

    }),
    getters: {

    },
    mutations: {
        ['FINISH'](state, tokens){
            // eslint-disable-next-line no-unused-vars
            const header = tokens.access[0];
            // eslint-disable-next-line no-unused-vars
            const payload = tokens.access[1];
            // eslint-disable-next-line no-unused-vars
            const signa = tokens.access[2];
            localStorage.setItem('JWT', tokens.access);
            localStorage.setItem('Refresh', tokens.refresh);
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async doLoginAction({state, commit}, data){
            const response = await axios.post(`${connections.baseURL}/auth/doAuth?XDEBUG_SESSION_START=PHPSTORM`, data)
            const accessToken = response.data.AccessToken.split('.');
            const refreshToken = response.data.RefreshToken;
            commit('FINISH', {access: accessToken, refresh: refreshToken})
            return response;
        }
    },
    namespaced: true
}