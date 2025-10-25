<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <prime-button class="p-button-sm" icon="pi pi-arrow-right" @click="visible = true" />
      </template>
    </prime-toolbar>
  </div>
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
  <div id="overlays">
    <div class="card flex justify-center">
      <prime-drawer v-model:visible="visible" header="Меню">
        <template #header>
          <div class="flex items-center gap-2">
            <prime-avatar image="@/assets/img.png" shape="circle" />
            <span class="font-bold">Администратор</span>
          </div>
        </template>
        <div class="overflow-y-auto">
          <prime-menu :model="items"></prime-menu>
        </div>
        <template #footer>
          <div class="flex items-center gap-2">
            <prime-button label="Account" icon="pi pi-user" class="flex-auto" variant="outlined"></prime-button>
            <prime-button label="Logout" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></prime-button>
          </div>
        </template>
      </prime-drawer>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ControlPanelLayout",
  data() {
    return {
      visible: false,
      items: [
        { label: 'Контроль отзывов', icon: 'pi pi-plus', command: () => {this.$router.push('/dashboard/reviews');}},
        { label: 'Search', icon: 'pi pi-search' }
      ]
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      sectionTitle: 'cp/getSectionTitle',
      menuItems: 'cp/getMenuItems',
    })
  }
}
</script>

<style scoped>
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
  min-height: calc(100vh - 110px)
}
</style>