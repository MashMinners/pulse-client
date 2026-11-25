<template>
  <div class="p-3 md:p-4 flex justify-content-center">
    <prime-card style="width: 100%; max-width: 800px;" class="shadow-2 border-round">

      <!-- Заголовок -->
      <template #title>
        <div class="text-center text-2xl font-bold text-color mt-2">
          Оставить отзыв
        </div>
      </template>

      <template #content>
        <div class="flex flex-column align-items-center w-full">

          <!-- Информационное сообщение (стилизовано под общую концепцию) -->
          <prime-message
              severity="success"
              class="w-full mb-4"
              style="max-width: 650px;"
          >
            <template #icon>
              <i class="pi pi-info-circle text-xl"></i>
            </template>
            <div class="line-height-3 text-sm">
              <!-- Текст для анонимного отзыва -->
              <span v-if="feedbackChoice === 'anonymous'">
                Ваш отзыв является полностью <b>АНОНИМНЫМ</b>. Он используется для объективной оценки профессиональной деятельности выбранного Вами специалиста на основании Вашего мнения.
              </span>

              <!-- Текст для отзыва с обратной связью -->
              <span v-else>
                Ваш отзыв помогает нам объективно оценить качество медицинской помощи, оказываемой данным специалистом в КГБУЗ «Чугуевская ЦРБ».
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

            <!-- Кнопка отправки -->
            <div class="flex justify-content-center mt-2">
              <prime-button
                  label="Отправить"
                  size="large"
                  severity="success"
                  icon="pi pi-send"
                  @click="finishPositive"
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
  name: "PositiveReviewPageView",
  data() {
    return {
      pacient: null,
      telephone: null,
      message: null
    }
  },
  methods: {
    ...mapActions({
      sendPositiveReviewAction: "app/sendPositiveReviewAction"
    }),
    finishPositive(){
      // Если выбран анонимный отзыв, принудительно очищаем контакты перед отправкой
      const isAnonymous = this.feedbackChoice === 'anonymous';
      this.sendPositiveReviewAction({
        pacient: isAnonymous ? null : this.pacient,
        telephone: isAnonymous ? null : this.telephone,
        message: this.message,
        reviewStatus: '1'
      });
      this.$router.push({name: 'finish'});
    },
    checkDoctorId(){
      //Если случайно обновил страницу, то перекинет (сейчас на финиш, позже на страницу ошибки с педложением отскнаировать снова)
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

</style>