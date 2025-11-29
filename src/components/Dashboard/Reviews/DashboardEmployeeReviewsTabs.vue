<template>
  <prime-tabs value="0">
    <prime-tabList>
      <prime-tab value="0">Положительные</prime-tab>
      <prime-tab value="1">Отрицательные</prime-tab>
    </prime-tabList>
    <prime-tab-panels>
      <prime-tab-panel value="0">
        <div class="formgrid grid">
          <div id="employees-rating-table" class="col-6">
              <prime-message severity="success">Положительные отзывы</prime-message>
            <dashboard-employee-reviews-table :records="getPositiveReviewsByEmployee"></dashboard-employee-reviews-table>
          </div>
          <div id="employees-good-review-message"  class="col-6">
            <prime-message severity="success">Текст отзыва</prime-message>
            <prime-textarea
                :autoResize="true"
                rows="5"
                cols="30"
                :value="goodReviewMessage"
                class="input"
                placeholder="Оставьте комментарий"
                fluid
            />
          </div>
        </div>
      </prime-tab-panel>
      <prime-tab-panel value="1">
        <div class="formgrid grid">
          <div id="employees-rating-table" class="col-6">
            <prime-message severity="error">Отрицательные отзывы</prime-message>
            <dashboard-employee-reviews-table :records="getNegativeReviewsByEmployee"></dashboard-employee-reviews-table>
          </div>
          <div id="employees-bad-review-message"  class="col-6">
            <prime-message severity="error">Текст отзыва</prime-message>
            <prime-textarea
                :autoResize="true"
                rows="5"
                cols="30"
                :value="badReviewMessage"
                class="input"
                placeholder="Оставьте комментарий"
                fluid
            />
          </div>
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
  },
  data(){
    return {
      goodReviewMessage: 'There is a good review',
      badReviewMessage: 'There is a bad review'
    }
  }
}
</script>

<style scoped>

</style>