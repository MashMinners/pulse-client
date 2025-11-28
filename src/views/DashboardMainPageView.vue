<template>
  <div>
    <p>Hello this is dashboard main View</p>
    <prime-button label="fill" @click="getEmployees"></prime-button>
    <div>
      <dashboard-main-tabs></dashboard-main-tabs>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import DashboardMainTabs from "@/components/Dashboard/Main/DashboardMainTabs";

export default {
  name: "DashboardMainPageView",
  components: {DashboardMainTabs},
  methods: {
    ...mapActions({
      getEmployeesWithRatingAction: "dashboard/getEmployeesWithRatingAction"
    }),
    getEmployees(){
      this.getEmployeesWithRatingAction()
    }
  }
}
</script>

<style scoped>

</style>