<template>
  <div id="app-header">
    <img alt="Vue logo" src="../assets/img.png">
    <h1>Чугуевская центральная районная больница</h1>
    <h3>Краевое государственное бюджетное учреждение здравоохранения</h3>
  </div>
  <div id="app-content">
        <!--suppress JSValidateTypes -->
        <component
            :is="getComponent"
        />
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "ApplicationLayout",
  data() {
    return {
      //sideBarVisible: false
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
    }),
  }
}
</script>

<style scoped>
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
  min-height: calc(100vh - 250px)
}
</style>