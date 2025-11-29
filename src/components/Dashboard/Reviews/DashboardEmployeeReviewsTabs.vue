<template>
  <prime-tabs value="0">
    <prime-tabList>
      <prime-tab value="0">Положительные</prime-tab>
      <prime-tab value="1">Отрицательные</prime-tab>
    </prime-tabList>
    <prime-tab-panels>
      <prime-tab-panel value="0">
        <div class="formgrid grid">
          <div id="employyes-rating-table" class="col-6">
            <!--<div v-if="getEmployeesWithRating.length !==0">-->
              <prime-message severity="success">Положительные отзывы</prime-message>
            <!--</div>-->
            <!---<dashboard-main-employees-table :records="getEmployeesWithRating"></dashboard-main-employees-table>-->
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

export default {
  name: "DashboardEmployeeReviewsTabs",
  components: {FilterComponentTest},
  data(){
    return {
      textAreaMessage: 'There is a message'
    }
  }
}
</script>

<style scoped>

</style>