<template>
  <prime-tabs value="0">
    <prime-tabList>
      <prime-tab value="0">Положительные</prime-tab>
      <prime-tab value="1">Отрицательные</prime-tab>
    </prime-tabList>
    <prime-tab-panels>
      <prime-tab-panel value="0">
        <div class="formgrid grid">
          <dashboard-employee-reviews-table :records="getPositiveReviewsByEmployee" :message="'Положительные отзывы'" :messageType="'success'"></dashboard-employee-reviews-table>
        </div>
      </prime-tab-panel>
      <prime-tab-panel value="1">
        <div class="formgrid grid">
          <dashboard-employee-reviews-table :records="getNegativeReviewsByEmployee" :message="'Отрицательные отзывы'" :messageType="'error'"></dashboard-employee-reviews-table>
        </div>
      </prime-tab-panel>
    </prime-tab-panels>
  </prime-tabs>
</template>

<script>
import DashboardEmployeeReviewsTable from "@/components/Dashboard/Reviews/DashboardEmployeeReviewsTable.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "DashboardEmployeeReviewsTabs",
  components: {DashboardEmployeeReviewsTable},
  computed: {
    ...mapGetters({
      getPositiveReviewsByEmployee: "dashboard/getPositiveReviewsByEmployee",
      getNegativeReviewsByEmployee: "dashboard/getNegativeReviewsByEmployee"
    })
  },
  methods:{
    ...mapActions({
      getPositiveReviewsByEmployeeAction : "dashboard/getPositiveReviewsByEmployeeAction",
      getNegativeReviewsByEmployeeAction : "dashboard/getNegativeReviewsByEmployeeAction"
    }),
    getPositiveReviews(){
      this.getPositiveReviewsByEmployeeAction(this.$route.params.uuid)
    },
    getNegativeReviews(){
      this.getNegativeReviewsByEmployeeAction(this.$route.params.uuid)
    }
  },
  created() {
    this.getPositiveReviews()
    this.getNegativeReviews()
  }
}
</script>

<style scoped>

</style>