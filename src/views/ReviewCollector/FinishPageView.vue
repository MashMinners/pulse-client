<template>
  <div v-if="getReviewStatus === 'good'">
    <prime-message>
      {{getPacient}} ваш отзыв принят. Спасибо!
    </prime-message>

  </div>
  <div v-else-if="getReviewStatus === 'bad'">
    <prime-message severity="error">
      <b><i>{{getPacient}}</i></b> ваш отзыв принят. Спасибо! Наш администратор позвонит вам с номера телефона: <b>8908-22-33-44-1</b>
      в ближайшее время
    </prime-message>
  </div>
  <div v-else>
    !
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FinishPageView",
  methods: {
    checkReviewStatus(){

    }
  },
  computed: {
    ...mapGetters({
      getReviewStatus: "app/getReviewStatus",
      getPacient: "app/getPacient"
    })
  },
  //mounted(){
    //this.checkReviewStatus();
  //}
}
</script>

<style scoped>

</style>