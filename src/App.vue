<template>
  <div id="wrapper">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import ApplicationLayout from "@/layouts/ApplicationLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import 'primeflex/primeflex.css';
export default {
  components: {
    DashboardLayout, ApplicationLayout
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