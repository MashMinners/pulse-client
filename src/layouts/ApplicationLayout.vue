<template>
  <div id="app-header"></div>
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

    }
  },
  components: {

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

</style>