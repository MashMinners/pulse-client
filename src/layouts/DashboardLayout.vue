<template>
  <div id="app-header"></div>
  <div id="app-content">
    <prime-card>
      <template #title>{{ sectionTitle }}</template>
      <template #content>
        <component
            :is="getComponent"
        />
      </template>
    </prime-card>
  </div>
  <div id="overlays"></div>
</template>

<script>

export default {
  name: "DashboardLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
  },
  data() {
    return {
      visible: false,
      sectionTitle: "Заголовок страницы"
    }
  }
}
</script>

<style>
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
  min-height: calc(100vh - 110px)
}
</style>