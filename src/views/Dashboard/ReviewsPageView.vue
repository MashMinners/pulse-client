<template>
  <div class="formgrid grid">
    <div class="col-6">
      <prime-toolbar class="mb-6">
        <template #start>
          <prime-button label="New" icon="pi pi-plus" class="mr-2" @click="openNew" />
          <prime-button label="Delete" icon="pi pi-trash" severity="danger" variant="outlined" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
        </template>
        <template #end>
          <prime-icon-field>
            <prime-input-icon>
              <i class="pi pi-search" />
            </prime-input-icon>
            <prime-input-text placeholder="Найти" />
          </prime-icon-field>
        </template>
      </prime-toolbar>
      <prime-data-table
          :value="reviews"
          stripedRows
          tableStyle="min-width: 50rem"
          size="small"
      >
        <prime-column header="" style="width:96px">
          <template #body="slotProps">
            <!--<img :src="require('@/assets/'+ slotProps.data.doctorPhoto)" style="width: 64px; border-radius: 10px;"/>-->
            <prime-avatar :image="`/images/${slotProps.data.doctorPhoto}`" style="width: 64px; height: 64px" shape="circle"/>
          </template>
        </prime-column>
        <prime-column field="doctorFullName" header="Сотрудник" sortable ></prime-column>
        <!--<prime-column header="Статус">
          <template #body="slotProps">
            <prime-tag :value="slotProps.data.reviewStatusMes" :severity="getSeverity(slotProps.data)" />
          </template>
        </prime-column>-->
        <prime-column header="Положительные">
          <template #body>
            <prime-button label="" outlined rounded icon="pi pi-check" severity="success" class="mx-1" badge="2"/>
          </template>
        </prime-column>
        <prime-column header="Отрицательные">
          <template #body>
            <prime-button label="" rounded icon="pi pi-times" severity="danger" class="mx-1" badge="2"/>
          </template>
        </prime-column>
      </prime-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsPageView",
  data() {
    return {
     reviews: {
       0: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048921',
         doctorFullName: 'Червинский Андрей Николаевич',
         doctorPhoto: 'Chervinsky1.png',
         pacient: 'Сергей Иванович',
         telephone: '89941922214',
         message: 'Эндрюша просто пушка!',
         reviewStatus: 'good',
         reviewStatusMes: 'Положительный',
       },
       1: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048921',
         doctorFullName: 'Червинский Андрей Николаевич',
         doctorPhoto: 'Chervinsky1.png',
         pacient: 'Иван Сергеевич',
         telephone: '89214325678',
         message: 'Эндрюша сукс дохтар!',
         reviewStatus: 'bad',
         reviewStatusMes: 'Отрицательный',
       },
       2: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048922',
         doctorFullName: 'Капитан Дарья Владимировна',
         doctorPhoto: 'Shilova.png',
         pacient: 'Иван Сергеевич',
         telephone: '89214325678',
         message: 'Дорья гут дохтар!',
         reviewStatus: 'good',
         reviewStatusMes: 'Положительный',
       },
       3: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048922',
         doctorFullName: 'Капитан Дарья Владимировна',
         doctorPhoto: 'Shilova.png',
         pacient: 'Иван Сергеевич',
         telephone: '89214325678',
         message: 'Дорья сукс дохтар!',
         reviewStatus: 'bad',
         reviewStatusMes: 'Отрицательный',
       },
       4: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048921',
         doctorFullName: 'Червинский Андрей Николаевич',
         doctorPhoto: 'Chervinsky1.png',
         pacient: 'Иван Сергеевич',
         telephone: '89214325678',
         message: 'Эндрюша сукс дохтар!',
         reviewStatus: 'bad',
         reviewStatusMes: 'Отрицательный',
       },
       5: {
         doctorID: '01eb0450-8a64-468e-b481-4b197b048921',
         doctorFullName: 'Червинский Андрей Николаевич',
         doctorPhoto: 'Chervinsky1.png',
         pacient: 'Иван Сергеевич',
         telephone: '89214325678',
         message: 'Эндрюша сукс дохтар!',
         reviewStatus: 'bad',
         reviewStatusMes: 'Отрицательный',
       }
     }
    }
  },
  methods: {
    getSeverity(review){
      switch (review.reviewStatus) {
        case 'good':
          return 'success';

        case 'bad':
          return 'danger';

        default:
          return 'warn';
      }
    }
  }
}
</script>

<style scoped>

</style>