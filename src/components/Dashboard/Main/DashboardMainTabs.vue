<template>
  <div>
    <prime-tabs value="0">
      <prime-tabList>
        <prime-tab value="0">Рейтинг сотрудников</prime-tab>
      </prime-tabList>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div class="formgrid grid">
            <div id="employyes-rating-table" class="col-6">
              <div v-if="getEmployeesWithRating.length !==0">
                <prime-message severity="success">Рейтинг сотрудников</prime-message>
              </div>
              <dashboard-main-employees-table :records="getEmployeesWithRating"></dashboard-main-employees-table>
            </div>
            <div id="employees-rating-chart"  class="col-6">
              <prime-message severity="success">Соотношение всех отзывов: положительные/отрицательные</prime-message>
              <dashboard-main-employees-chart></dashboard-main-employees-chart>
            </div>
          </div>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardMainEmployeesTable from "@/components/Dashboard/Main/DashboardMainEmployeesTable";
import DashboardMainEmployeesChart from "@/components/Dashboard/Main/DashboardMainEmployeesChart.vue";

export default {
  name: "DashboardMainTabs",
  components: {DashboardMainEmployeesChart, DashboardMainEmployeesTable},
  computed: {
    ...mapGetters({
      getEmployeesWithRating: "dashboard/getEmployeesWithRating"
    })
  },
}
</script>

<style scoped>

</style>