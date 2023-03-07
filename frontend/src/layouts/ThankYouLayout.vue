<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="text-h1 text-center">Waste Data Collection</div>
      <div v-if="amount" class="text-h3 text-center">
        This recycle bin already saved {{ amount }} kg of CO2!
      </div>
      <div v-else class="text-h3 text-center">Thank you for registering your waste!</div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ThankYouLayout",
  props: ["amount"],
  components: {},
  setup(props) {
    console.log("co2amount in ThankYouLayout: ", props.amount);
    const amount = ref(props.amount);
    console.log("co2amount in ThankYouLayout: ", amount.value);
    return { amount };
  },
});
</script>

<style>
h1,
h3 {
  text-align: center;
}
</style>
