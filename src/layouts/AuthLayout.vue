<template>
  <div id="authentication">
    <section id="main-section">
      <component
          :is="getComponent"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
  }
}
</script>

<style scoped>

</style>