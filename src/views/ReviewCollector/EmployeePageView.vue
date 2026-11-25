<template>
  <div class="p-3 md:p-4 flex justify-content-center">
    <!-- Обернули карточку в контейнер для центрирования на больших экранах -->
    <prime-card style="width: 100%; max-width: 800px; overflow: hidden" class="shadow-2 border-round">

      <!-- Шапка: Аватар по центру -->
      <template #header>
        <div class="flex justify-content-center pt-5">
          <prime-avatar
              :image="`/avatars/${getEmployee.employeePhoto}`"
              style="width: 128px; height: 128px;"
              shape="circle"
              class="shadow-2"
          />
        </div>
      </template>

      <!-- Заголовок и подзаголовок: по центру, аккуратные шрифты -->
      <template #title>
        <div class="text-center text-2xl font-bold text-color mt-2">
          {{ getEmployee.employeeFullName }}
        </div>
      </template>
      <template #subtitle>
        <div class="text-center text-color-secondary text-lg">
          {{ getEmployee.employeePosition }}
        </div>
      </template>

      <!-- Контент: Описание с ограничением ширины, чтобы текст было удобно читать -->
      <template #content>
        <p
            class="m-0 text-center line-height-3 text-color-secondary"
            style="max-width: 650px; margin: 0 auto;"
        >
          {{ getEmployee.employeeDescription }}
        </p>
      </template>

      <!-- Футер: Кнопки по центру (без изменения вашей логики) -->
      <template #footer>
        <div class="flex flex-wrap justify-content-center gap-2 mt-2">
          <prime-button
              label="Поблагодарить"
              size="large"
              severity="success"
              icon="pi pi-thumbs-up"
              @click="sendPositiveReview"
          ></prime-button>

          <prime-button
              label="Пожаловаться"
              size="large"
              severity="danger"
              icon="pi pi-thumbs-down"
              @click="sendNegativeReview"
          ></prime-button>
        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "StartPageView",
  computed:{
    ...mapGetters({
      getEmployee: "app/getEmployee"
    })
  },
  methods: {
    ...mapActions({
      getEmployeeAction: "app/getEmployeeAction"
    }),
    sendPositiveReview(){
      this.$router.push('/app/review/positive/' + this.$route.params.uuid);
    },
    sendNegativeReview(){
      this.$router.push('/app/review/negative/' + this.$route.params.uuid);
    },
  },
  created(){
    this.getEmployeeAction(this.$route.params.uuid)
  }
}
</script>

<style scoped>

</style>