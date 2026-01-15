<template>
  <div v-if="getReviewStatus === '1'">
    <prime-message>
      {{getPacient}} ваш отзыв принят. Спасибо!
    </prime-message>
  </div>
  <div v-else-if="getReviewStatus === '0'">
    <prime-message severity="error">
      <b><i>{{getPacient}}</i></b> ваш отзыв принят. Спасибо! Наш администратор позвонит вам с номера телефона: <b>8908-22-33-44-1</b>
      в ближайшее время
    </prime-message>
  </div>
  <div v-else>
    !
  </div>
  <div class="flex-auto mt-1">
    <prime-knob class="centered-text mt-1 mb-1" v-model="timerCount" :max="60"/>
  </div>
  <div class="flex-auto mt-3">
    <prime-button severity="info" @click="goInfo">Информация!</prime-button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FinishPageView",data() {
    return {
      timerEnabled: false,
      timerCount: 60
    }
  },
  methods: {
    goInfo(){
      this.$router.push('/info');
    },
    start(){
      this.pauseTimer()
      setTimeout(() => {
        this.timerCount = 60;
      }, 500);
      //this.clearModel();
      this.$router.push('/');
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
      getPacient: "app/getPacient"
    })
  },
  watch: {
    //Синий таймер
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
        }else if(value === 0){
          this.start()
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    },
  },
  mounted(){
    this.playTimer()
  }
}
</script>

<style scoped>

</style>