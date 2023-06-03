<template>
  <q-btn-dropdown
    class="p-0 pl-1 m-0 shadow-none"
    color="space-cadet"
    :icon="fasGlobe"
    size="12px"
  >
    <q-list class="shadow-none">
      <q-item
        v-for="entry in languages"
        clickable
        v-close-popup
        @click="changeLocale(entry.value)"
      >
        <q-item-section>
          <flag :iso="entry.flag" v-bind:squared="false" />
          <div>{{ entry.value }}</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { fasGlobe } from "@quasar/extras/fontawesome-v6";

export default {
  name: "LanguageChooser",
  props: [],
  setup(props) {
    const { locale } = useI18n({ useScope: "global" });
    // unimplemented languages can be commented out
    const languages = ref([
      { flag: "us", value: "en", label: "English" },
      // { flag: "aw", value: "aw", label: "Papiamentu" },
      // { flag: "es", value: "es", label: "Español" },
      { flag: "nl", value: "nl", label: "Nederlands" },
    ]);

    const changeLocale = (newLocale) => {
      locale.value = newLocale;
    };
    return { locale, languages, changeLocale, fasGlobe };
  },
};
</script>
