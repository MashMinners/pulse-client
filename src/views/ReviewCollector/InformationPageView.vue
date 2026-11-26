<template>
  <div class="p-3 md:p-4">
    <prime-card>
      <template #title>
        <div class="flex flex-column align-items-center gap-2 text-center">
          <!-- Логотип или аватар (оставил как в исходнике) -->
          <prime-avatar image="/avatars/shilova.png" style="width: 64px; height: 64px;" shape="circle" />
          <div class="flex flex-column align-items-center">
            <div class="flex align-items-center gap-2">
              <i class="pi pi-info-circle text-primary"></i>
              <span class="text-xl font-bold">КГБУЗ «Чугуевская центральная районная больница»</span>
            </div>
          </div>
        </div>
      </template>

      <template #content>
        <div class="flex flex-column align-items-center text-center w-full">

          <!-- Вводный текст -->
          <p class="m-0 mb-4 text-color-secondary line-height-3" style="max-width: 650px; width: 100%;">
            Районное медицинское учреждение в Приморском крае. Подробная информация и запись на приём доступны на официальном сайте.
          </p>

          <!-- Блок: Основные сведения -->
          <div class="p-3 border-round surface-50 border-1 surface-border mb-4 text-left" style="max-width: 650px; width: 100%;">
            <h3 class="text-lg font-medium m-0 mb-3 text-color">Основные сведения</h3>
            <div class="flex flex-column gap-2">
              <div class="flex align-items-start gap-2">
                <i class="pi pi-map-marker text-primary mt-1"></i>
                <div>
                  <span class="font-medium">Адрес:</span>
                  <span class="text-color-secondary text-sm ml-1">692621, Приморский край, с. Чугуевка, ул. Строительная, д. 2</span>
                </div>
              </div>
              <div class="flex align-items-start gap-2">
                <i class="pi pi-user text-primary mt-1"></i>
                <div>
                  <span class="font-medium">Руководство:</span>
                  <span class="text-color-secondary text-sm ml-1">врио главного врача Зубарева Валерия Александровна (с августа 2026 года)</span>
                </div>
              </div>
              <div class="flex align-items-start gap-2">
                <i class="pi pi-id-card text-primary mt-1"></i>
                <div>
                  <span class="font-medium">Реквизиты:</span>
                  <span class="text-color-secondary text-sm ml-1">ИНН 2534003019, ОГРН 1022500509415</span>
                </div>
              </div>
              <div class="flex align-items-start gap-2">
                <i class="pi pi-envelope text-primary mt-1"></i>
                <div>
                  <span class="font-medium">Электронная почта:</span>
                  <a href="mailto:chugcrb@mail.ru" class="text-primary hover:underline text-sm ml-1">chugcrb@mail.ru</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Блок: Контакты и запись -->
          <div class="p-3 border-round surface-50 border-1 surface-border mb-4 text-left" style="max-width: 650px; width: 100%;">
            <h3 class="text-lg font-medium m-0 mb-3 text-color">Контакты и запись</h3>
            <div class="grid text-sm">
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Приёмный покой:</span>
                <span class="text-color-secondary">8 (42372) 21-2-46</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Дежурный администратор (18:00–08:00):</span>
                <span class="text-color-secondary">+7 (914) 966-63-82</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Приёмная / секретарь:</span>
                <span class="text-color-secondary">8 (42372) 21-1-44</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Администрация:</span>
                <span class="text-color-secondary">8 (42372) 21-0-92</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Кадры / детское отделение:</span>
                <span class="text-color-secondary">8 (42372) 21-9-74</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Скорая помощь:</span>
                <span class="text-color-secondary">103 или 112</span>
              </div>
              <div class="col-12 md:col-6 mb-2">
                <span class="font-medium block">Единый Call-центр Приморского края:</span>
                <span class="text-color-secondary">1-300</span>
              </div>
            </div>
            <div class="mt-2 pt-2 border-top-1 surface-border text-xs text-color-secondary">
              <i class="pi pi-info-circle mr-1"></i>
              Способы записи: через Госуслуги (ЕПГУ), по телефону, через мессенджер МАХ, в регистратуре или на приёме у врача.
            </div>
          </div>

          <!-- Блок: Направления и специалисты -->
          <div class="p-3 border-round surface-50 border-1 surface-border mb-4 text-left" style="max-width: 650px; width: 100%;">
            <h3 class="text-lg font-medium m-0 mb-3 text-color">Направления и специалисты</h3>
            <p class="text-sm text-color-secondary m-0 line-height-3">
              В больнице работают стационар, амбулаторные подразделения, а также сельские ФАПы и участковые больницы. Перечень врачей (включая терапевтов, педиатра, хирурга, стоматолога, оториноларинголога, инфекциониста, психиатра-нарколога, эндоскописта и других) опубликован в разделе <span class="text-primary font-medium">Специалисты</span>.
            </p>
            <div class="mt-2 p-2 surface-100 border-round text-xs text-color-secondary">
              <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
              Для участников СВО и членов их семей предусмотрено внеочередное оказание медицинской помощи при предъявлении подтверждающих документов.
            </div>
          </div>

          <!-- Кнопка (если нужна навигация) -->
          <!-- <prime-button class="mt-2" label="Перейти на сайт" icon="pi pi-external-link" /> -->

        </div>
      </template>
    </prime-card>
  </div>
</template>

<script>
export default {
  name: "InformationPageView",
  data() {
    return {
      // Здесь можно оставить переменные, если они нужны для других целей
    }
  },
  methods: {
    // Методы, если потребуются
  }
}
</script>

<style scoped>
/* При необходимости добавьте кастомные стили */
.line-height-3 {
  line-height: 1.5;
}
</style>