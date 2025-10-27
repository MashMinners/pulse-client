<template>
  <div>
    <prime-panel>
      <prime-message severity="success">
        <template #icon>
          <img class="employee-photo centered" :src="require('../../assets/Chervinsky1.png')" width="100" style="border-radius: 50%">
        </template>
        <span class="ml-2"> Ваш отзыв является полностью <b>АНОНИМНЫМ</b> и нужен нам для оценки работы выбранного Вами специалиста на основе Вашего мнения.
        Но так же вы можете оставить Ваш контакт в случае если Вам необходима обратная связь
        </span>
      </prime-message>
     <prime-divider></prime-divider>
      <div class="flex-auto mb-2">
        <label for="ssn" class="font-bold block mb-2">Представьтесь:</label>
        <prime-input-text v-model="value1"  placeholder="Имя, Отчество" />
      </div>
      <div class="flex-auto mb-2">
        <label for="ssn" class="font-bold block mb-2">Контактный номер телефона:</label>
        <prime-input-mask id="ssn" v-model="value" mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" />
      </div>
      <div class="flex-auto mb-2">
        <label for="review-area" class="font-bold block mb-2">Поделитесь своим мнением:</label>
        <prime-textarea id="review-area" v-model="value2" autoResize rows="5" cols="30" />
      </div>
      <div class="flex-auto mb-2">
        <prime-button label="Отправить" @click="finishGood"></prime-button>
      </div>
      <prime-divider></prime-divider>
    </prime-panel>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "GoodPageView",
  methods: {
    ...mapMutations({
      //Вот здесь мутация которая в стате ставит данные для отображения на финише но в хорошей форме
    }),
    ...mapActions({
      sendGoodReview: "app/sendGoodReview"
    }),
    finishGood(){
      this.$router.push({name: 'finish'});
      this.sendGoodReview();
    },
    checkDoctorId(){
      //Если случайно обновил страницу, то перекинет (сейчас на финиш, позже на страницу ошибки с педложением отскнаировать снова)
      if(this.getDoctorId === null){
        this.$router.push({name: 'finish'});
      }
    }
  },
  computed: {
    ...mapGetters({
      getDoctorId: "app/getDoctorId"
    })
  },
  mounted(){
    this.checkDoctorId();
  }
}
</script>

<style scoped>

</style>