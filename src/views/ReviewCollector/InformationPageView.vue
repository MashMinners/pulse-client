<template>
<div>
  <prime-message severity="info" :life="10000">
    <template #icon>
      <prime-avatar image="/avatars/shilova.png" style="width: 64px; height: 64px;" shape="circle" />
    </template>
    <span class="ml-2">Здравсвуйте! Ознакомьтесь с представленной информацией</span>
  </prime-message>
</div>
</template>

<script>
export default {
  name: "InformationPageView"
}
</script>

<style scoped>

</style>