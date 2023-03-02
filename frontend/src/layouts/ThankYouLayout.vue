<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <h1>Waste Data Collection</h1>
      <h3>{{ message }}</h3>
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
