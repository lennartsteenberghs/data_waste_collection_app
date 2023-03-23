<template>
  <q-layout view="lHh Lpr lFf">
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
    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import LanguageChooser from "src/components/LanguageChooser.vue";

export default defineComponent({
  name: "MenuLayout",
  props: [LanguageChooser],
  components: {},
  setup(props) {
    return {};
  },
});
</script>
