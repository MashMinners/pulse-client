//import connections from "@/configs/connections";
//import axios from "axios";

export const dashboardModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        menuItems: [
            { label: 'Главная',
                icon: 'pi pi-home',
                route: '/dashboard',
            },
            { label: 'Контроль отзывов',
                icon: 'pi pi-book',
                route: '/dashboard/reviews'
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

    },
    actions: {

    },
    namespaced: true
}