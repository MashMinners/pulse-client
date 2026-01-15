<template>
  <div id="employees-rating-table" class="col-6">
    <prime-message :severity="messageType">{{ message }}</prime-message>
    <div v-if="records.length !==0">
      <prime-data-table editMode="cell" class="editable-cells-table p-datatable-sm"
                        v-model:selection="selectedRecords"
                        :value="records"
                        selectionMode="single"
                        :metaKeySelection="false"
                        @rowSelect="onRowSelect"
                        dataKey="id"
                        removableSort
                        stripedRows
                        responsiveLayout="scroll"
                        :paginator="true" :rows="5"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[5, 10,20,50]"
                        currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
        <prime-column header="" style="width:96px">
          <template #body="slotProps">
            <prime-avatar :image="`/avatars/${slotProps.data.employees_employee_photo}`" style="width: 64px; height: 64px" shape="circle"/>
          </template>
        </prime-column>
        <prime-column header="Сотрудник">
          <template #body="slotProps">
            {{getEmployeeFullName(slotProps.data)}}
          </template>
        </prime-column>
        <prime-column field="reviews_review_date" header="Дата/время" :sortable="true"></prime-column>
        <prime-column header="Пациент">
          <template #body="slotProps">
            {{getPacientName(slotProps.data.reviews_review_pacient)}}
          </template>
        </prime-column>
        <prime-column header="Контакт для связи">
          <template #body="slotProps">
            {{getContact(slotProps.data.reviews_review_pacient_telephone)}}
          </template>
        </prime-column>
        <template #empty> No customers found. </template>
      </prime-data-table>
    </div>
    <div v-else>
      <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
    </div>
  </div>
  <div id="employees-good-review-message"  class="col-6">
    <prime-message :severity="messageType">Текст отзыва</prime-message>
    <prime-textarea
        :autoResize="true"
        rows="5"
        cols="30"
        :value="reviewMessage"
        class="input"
        placeholder="Оставьте комментарий"
        fluid
    />
  </div>

</template>

<script>

export default {
  name: "DashboardEmployeeReviewsTable",
  props: {
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    },
    message: null,
    messageType: null
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
  },
  data() {
    return {
      selectedRecords: null,
      metaKey: true,
      reviewMessage: 'There is a review'
    };
  },
}
</script>

<style scoped>

</style>