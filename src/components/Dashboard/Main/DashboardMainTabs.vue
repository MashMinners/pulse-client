<template>
  <div class="p-3 md:p-4 w-full">
    <!-- Карточка на всю ширину, но с внутренними отступами -->
    <prime-card class="w-full shadow-2 border-round">
      <template #title>
        <div class="flex align-items-center justify-content-between w-full px-2">
          <div class="flex align-items-center gap-2">
            <i class="pi pi-chart-bar text-primary text-2xl"></i>
            <span class="text-xl font-bold">Рейтинг сотрудников</span>
          </div>
          <!-- Можно добавить кнопку обновления или дату -->
          <span class="text-sm text-color-secondary">Актуально на сегодня</span>
        </div>
      </template>

      <template #content>
        <!-- Полноэкранная сетка -->
        <div class="grid w-full m-0">

          <!-- Левая колонка: Таблица (занимает больше места) -->
          <div class="col-12 lg:col-6 p-2">
            <div class="h-full border-round surface-50 border-1 surface-border p-3 flex flex-column">
              <div class="flex align-items-center gap-2 mb-3 px-1">
                <i class="pi pi-users text-primary"></i>
                <span class="font-bold text-lg">Сотрудники</span>
              </div>

              <div class="flex-1">
                <div v-if="getEmployeesWithRating.length !== 0">
                  <!-- Передаем records -->
                  <dashboard-main-employees-table :records="getEmployeesWithRating"></dashboard-main-employees-table>
                </div>
                <div v-else class="flex align-items-center justify-content-center h-full min-h-20rem">
                  <prime-message severity="info" :closable="false">Рейтинг пока не сформирован</prime-message>
                </div>
              </div>
            </div>
          </div>

          <!-- Правая колонка: График -->
          <div class="col-12 lg:col-6 p-2">
            <div class="h-full border-round surface-50 border-1 surface-border p-3 flex flex-column">
              <div class="flex align-items-center gap-2 mb-3 px-1">
                <i class="pi pi-chart-pie text-primary"></i>
                <span class="font-bold text-lg">Соотношение отзывов</span>
              </div>

              <div class="flex-1 flex align-items-center justify-content-center">
                <dashboard-main-employees-chart class="w-full"></dashboard-main-employees-chart>
              </div>
            </div>
          </div>

        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DashboardMainEmployeesTable from "@/components/Dashboard/Main/DashboardMainEmployeesTable";
import DashboardMainEmployeesChart from "@/components/Dashboard/Main/DashboardMainEmployeesChart.vue";
import {mapActions} from "vuex";

export default {
  name: "DashboardMainTabs",
  components: {DashboardMainEmployeesChart, DashboardMainEmployeesTable},
  methods: {
    ...mapActions({
      getEmployeesWithRatingAction: "dashboard/getEmployeesWithRatingAction"
    }),
    getEmployees(){
      this.getEmployeesWithRatingAction()
    }
  },
  created() {
    this.getEmployees();
  },
  computed: {
    ...mapGetters({
      getEmployeesWithRating: "dashboard/getEmployeesWithRating"
    })
  }
}
</script>

<style scoped>

</style>