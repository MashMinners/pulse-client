import axios from "axios";

export const coreModule = {
    state:() => ({

    }),
    getters: {

    },
    mutations: {
        ['FINISH'](state, tokens){
            const accessToken = tokens.access.split('.');
            // eslint-disable-next-line no-unused-vars
            const header = accessToken[0];
            // eslint-disable-next-line no-unused-vars
            const payload = accessToken[1];
            // eslint-disable-next-line no-unused-vars
            const signa = accessToken[2];
            localStorage.setItem('JWT', tokens.access);
            localStorage.setItem('Refresh', tokens.refresh);
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async doLoginAction({state, commit}, data){
            const response = await axios.post('http://192.168.0.14/auth/doAuth?XDEBUG_SESSION_START=PHPSTORM', data)
            const accessToken = response.data.AccessToken;//.split('.');
            // eslint-disable-next-line no-unused-vars
            const refreshToken = response.data.RefreshToken;
            commit('FINISH', {access: accessToken, refresh: refreshToken})
            return response;
        }
    },
    namespaced: true
}