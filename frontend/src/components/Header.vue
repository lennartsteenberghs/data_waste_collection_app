<template>
  <q-header elevated>
    <q-toolbar class="px-5 pt-5 pb-2 bg-space-cadet">
      <q-avatar square>
        <img class="" :src="require('../assets/aruba.png')" />
      </q-avatar>

      <q-toolbar-title class="text-center text-2xl">
        {{ $t("toolbarTitle") }}</q-toolbar-title
      >
      <LanguageChooser />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import LanguageChooser from "src/components/LanguageChooser.vue";

export default defineComponent({
  name: "Header",
  components: { LanguageChooser },
  setup() {
    return {};
  },
});
</script>
