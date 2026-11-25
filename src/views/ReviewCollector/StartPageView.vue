<template>
  <div class="p-3 md:p-4"> <!-- Добавили отступы для мобильных экранов -->
    <prime-card>
      <template #title>
        <div class="flex flex-column align-items-center gap-2 text-center">
          <prime-avatar image="/avatars/shilova.png" style="width: 64px; height: 64px;" shape="circle" />
          <div class="flex flex-column align-items-center">

            <div class="flex align-items-center gap-2">
              <i class="pi pi-info-circle text-primary"></i>
              <span class="text-xl font-bold">Здравствуйте! Ознакомьтесь с представленной информацией.</span>
            </div>
          </div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-column align-items-center text-center w-full">

          <!-- Текст адаптивный, но не шире 650px -->
          <p class="m-0 mb-4 text-color-secondary line-height-3" style="max-width: 650px; width: 100%;">
            Мы ценим ваше мнение. Вы можете рассказать о работе сотрудника так, как вам удобно.
          </p>

          <!-- Блок с вариантами -->
          <div
              class="p-3 border-round surface-50 border-1 surface-border mb-4 text-left"
              style="max-width: 650px; width: 100%;"
          >
            <div class="flex align-items-start gap-2">
              <i class="pi pi-user text-primary mt-1"></i>
              <div>
                <span class="font-medium">Анонимно</span>
                <span class="text-color-secondary text-sm ml-2">— просто напишите отзыв, и мы не узнаем, кто вы.</span>
              </div>
            </div>
            <div class="flex align-items-start gap-2 mt-2">
              <i class="pi pi-phone text-primary mt-1"></i>
              <div>
                <span class="font-medium">Для обратной связи</span>
                <span class="text-color-secondary text-sm ml-2">— если хотите получить ответ, укажите ФИО и телефон (по желанию).</span>
              </div>
            </div>
          </div>

          <!-- Ссылки на политики -->
          <div class="text-sm text-color-secondary mb-4">
            <div class="mb-2 flex align-items-center justify-content-center">
              <i class="pi pi-file-edit mr-2"></i>
              Перед отправкой отзыва рекомендуем ознакомиться:
            </div>
            <div class="flex flex-column gap-1 align-items-center">
              <a href="https://чугуевская-црб.рф/privacy-policy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                Политика конфиденциальности персональных данных
              </a>
              <a href="https://чугуевская-црб.рф/processing-policy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                Политика обработки персональных данных
              </a>
            </div>
          </div>

          <!-- Блок с выбором варианта отзыва -->
          <div
              class="flex flex-column gap-3 p-3 border-round surface-100 border-1 surface-border text-left"
              style="max-width: 650px; width: 100%;"
          >

            <!-- Чекбокс 1: Согласие на обработку -->
            <div class="flex align-items-start gap-2">
              <prime-checkbox
                  v-model="consentProcessing"
                  :binary="true"
                  inputId="consentProcessing"
                  @change="onCheckboxChange('processing')"
                  class="mt-1"
              />
              <div>
                <label for="consentProcessing" class="text-sm cursor-pointer select-none line-height-3">
                  Я согласен на обработку моих персональных данных (ФИО, номер телефона) для обратной связи со мной
                </label>
                <div class="text-xs text-color-secondary mt-1 line-height-2">
                  <i class="pi pi-info-circle mr-1"></i>
                  Отметьте, только если планируете указать контакты.
                </div>
              </div>
            </div>

            <!-- Разделитель -->
            <hr class="my-0 border-top-1 border-300 w-full" style="opacity: 0.5;" />

            <!-- Чекбокс 2: Анонимно -->
            <div class="flex align-items-start gap-2">
              <prime-checkbox
                  v-model="consentAnonymous"
                  :binary="true"
                  inputId="consentAnonymous"
                  @change="onCheckboxChange('anonymous')"
                  class="mt-1"
              />
              <div>
                <label for="consentAnonymous" class="text-sm cursor-pointer select-none line-height-3">
                  Желаю оставить отзыв анонимно
                </label>
                <div class="text-xs text-color-secondary mt-1 line-height-2">
                  <i class="pi pi-eye-slash mr-1"></i>
                  Ваши контактные данные не будут запрошены.
                </div>
              </div>
            </div>

          </div>

          <!-- Кнопка -->
          <transition name="fade">
            <prime-button
                v-if="consentProcessing || consentAnonymous"
                class="mt-4"
                label="Начать"
                size="large"
                @click="start"
            ></prime-button>
          </transition>

        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
export default {
  name: "InformationPageView",
  data() {
    return {
      // Состояния для чекбоксов
      consentProcessing: false,
      consentAnonymous: false,
    };
  },
  methods: {
    onCheckboxChange(type) {
      // 1. Логика взаимоисключения
      if (type === 'processing' && this.consentProcessing) {
        this.consentAnonymous = false;
      } else if (type === 'anonymous' && this.consentAnonymous) {
        this.consentProcessing = false;
      }

      // 2. Определяем, что сохранять в Store
      let choice = null;
      if (this.consentProcessing) choice = 'processing';
      if (this.consentAnonymous) choice = 'anonymous';

      // 3. Сохраняем в Vuex
      if (choice) {
        // Укажите здесь правильное название модуля и экшена (например, 'user/setFeedbackChoice')
        this.$store.dispatch('app/setFeedbackChoiceAction', choice);
      } else {
        // Если обе галочки сняты (хотя по логике это невозможно, если кликать по одной)
        this.$store.dispatch('app/setFeedbackChoiceAction', null);
      }
    },
    start(){
      this.$router.push('/app/employee/' + this.$route.params.uuid);
    },
  }
}
</script>

<style scoped>

</style>