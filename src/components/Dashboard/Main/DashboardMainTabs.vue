<template>
  <div>
    <prime-tabs value="0">
      <prime-tabList>
        <prime-tab value="0">Пересечения по стационару и диспансеризации</prime-tab>
      </prime-tabList>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getEmployeesWithRating.length !==0">
            <prime-message severity="error">Записи пользователей</prime-message>
          </div>
          <dashboard-main-employees-table :records="getEmployeesWithRating"></dashboard-main-employees-table>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardMainEmployeesTable from "@/components/Dashboard/Main/DashboardMainEmployeesTable";

export default {
  name: "DashboardMainTabs",
  components: {DashboardMainEmployeesTable},
  computed: {
    ...mapGetters({
      getEmployeesWithRating: "dashboard/getEmployeesWithRating"
    })
  },
}
</script>

<style scoped>

</style>