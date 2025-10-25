<template>
  <div>
    <prime-card style="width: 100%; overflow: hidden">
      <template #header>
        <img alt="user header"  src="../../assets/Chervinsky1.png" />
      </template>
      <template #title>Червинский А.Н.</template>
      <template #subtitle>Врач-терапевт участковый</template>
      <template #content>
        <p class="m-0">
          Андрей Николаевич, достойный специалист, многодетный отец, гражданин. Занимаясь терапией он полностью отдает себя пациенту
          ведь основная цель этого человека - вылечить ВАС!
        </p>
      </template>
      <template #footer>
        <div class="flex-auto mt-1">
          <prime-button class="mr-4" label="Поблагодарить" size="large" @click = GoGood></prime-button>
          <prime-button label="Пожаловаться" size="large" severity="danger" @click = GoBad></prime-button>
        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
export default {
  name: "StartPageView",
  methods: {
    GoGood(){
      this.$router.push('/good-review');
    },
    GoBad(){
      this.$router.push('/bad-review');
    },
  }
}
</script>

<style scoped>

</style>