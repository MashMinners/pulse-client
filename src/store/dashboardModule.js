//import connections from "@/configs/connections";
//import axios from "axios";

export const dashboardModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        sideBarVisible: false,
        menuItems: [
            { label: 'Главная',
                icon: 'pi pi-home',
                route: '/dashboard',
                //command: () => {
                    //this.$router.push('/dashboard');
                    //this.visible = false;
                //}
            },
            { label: 'Контроль отзывов',
                icon: 'pi pi-book',
                route: '/dashboard/reviews'
                //command: () => {
                    //this.$router.push('/dashboard/reviews');
                    //this.visible = false;
                //}
            },
        ]

    }),
    getters: {
        getSectionTitle(state){
            return state.section.title;
        },
        getSideBar(state){
            return state.sideBarVisible;
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