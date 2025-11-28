import { createStore } from 'vuex';
import {appModule} from "@/store/appModule";
import {dashboardModule} from "@/store/dashboardModule";

export default createStore({
  modules: {
    app: appModule,
    cp: dashboardModule
  }
})