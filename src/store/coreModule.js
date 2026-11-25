import connections from "@/configs/connections";
import axios from "axios";

export const coreModule = {
    state:() => ({
        accessToken: null//'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkucHVsc2UubG9jYWwiLCJzdWIiOiIyZWUyOWM1OS1kYmVlLTExZjAtYjJjYy0wODAwMjc0NWJmNjMiLCJhdWQiOiJhcGkucHVsc2UubG9jYWwiLCJleHAiOjE3OTU1ODM3ODYsIm5iZiI6MTc5NTQ5OTE4NiwiaWF0IjoxNzk1NDk5MTg2LCJqdGkiOiI3NWI2OWE2Ni1hZDdiLTRkYzYtOWY2MC05ZDFlZmMzM2Q4NDQiLCJ1c2VyRGF0YSI6W119.tMPV4qwLfXZZH7c7cnwdJUa0lbmP6CHxlssEBaMWjqY'
    }),
    getters: {
        accessToken(state){
            return state.accessToken
        }
    },
    mutations: {
        ['SET_ACCESS_TOKEN'](state, token){
            state.accessToken = token.access;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async doLoginAction({state, commit}, data){
            const response = await axios.post(`${connections.baseURL}/auth/doAuth?XDEBUG_SESSION_START=PHPSTORM`, data, { withCredentials: true })
            //Здесь логично проверять статус
            if (response.status === 200){
                commit('SET_ACCESS_TOKEN', {access: response.data.AccessToken})
            }
            return response;
        },
        // eslint-disable-next-line no-unused-vars
        async doRefresh({state, commit}){
            console.log('Start requesting new pare of tokens')
            const result = await axios.get(`${connections.baseURL}/auth/refresh?XDEBUG_SESSION_START=PHPSTORM`, { withCredentials: true })
            console.log('Finish requesting new pare of tokens')
            commit('SET_ACCESS_TOKEN', {access: result.data})
            console.log('Finish setting storage!')
        }
    },
    namespaced: true
}