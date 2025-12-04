<template>
  <div>
    <prime-panel>
      <prime-message severity="success">
        <template #icon>
          <!--<img class="employee-photo centered" :src="require('../../assets/Chervinsky1.png')" width="100" style="border-radius: 50%">-->
        </template>
        <span class="ml-2"> Ваш отзыв является полностью <b>АНОНИМНЫМ</b> и нужен нам для оценки работы выбранного Вами специалиста на основе Вашего мнения.
        Но так же вы можете оставить Ваш контакт в случае если Вам необходима обратная связь
        </span>
      </prime-message>
      <prime-divider></prime-divider>
      <div class="flex-auto mb-2">
        <label for="ssn" class="font-bold block mb-2">Представьтесь:</label>
        <prime-input-text v-model="pacient"  placeholder="Имя, Отчество" />
      </div>
      <div class="flex-auto mb-2">
        <label for="ssn" class="font-bold block mb-2">Контактный номер телефона:</label>
        <prime-input-mask id="ssn" v-model="telephone" mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" />
      </div>
      <div class="flex-auto mb-2">
        <label for="review-area" class="font-bold block mb-2">Поделитесь своим мнением:</label>
        <prime-textarea id="review-area"  v-model="message" autoResize rows="5" cols="30" />
      </div>
      <div class="flex-auto mb-2">
        <prime-button label="Отправить" @click="finishPositive"></prime-button>
      </div>
      <prime-divider></prime-divider>
    </prime-panel>
  </div>
</template>

<script>
import {mapActions} from "vuex";

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
      this.sendPositiveReviewAction({
        pacient: this.pacient,
        telephone: this.telephone,
        message: this.message,
        reviewStatus: '1'
      });
      this.$router.push({name: 'finish'});
    },
  }
}
</script>

<style scoped>

</style>