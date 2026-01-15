import { createStore } from 'vuex';
import {appModule} from "@/store/appModule";
import {dashboardModule} from "@/store/dashboardModule";
import {coreModule} from "@/store/coreModule"

export default createStore({
  modules: {
    app: appModule,
    dashboard: dashboardModule,
    core: coreModule
  }
})