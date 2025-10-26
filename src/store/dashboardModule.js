//import connections from "@/configs/connections";
//import axios from "axios";

export const dashboardModule = {
    state:() => ({
        section: {
            title: 'Главная'
        },
        menuItems: [
            {
                label: 'Главная',
                icon: 'pi pi-home',
                route: '/dashboard',
                title: 'Главная'
            },
            {
                label: 'Контроль отзывов',
                icon: 'pi pi-book',
                route: '/dashboard/reviews',
                title: 'Контроль отзывов'
            },
        ]

    }),
    getters: {
        getSectionTitle(state){
            return state.section.title;
        },
        getMenuItems(state){
            return state.menuItems;
        }
    },
    mutations: {
        ['SET_SECTION_TITLE'](state, title){
            state.section.title = title;
        }
    },
    actions: {

    },
    namespaced: true
}