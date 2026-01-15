<template>
  <div>
    <prime-panel>
      <prime-message severity="error">
        <template #icon>
          <!--<img class="employee-photo centered" :src="require('../../assets/Chervinsky1.png')" width="100" style="border-radius: 50%">-->
        </template>
        <span class="ml-2"> Ваша жалоба является полностью <b>АНОНИМНОЙ</b> и нужна нам для оценки работы выбранного специалиста.
          Вы можете быть уверены в полной <b>АНОНИМНОСТИ!</b>. Но если вы хотите, чтобы по вашей жалобе мы с Вами связались,
          пожалуйста оставьте ВАШ контактный телефон, а так же Вашы Имя и Отчество
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
        <prime-textarea id="review-area" v-model="message" autoResize rows="5" cols="30" />
      </div>
      <div class="flex-auto mb-2">
        <prime-button label="Отправить" severity="danger" @click="finishNegative"></prime-button>
      </div>
      <prime-divider></prime-divider>
    </prime-panel>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BadPageView",
  data() {
    return {
      pacient: null,
      telephone: null,
      message: null
    }
  },
  methods:{
    ...mapActions({
      sendNegativeReviewAction: "app/sendNegativeReviewAction"
    }),
    finishNegative(){
      this.sendNegativeReviewAction({
        pacient: this.pacient,
        telephone: this.telephone,
        message: this.message,
        reviewStatus: '0'
      });
      this.$router.push({name: 'finish'});
    },
    checkDoctorId(){
      //Если случайно обновил страницу, то перекинет (сейчас на финиш, позже на страницу ошибки с педложением отскнаировать снова)
      if(this.getEmployeeId === null){
        this.$router.push({name: 'finish'});
      }
    },
  },
  computed: {
    ...mapGetters({
      getEmployeeId: "app/getEmployeeId"
    })
  },
  mounted(){
    this.checkDoctorId();
  }
}
</script>

<style scoped>

</style>