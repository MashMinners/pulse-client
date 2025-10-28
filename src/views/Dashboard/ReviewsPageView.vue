<template>
  <div class="card">
    <prime-data-table
        :value="reviews"
        stripedRows
        tableStyle="min-width: 50rem"
        size="small"
    >
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Products</span>
          <prime-button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <prime-column header="#">
        <template #body="slotProps">
          <!--<img :src="require('@/assets/'+ slotProps.data.doctorPhoto)" style="width: 64px; border-radius: 10px;"/>-->
          <prime-avatar :image="`/images/${slotProps.data.doctorPhoto}`" style="width: 64px; height: 64px" shape="circle"/>
        </template>
      </prime-column>
      <prime-column field="doctorFullName" header="Доктор"></prime-column>
      <prime-column header="Статус">
        <template #body="slotProps">
          <prime-tag :value="slotProps.data.reviewStatusMes" :severity="getSeverity(slotProps.data)" />
        </template>
      </prime-column>
    </prime-data-table>
    <prime-divider></prime-divider>
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