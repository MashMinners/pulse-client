<template>
  <div class="p-3 md:p-4 flex justify-content-center">
    <prime-card style="width: 100%; max-width: 800px;" class="shadow-2 border-round">

      <!-- Заголовок -->
      <template #title>
        <div class="text-center text-2xl font-bold text-color mt-2">
          Оставить жалобу
        </div>
      </template>

      <template #content>
        <div class="flex flex-column align-items-center w-full">

          <!-- Информационное сообщение (красная тема) -->
          <prime-message
              severity="error"
              class="w-full mb-4"
              style="max-width: 650px;"
          >
            <template #icon>
              <i class="pi pi-exclamation-triangle text-xl"></i>
            </template>
            <div class="line-height-3 text-sm">
              <!-- Текст для анонимной жалобы -->
              <span v-if="feedbackChoice === 'anonymous'">
                Ваша жалоба является полностью <b>АНОНИМНОЙ</b>. Она используется для объективной оценки профессиональной деятельности выбранного Вами специалиста на основании Вашего мнения. Вы можете быть уверены в полной конфиденциальности.
              </span>

              <!-- Текст для жалобы с обратной связью -->
              <span v-else>
                Ваша жалоба помогает нам объективно оценить качество медицинской помощи, оказываемой данным специалистом в КГБУЗ «Чугуевская ЦРБ». Если Вы хотите, чтобы с Вами связались, пожалуйста, оставьте свои контактные данные.
              </span>
            </div>
          </prime-message>

          <div class="w-full flex flex-column gap-3" style="max-width: 650px;">

            <!-- Блок с полями ФИО и Телефона (скрывается, если выбран "anonymous") -->
            <div v-if="feedbackChoice !== 'anonymous'" class="flex flex-column gap-3 p-3 border-round surface-50 border-1 surface-border mb-2">
              <div class="flex-auto">
                <label for="pacient" class="font-bold block mb-2 text-color">Представьтесь:</label>
                <prime-input-text id="pacient" v-model="pacient" placeholder="Имя, Отчество" class="w-full" />
              </div>
              <div class="flex-auto">
                <label for="telephone" class="font-bold block mb-2 text-color">Контактный номер телефона:</label>
                <prime-input-mask id="telephone" v-model="telephone" mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" class="w-full" />
              </div>
            </div>

            <!-- Поле для текста отзыва -->
            <div class="flex-auto mb-2">
              <label for="review-area" class="font-bold block mb-2 text-color">Поделитесь своим мнением:</label>
              <prime-textarea id="review-area" v-model="message" autoResize rows="5" class="w-full" />
            </div>

            <!-- Кнопка отправки (красная) -->
            <div class="flex justify-content-center mt-2">
              <prime-button
                  label="Отправить жалобу"
                  size="large"
                  severity="danger"
                  icon="pi pi-send"
                  @click="finishNegative"
              ></prime-button>
            </div>

          </div>
        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "NegativeReviewPageView",
  data() {
    return {
      pacient: null,
      telephone: null,
      message: null
    }
  },
  methods: {
    ...mapActions({
      sendNegativeReviewAction: "app/sendNegativeReviewAction"
    }),
    finishNegative(){
      // Если выбран анонимный отзыв, принудительно очищаем контакты перед отправкой
      const isAnonymous = this.feedbackChoice === 'anonymous';

      this.sendNegativeReviewAction({
        pacient: isAnonymous ? null : this.pacient,
        telephone: isAnonymous ? null : this.telephone,
        message: this.message,
        reviewStatus: '0' // 0 - негативный отзыв
      });
      this.$router.push({name: 'finish'});
    },
    checkDoctorId(){
      if(this.getEmployeeId === null){
        this.$router.push({name: 'start'});
      }
    },
  },
  computed: {
    ...mapGetters({
      getEmployeeId: "app/getEmployeeId",
      feedbackChoice: "app/getFeedbackChoice"
    })
  },
  mounted(){
    this.checkDoctorId();
  }
}
</script>

<style scoped>
/* Оставляем для красоты, если нужно переопределить стандартные отступы */
:deep(.p-card-body) {
  padding: 1.5rem 2rem 2rem 2rem;
}
</style>