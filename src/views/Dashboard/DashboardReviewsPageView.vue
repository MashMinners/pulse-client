<template>
  <div class="formgrid grid">
    <div class="col-6">
      <prime-toolbar class="mb-6">
        <template #start>
          <prime-button label="New" icon="pi pi-plus" class="mr-2"/>
        </template>
        <template #end>
          <prime-icon-field>
            <prime-input-icon>
              <i class="pi pi-search" />
            </prime-input-icon>
            <prime-input-text placeholder="Найти" />
          </prime-icon-field>
        </template>
      </prime-toolbar>
    </div>
    <div class="col-12">Content will be here</div>
  </div>
</template>

<script>
export default {
  name: "DashboardReviewsPageView"
}
</script>

<style scoped>

</style>