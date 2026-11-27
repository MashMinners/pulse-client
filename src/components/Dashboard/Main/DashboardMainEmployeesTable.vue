<template>
  <div class="w-full">
    <div v-if="records.length !== 0">
      <prime-data-table
          editMode="cell"
          class="editable-cells-table p-datatable-sm w-full"
          :value="records"
          v-model:filters="filters"
          stateStorage="session"
          stateKey="dt-state-demo-session"
          filterDisplay="menu"
          dataKey="employeeId"
          :globalFilterFields="['employeeFullName']"
          stripedRows
          responsiveLayout="scroll"
          :paginator="true"
          :rows="10"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10,20,50]"
          currentPageReportTemplate="Показано {first} - {last} из {totalRecords}"
      >
        <!-- Заголовок таблицы: поиск -->
        <template #header>
          <div class="flex justify-content-end pb-2">
            <prime-icon-field>
              <prime-input-icon>
                <i class="pi pi-search" />
              </prime-input-icon>
              <prime-input-text
                  v-model="filters['global'].value"
                  placeholder="Поиск по сотруднику"
                  class="w-full sm:w-auto"
              />
            </prime-icon-field>
          </div>
        </template>

        <!-- 1. Колонка с аватаром (Вручную центрируем иконку) -->
        <prime-column style="width: 80px">
          <template #header>
            <div class="flex justify-content-center align-items-center w-full h-full">
              <i class="pi pi-image text-color-secondary" v-tooltip.top="'Фото'"></i>
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <prime-avatar
                  :image="`/avatars/${slotProps.data.employeePhoto}`"
                  style="width: 48px; height: 48px"
                  shape="circle"
                  class="border-1 surface-border shadow-1"
              />
            </div>
          </template>
        </prime-column>

        <!-- 2. Колонка с именем (Вручную центрируем заголовок) -->
        <prime-column
            field="employeeFullName"
            :sortable="true"
            :showFilterMenu="false"
        >
          <!-- Кастомный заголовок с центрированием -->
          <template #header>
            <div class="flex justify-content-center align-items-center w-full cursor-pointer select-none">
              <span class="font-bold text-color">Сотрудник</span>
            </div>
          </template>

          <template #body="slotProps">
            <div class="flex justify-content-start pl-3">
              <span class="text-color">{{ slotProps.data.employeeFullName }}</span>
            </div>
          </template>
        </prime-column>

        <!-- 3. Колонка с кнопками (Вручную центрируем заголовок) -->
        <prime-column style="min-width: 180px;">
          <template #header>
            <div class="flex justify-content-center align-items-center w-full">
              <span class="font-bold text-color">Отзывы</span>
            </div>
          </template>

          <template #body="slotProps">
            <div class="flex gap-2 justify-content-center w-full">
              <!-- Положительные -->
              <prime-button
                  severity="success"
                  outlined
                  rounded
                  class="p-button-sm px-3"
                  @click="goToEmployeeReviews(slotProps.data.employeeId)"
                  v-tooltip.top="'Положительные отзывы'"
              >
                <i class="pi pi-thumbs-up mr-1"></i>
                <span class="font-bold">{{ slotProps.data.employeePositiveRatingCount }}</span>
              </prime-button>

              <!-- Отрицательные -->
              <prime-button
                  severity="danger"
                  outlined
                  rounded
                  class="p-button-sm px-3"
                  @click="goToEmployeeReviews(slotProps.data.employeeId)"
                  v-tooltip.top="'Отрицательные отзывы'"
              >
                <i class="pi pi-thumbs-down mr-1"></i>
                <span class="font-bold">{{ slotProps.data.employeeNegativeRatingCount }}</span>
              </prime-button>
            </div>
          </template>
        </prime-column>

        <!-- Пустое состояние -->
        <template #empty>
          <div class="text-center p-4 text-color-secondary">
            <i class="pi pi-inbox text-4xl mb-2"></i>
            <p>Записи не найдены</p>
          </div>
        </template>
      </prime-data-table>
    </div>

    <!-- Если записей нет вообще -->
    <div v-else class="text-center p-4">
      <prime-message severity="info" :closable="false">Записи скрыты или отсутствуют!</prime-message>
    </div>
  </div>
</template>
<script>
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
export default {
  name: "DashboardMainEmployeesTable",
  data() {
    return {
      filters: null
    };
  },
  created() {
    this.initFilters();
  },
  props: {
    //records: [] // Объявляем, что ожидаем строку
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    }
  },
  methods:{
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        employeeFullName: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
      };
    },
    goToEmployeeReviews(id){
      //Здесь оформить переход на страницу с отзывами по ID сотрудника
      this.$router.push('/dashboard/reviews/' + id);
    }

  }
}
</script>

<style scoped>
/* Магия для центрирования flex-контейнера внутри th */
:deep(.header-center .p-column-header-content) {
  justify-content: center !important;
  align-items: center;
  width: 100%;
}

/* Убираем лишние отступы у иконки сортировки, чтобы она стояла ровно */
:deep(.header-center .p-sortable-column-icon) {
  margin-left: 0.5rem;
  margin-right: 0;
}
</style>