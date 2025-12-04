<template>
  <div>
    <prime-card style="width: 100%; overflow: hidden">
      <template #header>
        <prime-avatar :image="`/avatars/${getEmployee.employeePhoto}`" style="width: 128px; height: 128px;" shape="circle"/>
      </template>
      <template #title>{{ getEmployee.employeeFullName }}</template>
      <template #subtitle>{{ getEmployee.employeePosition }}</template>
      <template #content>
        <p class="m-0">{{ getEmployee.employeeDescription }}</p>
      </template>
      <template #footer>
        <div class="flex-auto mt-1">
          <prime-button class="mr-4" label="Поблагодарить" size="large" @click = sendPositiveReview></prime-button>
          <prime-button label="Пожаловаться" size="large" severity="danger" @click = sendNegativeReview></prime-button>
        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "StartPageView",
  computed:{
    ...mapGetters({
      getEmployee: "app/getEmployee"
    })
  },
  methods: {
    ...mapActions({
      getEmployeeAction: "app/getEmployeeAction"
    }),
    sendPositiveReview(){
      this.$router.push('/app/review/positive/' + this.$route.params.uuid);
    },
    sendNegativeReview(){
      this.$router.push('/app/review/negative/' + this.$route.params.uuid);
    },
  },
  created(){
    this.getEmployeeAction(this.$route.params.uuid)
  }
}
</script>

<style scoped>

</style>