<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="text-h1 text-center">Waste Data Collection</div>
      <div class="text-h3 text-center">{{ message }}</div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import getMessages from "src/composables/getMessages";

export default defineComponent({
  name: "ThankYouLayout",
  components: {},
  setup() {
    const { message, error, load } = getMessages();

    load();

    return { message, error };
  },
});
</script>

<style>
h1,
h3 {
  text-align: center;
}
</style>
