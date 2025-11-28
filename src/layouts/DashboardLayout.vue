<template>
  <div id="app-header"></div>
  <div id="app-content"></div>
  <div id="overlays"></div>
</template>

<script>

export default {
  name: "ControlPanelLayout",
  data() {
    return {
      visible: false
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
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