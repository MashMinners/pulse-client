<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <prime-button class="p-button-sm" icon="pi pi-bars" @click="visible = true" />
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <prime-avatar image="/images/Shilova.png" style="width: 48px; height: 48px" shape="circle"/>
          <prime-button label="Выход" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></prime-button>
        </div>
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
            <prime-avatar image="/images/Shilova.png" shape="circle" size="xlarge"/>
            <p class="font-bold">Администратор</p>
          </div>
        </template>
        <div class="overflow-y-auto">
          <prime-menu :model="menuItems">
            <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom @click="visible = false">
                <a :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </template>
          </prime-menu>
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
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      sectionTitle: 'dashboard/getSectionTitle',
      menuItems: 'dashboard/getMenuItems',
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