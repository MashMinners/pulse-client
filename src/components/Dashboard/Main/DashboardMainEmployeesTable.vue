<template>
  <div>
    <div v-if="records.length !==0">
      <prime-data-table editMode="cell" class="editable-cells-table p-datatable-sm"  :value="records"
                        removableSort
                        stripedRows

                        responsiveLayout="scroll"
                        :paginator="true" :rows="10"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[10,20,50]"
                        currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
        <prime-column header="" style="width:96px">
          <template #body="slotProps">
            <prime-avatar :image="`/avatars/${slotProps.data.employeePhoto}`" style="width: 64px; height: 64px" shape="circle"/>
          </template>
        </prime-column>
        <prime-column field="employeeFullName" header="Сотрудник" :sortable="true"></prime-column>
        <prime-column header="Положительные" :sortable="true">
          <template #body="slotProps">
            <prime-button label="" rounded severity="success" class="mx-1" :badge="slotProps.data.employeePositiveRatingCount"/>
          </template>
        </prime-column>
        <prime-column header="Отрицательные">
          <template #body="slotProps">
            <prime-button label="" rounded severity="danger" class="mx-1" :badge="slotProps.data.employeeNegativeRatingCount"/>
          </template>
        </prime-column>

      </prime-data-table>
    </div>
    <div v-else>
      <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardMainEmployeesTable",
  props: {
    //records: [] // Объявляем, что ожидаем строку
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    }
  }
}
</script>

<style scoped>

</style>