<template>
  <!-- Левая колонка: Таблица -->
  <div class="col-12 md:col-7 p-2">
    <div class="border-round surface-50 border-1 surface-border p-3 h-full flex flex-column">
      <div class="flex align-items-center gap-2 mb-3 px-1">
        <!-- Всегда стандартная иконка -->
        <i class="pi pi-list text-primary"></i>
        <!-- Всегда стандартный цвет текста -->
        <span class="font-bold text-lg text-color">{{ message }}</span>
      </div>

      <div v-if="records.length !== 0" class="flex-1">
        <prime-data-table
            editMode="cell"
            class="editable-cells-table p-datatable-sm w-full"
            v-model:selection="selectedRecords"
            :value="records"
            selectionMode="single"
            :metaKeySelection="false"
            @rowSelect="onRowSelect"
            dataKey="id"
            removableSort
            stripedRows
            responsiveLayout="scroll"
            :paginator="true"
            :rows="5"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 20, 50]"
            currentPageReportTemplate="Показано {first} - {last} из {totalRecords}"
        >
          <prime-column style="width: 80px">
            <template #body="slotProps">
              <prime-avatar
                  :image="`/avatars/${slotProps.data.employees_employee_photo}`"
                  style="width: 48px; height: 48px"
                  shape="circle"
                  class="border-1 surface-border shadow-1"
              />
            </template>
          </prime-column>

          <prime-column header="Сотрудник">
            <template #body="slotProps">
              <span class="text-color">{{ getEmployeeFullName(slotProps.data) }}</span>
            </template>
          </prime-column>

          <prime-column field="reviews_review_date" header="Дата/время" :sortable="true"></prime-column>

          <prime-column header="Пациент">
            <template #body="slotProps">
              <span class="text-color">{{ getPacientName(slotProps.data.reviews_review_pacient) }}</span>
            </template>
          </prime-column>

          <prime-column header="Контакт">
            <template #body="slotProps">
              <span class="text-color">{{ getContact(slotProps.data.reviews_review_pacient_telephone) }}</span>
            </template>
          </prime-column>

          <template #empty>
            <div class="text-center p-4 text-color-secondary">
              <i class="pi pi-inbox text-4xl mb-2"></i>
              <p>Записи не найдены</p>
            </div>
          </template>
        </prime-data-table>
      </div>

      <div v-else class="flex align-items-center justify-content-center flex-1">
        <prime-message severity="info" :closable="false">Записи скрыты или отсутствуют!</prime-message>
      </div>
    </div>
  </div>

  <!-- Правая колонка: Текст отзыва -->
  <div class="col-12 md:col-5 p-2">
    <div class="border-round surface-50 border-1 surface-border p-3 h-full flex flex-column gap-2">
      <div class="flex align-items-center gap-2 px-1">
        <!-- Всегда стандартная иконка -->
        <i class="pi pi-pencil text-primary"></i>
        <!-- Всегда стандартный цвет текста -->
        <span class="font-bold text-lg text-color">Текст отзыва</span>
      </div>

      <prime-textarea
          :autoResize="true"
          rows="6"
          cols="30"
          :value="reviewMessage"
          class="w-full flex-1"
          placeholder="Оставьте комментарий"
          fluid
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardEmployeeReviewsTable",
  props: {
    records: {
      type: Array,
      default: () => []
    },
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedRecords: null,
      metaKey: true,
      reviewMessage: 'There is a review'
    };
  },
  methods: {
    onRowSelect(event) {
      this.reviewMessage = event.data.reviews_review_text
    },
    getPacientName(pacient){
      return pacient ?? 'Аноним'
    },
    getContact(telephone){
      return telephone ?? 'Контакт для связи не оставлен'
    },
    getEmployeeFullName(data){
      return data.employees_employee_surname + ' ' + data.employees_employee_first_name + ' ' + data.employees_employee_second_name;
    }
  }
}
</script>

<style scoped>
/* Здесь больше нет переопределений цветов */
</style>