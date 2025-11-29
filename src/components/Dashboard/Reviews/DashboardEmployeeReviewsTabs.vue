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
                :value="textAreaMessage"
                class="input"
                placeholder="Оставьте комментарий"
                fluid
            />
          </div>
        </div>
      </prime-tab-panel>
      <prime-tab-panel value="1">
        111
        <filter-component-test></filter-component-test>
      </prime-tab-panel>
    </prime-tab-panels>
  </prime-tabs>
</template>

<script>
import FilterComponentTest from "@/components/Dashboard/Reviews/FilterComponentTest.vue";
import DashboardEmployeeReviewsTable from "@/components/Dashboard/Reviews/DashboardEmployeeReviewsTable.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "DashboardEmployeeReviewsTabs",
  components: {DashboardEmployeeReviewsTable, FilterComponentTest},
  computed: {
    ...mapGetters({
      getPositiveReviewsByEmployee: "dashboard/getPositiveReviewsByEmployee"
    })
  },
  methods:{
    ...mapActions({
      getPositiveReviewsByEmployeeAction : "dashboard/getPositiveReviewsByEmployeeAction"
    }),
    getPositiveReviews(){
      this.getPositiveReviewsByEmployeeAction(this.$route.params.uuid)
    }
  },
  created() {
    this.getPositiveReviews()
  },
  data(){
    return {
      textAreaMessage: 'There is a message'
    }
  }
}
</script>

<style scoped>

</style>