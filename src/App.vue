<template>
  <div id="wrapper">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import ApplicationLayout from "@/layouts/ApplicationLayout.vue";
import ControlPanelLayout from "@/layouts/ControlPanelLayout.vue";
import 'primeflex/primeflex.css';
export default {
  components: {
    ControlPanelLayout, ApplicationLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout +'Layout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>