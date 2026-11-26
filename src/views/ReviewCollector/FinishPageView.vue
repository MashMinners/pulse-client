<template>
  <div class="p-3 md:p-4 flex justify-content-center">
    <prime-card style="width: 100%; max-width: 800px;" class="shadow-2 border-round">

      <!-- Заголовок -->
      <template #title>
        <div class="text-center text-2xl font-bold text-color mt-2">
          Отзыв отправлен
        </div>
      </template>

      <template #content>
        <div class="flex flex-column align-items-center w-full">

          <div class="w-full flex flex-column gap-4 align-items-center" style="max-width: 650px;">

            <!-- Сообщение для позитивного отзыва -->
            <div v-if="getReviewStatus === '1'" class="w-full">
              <prime-message severity="success" class="w-full">
                <template #icon>
                  <i class="pi pi-check-circle text-xl"></i>
                </template>
                <div class="line-height-3 text-sm">
                  <span v-if="getPacient"><b>{{ getPacient }}</b> Ваш отзыв принят. Спасибо!</span>
                  <span v-else>Ваш отзыв принят. Спасибо!</span>
                </div>
              </prime-message>
            </div>

            <!-- Сообщение для негативного отзыва -->
            <div v-else-if="getReviewStatus === '0'" class="w-full">
              <prime-message severity="error" class="w-full">
                <template #icon>
                  <i class="pi pi-exclamation-circle text-xl"></i>
                </template>
                <div class="line-height-3 text-sm">
                  <!-- Вывод имени, если оно есть -->
                  <span v-if="getPacient"><b><i>{{ getPacient }}</i></b>, </span>

                  <!-- Текст для АНОНИМНОГО отзыва -->
                  <span v-if="feedbackChoice === 'anonymous'">
                    Ваша жалоба принята. Спасибо!
                  </span>

                  <!-- Текст для отзыва С КОНТАКТАМИ -->
                  <span v-else>
                    Ваш отзыв принят. Спасибо! Если Вы хотите, чтобы мы с Вами связались, пожалуйста, нажмите кнопку «Жду обратную связь».
                  </span>
                </div>
              </prime-message>
            </div>

            <!-- Таймер -->
            <div class="flex justify-content-center mt-2">
              <prime-knob v-model="timerCount" :max="60" size="120" />
            </div>
            <p class="text-center text-color-secondary text-sm m-0">
              Автоматический переход через {{ timerCount }} сек.
            </p>

            <!-- Кнопка (скрыта для анонимных отзывов) -->
            <div v-if="getReviewStatus === '0' && feedbackChoice !== 'anonymous'" class="flex justify-content-center mt-2">
              <prime-button
                  label="Жду обратную связь"
                  size="large"
                  severity="info"
                  icon="pi pi-clock"
                  @click="requestFeedback"
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
  name: "FinishPageView",
  data() {
    return {
      timerEnabled: false,
      timerCount: 60
    }
  },
  methods: {
    ...mapActions({
      requestFeedbackAction: "app/requestFeedbackAction"
    }),
    requestFeedback(){
      this.requestFeedbackAction();
      this.$router.push('/info');
    },
    start(){
      this.pauseTimer();
      setTimeout(() => {
        this.timerCount = 60;
      }, 500);
      this.$router.push('/info');
    },
    playTimer() {
      this.timerEnabled = true;
    },
    pauseTimer() {
      this.timerEnabled = false;
    }
  },
  computed: {
    ...mapGetters({
      getReviewStatus: "app/getReviewStatus",
      getPacient: "app/getPacient",
      // Добавляем геттер для получения выбора пользователя
      feedbackChoice: "app/getFeedbackChoice"
    })
  },
  watch: {
    // Синий таймер
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else if (value === 0){
          this.start();
        }
      },
      immediate: true
    },
  },
  mounted(){
    this.playTimer();
  }
}
</script>

<style scoped>
/* Плавное появление и аккуратные отступы карточки */
:deep(.p-card-body) {
  padding: 1.5rem 2rem 2rem 2rem;
}
</style>