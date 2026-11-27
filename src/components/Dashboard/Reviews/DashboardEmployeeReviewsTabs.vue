<template>
  <div class="p-3 md:p-4 w-full">
    <prime-card class="w-full shadow-2 border-round">
      <template #title>
        <div class="flex align-items-center gap-2 px-2">
          <i class="pi pi-comments text-primary text-2xl"></i>
          <span class="text-xl font-bold">Отзывы сотрудника</span>
        </div>
      </template>

      <template #content>
        <prime-tabs value="0" class="w-full">
          <prime-tabList>
            <prime-tab value="0">Положительные</prime-tab>
            <prime-tab value="1">Отрицательные</prime-tab>
          </prime-tabList>

          <prime-tab-panels>
            <prime-tab-panel value="0">
              <div class="grid w-full m-0 pt-2">
                <dashboard-employee-reviews-table
                    :records="getPositiveReviewsByEmployee"
                    :message="'Положительные отзывы'"
                ></dashboard-employee-reviews-table>
              </div>
            </prime-tab-panel>

            <prime-tab-panel value="1">
              <div class="grid w-full m-0 pt-2">
                <dashboard-employee-reviews-table
                    :records="getNegativeReviewsByEmployee"
                    :message="'Отрицательные отзывы'"
                ></dashboard-employee-reviews-table>
              </div>
            </prime-tab-panel>
          </prime-tab-panels>
        </prime-tabs>
      </template>
    </prime-card>
  </div>
</template>

<script>
import DashboardEmployeeReviewsTable from "@/components/Dashboard/Reviews/DashboardEmployeeReviewsTable.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DashboardEmployeeReviewsTabs",
  components: { DashboardEmployeeReviewsTable },
  computed: {
    ...mapGetters({
      getPositiveReviewsByEmployee: "dashboard/getPositiveReviewsByEmployee",
      getNegativeReviewsByEmployee: "dashboard/getNegativeReviewsByEmployee"
    })
  },
  methods: {
    ...mapActions({
      getPositiveReviewsByEmployeeAction: "dashboard/getPositiveReviewsByEmployeeAction",
      getNegativeReviewsByEmployeeAction: "dashboard/getNegativeReviewsByEmployeeAction"
    }),
    getPositiveReviews() {
      this.getPositiveReviewsByEmployeeAction(this.$route.params.uuid)
    },
    getNegativeReviews() {
      this.getNegativeReviewsByEmployeeAction(this.$route.params.uuid)
    }
  },
  created() {
    this.getPositiveReviews()
    this.getNegativeReviews()
  }
}
</script>