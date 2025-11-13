<template>
  <!--<div class="flex">
    <div class="flex-1 bg-primary font-bold text-center p-4 border-round">
      <prime-card style="width: 15rem; height: 15rem; overflow: hidden">
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="Положительные" severity="success" class="w-full" badge="2"/>
            <prime-button label="Отрицательные" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round ml-4">2
    </div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">3
    </div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">4
    </div>
  </div>-->
  <div class="formgrid grid">
    <div class="bg-primary col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="" severity="success" class="w-full" badge="2"/>
            <prime-button label="" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="" severity="success" class="w-full" badge="2"/>
            <prime-button label="" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="" severity="success" class="w-full" badge="2"/>
            <prime-button label="" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="" severity="success" class="w-full" badge="2"/>
            <prime-button label="" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button label="" severity="success" class="w-full" badge="2"/>
            <prime-button label="" severity="danger" class="w-full" />
          </div>
        </template>
      </prime-card>
    </div>
    <div class="col-2">
      <prime-card>
        <template #header>
          <img alt="user header" :src="require('../../assets/Chervinsky1.png')" style="width: 96px; height: 96px" class="mt-2"/>
        </template>
        <template #title>Червинский А.Н.</template>
        <template #content>
          <p class="m-0">
            1111
          </p>
        </template>
        <template #footer>
          <div class="flex gap-2 mt-1">
            <prime-button icon="pi pi-check" label="" severity="success" class="w-full" badge="2"/>
            <prime-button icon="pi pi-times" label="" severity="danger" class="w-full" badge="3"/>
          </div>
        </template>
      </prime-card>
    </div>
    <!--<div class="flex-1 bg-primary ml-4">456</div>
    <div class="flex-1 bg-primary ml-4">456</div>-->
  </div>
</template>

<script>
export default {
  name: "MainPageView"
}
</script>

<style scoped>

</style>